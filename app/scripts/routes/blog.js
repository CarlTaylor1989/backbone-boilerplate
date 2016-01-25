/*global define*/

define([
  'jquery',
  'backbone',
	'views/blog'
], function ($, Backbone, BlogView) {
  'use strict';

  var BlogRouter = Backbone.Router.extend({
    routes: {
			'': 'home'
    },
		
		home: function() {
			var homeView = new BlogView();
		}

  });

  return BlogRouter;
});
