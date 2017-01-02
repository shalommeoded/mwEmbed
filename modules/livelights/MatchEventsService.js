var MatchManager = (function () {

    function MatchEvents() {
    }

    MatchEvents.prototype = {
        EVENT_END_POINT: 'https://api.soccerama.pro/v1.2/events/match/',
        MATCH_END_POINT: 'https://api.soccerama.pro/v1.2/matches/',
        TEAM_END_POINT: 'https://api.soccerama.pro/v1.2/teams/',
        MATCH_ID: 699031,
        API_TOKEN: '?api_token=dd8TMmhlRhpiu44sykWAIW6kErW6fXHa6kWRhQj0yXbpJOzZ9dBzHwxIW0KO',
        EVENTS: null,

        getEventsPerMinute: function ( minute ) {
            return this._getEvents().then( function ( events ) {
                var ans = [];
                $.each( events, function ( index, event ) {
                    if ( event.minute <= minute ) {
                        ans.push( event );
                    }
                } );
                return ans;
            } );
        },

        _getEvents: function () {
            var self = this;
            var deferred = $.Deferred();

            if ( !self.EVENTS ) {
                $.ajax( {
                    url: this.EVENT_END_POINT + this.MATCH_ID + this.API_TOKEN,
                    success: function ( res ) {
                        self.EVENTS = res.data;
                        deferred.resolve( self.EVENTS );
                    }
                } );
            } else {
                deferred.resolve( self.EVENTS );
            }
            return deferred.promise();
        },

        getMatchData: function () {
            var deferred = $.Deferred();

            $.ajax( {
                url: this.MATCH_END_POINT + this.MATCH_ID + this.API_TOKEN,
                success: function ( res ) {
                    deferred.resolve( res );
                }
            } );

            return deferred.promise();
        },

        getTeamData: function ( id ) {
            var deferred = $.Deferred();

            $.ajax( {
                url: this.TEAM_END_POINT + id + this.API_TOKEN,
                success: function ( res ) {
                    deferred.resolve( res );
                }
            } );

            return deferred.promise();
        }
    };


    function EventsManager() {
        this.matchEvents = null;
        this.events = [];
        this.matchEvents = new MatchEvents();

        $( window ).bind( "onMatchTimeUpdate", function ( currentMinute ) {
            this.update( currentMinute );
        }.bind( this ) );
    }

    EventsManager.prototype = {

        update: function ( currentMinute ) {
            var self = this;
            return this.matchEvents.getEventsPerMinute( currentMinute )
                .then( function ( curEvents ) {
                    var newEvents = [];
                    if ( curEvents.length > self.events.length ) {
                        var startFrom = self.events.length;
                        for ( var i = startFrom; i < curEvents.length; i++ ) {
                            self.events.push( curEvents[ i ] );
                            newEvents.push( curEvents[ i ] );
                        }
                    }
                    if ( newEvents.length > 0 ) {
                        $( window ).trigger( "onNewMatchEvents", newEvents );
                    }
                } );
        },

        getMatchDetails: function ( minute ) {
            var self = this;
            var res = {};
            return this.matchEvents.getMatchData().then( function ( matchData ) {
                return self.matchEvents.getTeamData( matchData.home_team_id ).then( function ( homeTeamData ) {
                    return self.matchEvents.getTeamData( matchData.away_team_id ).then( function ( awayTeamData ) {
                        res.homeTeamID = matchData.home_team_id;
                        res.awayTeamID = matchData.away_team_id;
                        res.homeTeamName = homeTeamData.name;
                        res.homeTeamLogo = homeTeamData.logo;
                        res.awayTeamName = awayTeamData.name;
                        res.awayTeamLogo = awayTeamData.logo;
                        return self.matchEvents.getEventsPerMinute( minute ).then( function ( events ) {
                            res.events = events;
                            return res;
                        } );
                    } );
                } );
            } );
        }
    };

    return new EventsManager();
})();


