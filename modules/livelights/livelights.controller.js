angular
    .module( 'livelightsApp', [] )
    .controller( 'livelightsController', [ '$scope', '$timeout', function ( $scope, $timeout ) {

        $( window ).bind( "onMatchMinuteRevealed", function ( event, curMinute ) {
            init( curMinute );
            $timeout( function () {
            }, 100 );
        } );

        $( window ).bind( "onMatchTimeUpdate", function ( event, curMatchMinute ) {
            $timeout( function () {
                if ( $scope.curMatchMinute === null || $scope.curMatchMinute !== curMatchMinute ) {
                    $scope.curMatchMinute = curMatchMinute;
                }
            }, 100 );
        } );

        $( window ).bind( "onNewMatchEvents", function ( event, newEvents ) {
            console.log( "onNewMatchEvents", newEvents );
            $timeout( function () {
                if ( typeof  newEvents === 'object' ) {
                    var result = $.grep( $scope.matchEvents, function ( e ) {
                        return e.id === newEvents.id;
                    } );
                    if ( result.length > 0 ) {
                        return;
                    }
                    var event = newEvents;
                    if ( event.type === "goal" ) {
                        if ( event.team_id === $scope.homeTeamID ) {
                            $scope.homeTeamScore++;
                        } else {
                            $scope.awayTeamScore++;
                        }
                    }
                    $scope.matchEvents.push( event );
                } else if ( typeof  newEvents === 'array' ) {
                    for ( var i = 0; i < newEvents.length; i++ ) {
                        var event = newEvents[ i ];
                        var result = $.grep( $scope.matchEvents, function ( e ) {
                            return e.id === event.id;
                        } );
                        if ( result.length > 0 ) {
                            break;
                        }
                        if ( event.type === "goal" ) {
                            if ( event.team_id === $scope.homeTeamID ) {
                                $scope.homeTeamScore++;
                            } else {
                                $scope.awayTeamScore++;
                            }
                        }
                        $scope.matchEvents.push( event );
                    }
                }
            }, 100 );

        } );
        $scope.showGoals = false;
        $scope.showYellowCards = false;
        $scope.showRedCards = false;
        $scope.showSubtituations = false;
        $scope.matchEvents = [];
        $scope.curMatchMinute = null;
        $scope.homeTeamID = '';
        $scope.awayTeamID = '';
        $scope.homeTeamName = '';
        $scope.homeTeamLogo = '';
        $scope.awayTeamName = '';
        $scope.awayTeamLogo = '';
        $scope.homeTeamScore = 0;
        $scope.awayTeamScore = 0;
        $scope.eventMap = {
            "yellowcard": "assets/img/yellow.png",
            "redcard": "assets/img/red.png",
            "goal": "assets/img/goal.png",
            "substitution": "assets/img/subtitute.png"
        };

        $scope.isNotSubstitution = function ( eventType ) {
            return eventType === "yellowcard" || eventType === "redcard" || eventType === "goal";
        };

        $scope.onShowGoalsChanged = function ( val ) {
            inVideoHighlightsChanged( val, "goal" );
        };

        $scope.onShowYellowCardsChanged = function ( val ) {
            inVideoHighlightsChanged( val, "yellowcard" );
        };

        $scope.onShowRedCardsChanged = function ( val ) {
            inVideoHighlightsChanged( val, "redcard" );
        };

        $scope.onShowSubstitutionsChanged = function ( val ) {
            inVideoHighlightsChanged( val, "substitution" );
        };

        function inVideoHighlightsChanged( val, type ) {
            var req = {};
            req.type = type;
            req.action = val ? "show" : "hide";
            $( '#kaltura_player_1483283898_ifp' )[ 0 ].contentWindow.$( 'body' ).trigger( "toggleInVideoHighlights",
                JSON.stringify( req ) );
        }

        function init( curMinute ) {
            $scope.curMatchMinute = curMinute;
            return MatchManager.getMatchDetails( $scope.curMatchMinute )
                .then( function ( matchDetails ) {
                    $scope.matchEvents = matchDetails.events;
                    $scope.homeTeamID = matchDetails.homeTeamID;
                    $scope.awayTeamID = matchDetails.awayTeamID;
                    $scope.homeTeamName = matchDetails.homeTeamName;
                    $scope.homeTeamLogo = matchDetails.homeTeamLogo;
                    $scope.awayTeamName = matchDetails.awayTeamName;
                    $scope.awayTeamLogo = matchDetails.awayTeamLogo;
                    $scope.homeTeamScore = 0;
                    $scope.awayTeamScore = 0;
                    for ( var i = 0; i < matchDetails.events.length; i++ ) {
                        var event = matchDetails.events[ i ];
                        if ( event.type === "goal" ) {
                            if ( event.team_id === $scope.homeTeamID ) {
                                $scope.homeTeamScore++;
                            } else {
                                $scope.awayTeamScore++;
                            }
                        }
                    }
                    $( window ).trigger( "onInitialMatchEvents", matchDetails.events );
                } );
        }
    } ] );
