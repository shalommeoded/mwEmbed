(function (mw, $) {
	"use strict";

	var hackathon = mw.KBasePlugin.extend({
		setup: function () {
			this.addBindings();
		},

		addBindings:function(){
			debugger;
		}

	});

	mw.PluginManager.add('hackathon', hackathon);

})
(window.mw, window.jQuery);