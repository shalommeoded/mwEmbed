var MatchManager = (function () {

    function MatchEvents() {
    }

    MatchEvents.prototype = {
        EVENT_END_POINT: 'https://api.soccerama.pro/v1.2/events/match/',
        MATCH_END_POINT: 'https://api.soccerama.pro/v1.2/matches/',
        TEAM_END_POINT: 'https://api.soccerama.pro/v1.2/teams/',
        MATCH_ID: 699031,
        API_TOKEN: '?api_token=dd8TMmhlRhpiu44sykWAIW6kErW6fXHa6kWRhQj0yXbpJOzZ9dBzHwxIW0KO',
        MATCH_DATA: {
            "id": 699031,
            "weather": {
                "code": "clear",
                "type": "clear sky",
                "icon": "https:\/\/soccerama.pro\/images\/weather\/01n.png",
                "temperature": { "temp": 51.8, "unit": "fahrenheit" },
                "clouds": "0%",
                "humidity": "76%",
                "wind": { "speed": "2.24 m\/s", "degree": null }
            },
            "temperature": "51.8",
            "commentary": true,
            "ht_score": "1-0",
            "ft_score": "4-1",
            "et_score": null,
            "home_team_id": 130,
            "away_team_id": 289,
            "home_score": 4,
            "away_score": 1,
            "home_score_penalties": 0,
            "away_score_penalties": 0,
            "formation": { "home": null, "away": null },
            "date_time_tba": 0,
            "spectators": 79370,
            "starting_date": "2016-12-18",
            "starting_time": "19:45:00",
            "status": "FT",
            "minute": 90,
            "injury_time": 5,
            "extra_time": 0,
            "competition_id": 19,
            "venue_id": 6865,
            "season_id": 646,
            "round_id": 11019,
            "stage_id": 1904,
            "referee_id": 166,
            "aggregate": null,
            "placeholder": false,
            "deleted": false,
            "result_only": false
        },
        EVENTS: [ {
            "id": 1600787,
            "match_id": 699031,
            "team_id": 289,
            "minute": 10,
            "extra_min": null,
            "type": "yellowcard",
            "player_id": 138766,
            "player_name": "P. Piatti"
        }, {
            "id": 1600788,
            "match_id": 699031,
            "team_id": 289,
            "minute": 13,
            "extra_min": null,
            "type": "yellowcard",
            "player_id": 121206,
            "player_name": "Aaron Mart\u00edn"
        }, {
            "id": 1600797,
            "match_id": 699031,
            "team_id": 130,
            "minute": 18,
            "extra_min": null,
            "type": "goal",
            "player_id": 55850,
            "player_name": "L. Su\u00e1rez",
            "assist_id": 36037,
            "assist_player_name": "A. Iniesta"
        }, {
            "id": 1600989,
            "match_id": 699031,
            "team_id": 289,
            "minute": 53,
            "extra_min": null,
            "type": "substitution",
            "player_in_id": 9234,
            "player_in_name": "Roberto Jim\u00e9nez",
            "player_out_id": 8508,
            "player_out_name": "D. Lopez"
        }, {
            "id": 1601030,
            "match_id": 699031,
            "team_id": 289,
            "minute": 65,
            "extra_min": null,
            "type": "yellowcard",
            "player_id": 377,
            "player_name": "F. Caicedo"
        }, {
            "id": 1601042,
            "match_id": 699031,
            "team_id": 130,
            "minute": 66,
            "extra_min": null,
            "type": "substitution",
            "player_in_id": 947,
            "player_in_name": "Rafinha",
            "player_out_id": 3074,
            "player_out_name": "Denis Su\u00e1rez"
        }, {
            "id": 1601049,
            "match_id": 699031,
            "team_id": 130,
            "minute": 67,
            "extra_min": null,
            "type": "goal",
            "player_id": 55850,
            "player_name": "L. Su\u00e1rez",
            "assist_id": null,
            "assist_player_name": null
        }, {
            "id": 1601053,
            "match_id": 699031,
            "team_id": 130,
            "minute": 68,
            "extra_min": null,
            "type": "goal",
            "player_id": 1198,
            "player_name": "J. Alba",
            "assist_id": 62533,
            "assist_player_name": "L. Messi"
        }, {
            "id": 1601073,
            "match_id": 699031,
            "team_id": 289,
            "minute": 71,
            "extra_min": null,
            "type": "substitution",
            "player_in_id": 170748,
            "player_in_name": "Melendo",
            "player_out_id": 377,
            "player_out_name": "F. Caicedo"
        }, {
            "id": 1601108,
            "match_id": 699031,
            "team_id": 130,
            "minute": 74,
            "extra_min": null,
            "type": "substitution",
            "player_in_id": 6695,
            "player_in_name": "S. Umtiti",
            "player_out_id": 72367,
            "player_out_name": "S. Busquets"
        }, {
            "id": 1601122,
            "match_id": 699031,
            "team_id": 289,
            "minute": 79,
            "extra_min": null,
            "type": "goal",
            "player_id": 8508,
            "player_name": "D. Lopez",
            "assist_id": 6551,
            "assist_player_name": "G. Moreno"
        }, {
            "id": 1601143,
            "match_id": 699031,
            "team_id": 289,
            "minute": 79,
            "extra_min": null,
            "type": "substitution",
            "player_in_id": 3078,
            "player_in_name": "Jos\u00e9 Antonio Reyes",
            "player_out_id": 138766,
            "player_out_name": "P. Piatti"
        }, {
            "id": 1601204,
            "match_id": 699031,
            "team_id": 130,
            "minute": 90,
            "extra_min": null,
            "type": "goal",
            "player_id": 62533,
            "player_name": "L. Messi",
            "assist_id": 2447,
            "assist_player_name": "L. Suarez"
        } ],

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
            var self = this;
            var deferred = $.Deferred();

            if ( !self.MATCH_DATA ) {
                $.ajax( {
                    url: this.MATCH_END_POINT + this.MATCH_ID + this.API_TOKEN,
                    success: function ( res ) {
                        deferred.resolve( res );
                    }
                } );
            } else {
                deferred.resolve( self.MATCH_DATA );
            }

            return deferred.promise();
        },

        getTeamData: function ( id ) {
            var deferred = $.Deferred();
            var res = {};

            if ( id === 130 ) {
                res.name = "Barcelona";
            } else {
                res.name = "Espanyol";
            }
            deferred.resolve( res );

            return deferred.promise();
        }
    };


    function EventsManager() {
        this.matchEvents = null;
        this.events = [];
        this.matchEvents = new MatchEvents();
        this.curMinute = null;
        $( window ).bind( "onMatchTimeUpdate", function ( event, currentMinute ) {
            if ( this.curMinute === null || this.curMinute !== currentMinute ) {
                this.curMinute = currentMinute;
                this.update( currentMinute );
            }
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


