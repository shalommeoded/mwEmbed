var MatchManager = (function () {

    function MatchEvents() {
    }

    MatchEvents.prototype = {
        EVENT_END_POINT: 'https://api.soccerama.pro/v1.2/events/match/',
        MATCH_END_POINT: 'https://api.soccerama.pro/v1.2/matches/',
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
        }
    };


    function EventsManager() {
        this.MINUTE = 60000;
        this.matchEvents = null;
        this.events = [];
        this.currentMinute = 0;
        this.matchEvents = new MatchEvents();
    }

    EventsManager.prototype = {


        init: function () {
            setInterval( this.update.bind( this ), this.MINUTE );
        },

        update: function () {
            var self = this;
            this.currentMinute++;
            return this.matchEvents.getEventsPerMinute( this.currentMinute )
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

        getMatchStartTime: function () {
            return this.matchEvents.getMatchData().then( function ( matchData ) {
                return matchData.starting_time;
            } );
        }
    };

    return new EventsManager();
})();


