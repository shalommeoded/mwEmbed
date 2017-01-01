(function ( mw, $ ) {
    "use strict";

    mw.PluginManager.add( 'hackathon', mw.KBasePlugin.extend( {

        setup: function () {
            MatchManager.getMatchStartTime().then( function ( matchTimeObj ) {
                debugger;
            } );
        }

    } ) );

})( window.mw, window.jQuery );