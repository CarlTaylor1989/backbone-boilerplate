/*global define*/

define([
	'views/portfolio'
], function(HomeView) {

	'use strict';

	return {

		currentView: null,

		// Destroy current view before loading the next
		showView: function(nextView) {
			if(this.currentView) {
				this.currentView.destroy();
			}
			this.currentView = nextView;
			this.currentView.render();
		},

		// Home Page
		home: function() {
			var home = new HomeView();
			this.showView(home);
		}

	};

});