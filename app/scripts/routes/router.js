/*global define*/

define([
  'jquery',
  'backbone',
	'views/portfolio'
], function ($, Backbone, PortfolioView) {
  'use strict';

  var BlogRouter = Backbone.Router.extend({
    routes: {
			'': 'home'
    },
		
		home: function() {
		}

  });

  return BlogRouter;
});
