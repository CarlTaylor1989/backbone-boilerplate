/*global define*/

define([
  'backbone',
	'app'
], function (Backbone, App) {
  'use strict';

  var Router = Backbone.Router.extend({
		
    routes: {
			'': 'index'
    },
		
		initialize: function() {
			Backbone.history.start({pushState: true});
		},
		
		index: function() {
			App.home();
		}

  });

  return Router;
});
