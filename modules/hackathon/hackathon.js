(function (mw, $) {
	"use strict";

	var hackathon = mw.KBasePlugin.extend({
		setup: function () {
			var _this = this;
			this.addBindings();
			MatchManager.getMatchStartTime().then(function (matchStartTime) {
				//debugger;
				_this.startTime = matchStartTime;
			});
		},

		addBindings: function () {
			//debugger;
		}

	});

	mw.PluginManager.add('hackathon', hackathon);

})
(window.mw, window.jQuery);