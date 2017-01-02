angular
    .module( 'livelightsApp', [] )
    .controller( 'livelightsController', [ '$scope', '$timeout', function ( $scope, $timeout ) {

        $( window ).bind( "onMatchMinuteRevealed", function ( event, curMinute ) {
            init( curMinute ).then( function () {
                $timeout( function () {

                }, 100 );
            } );
        } );


        $( window ).bind( "onMatchTimeUpdate", function ( event, curMatchMinute ) {
            $timeout( function () {
                $scope.curMatchMinute = curMatchMinute;
            }, 100 );
        } );


        $( window ).bind( "onNewMatchEvents", function ( newEvents ) {
            $timeout( function () {
                for ( var i = 0; i < newEvents.length; i++ ) {
                    var event = newEvents[ i ];
                    if ( event.type === "goal" ) {
                        if ( event.team_id === $scope.homeTeamID ) {
                            $scope.homeTeamScore++;
                        } else {
                            $scope.awayTeamScore++;
                        }
                    }
                    $scope.events.push( event );
                }
            }, 100 );
        } );

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
                } );
        }
    } ] );
