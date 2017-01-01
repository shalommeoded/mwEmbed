(function ( mw, $ ) {
    "use strict";

    mw.PluginManager.add( 'hackathon', mw.KBasePlugin.extend( {

        setup: function () {
            MatchManager.getMatchStartTime().then( function ( matchStartTime ) {
                debugger;
            } );
        }

    } ) );

})( window.mw, window.jQuery );