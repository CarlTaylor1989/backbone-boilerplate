/*global require*/
'use strict';

require.config({
  shim: {
		underscore: {
			exports: '_'
		},
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash',
    bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
  }
});

require([
  'backbone',
	'views/portfolio',
	'routes/router'
], function (Backbone, App, Router) {
	new Router();
  Backbone.history.start({pushState: true});
	new App();
});
