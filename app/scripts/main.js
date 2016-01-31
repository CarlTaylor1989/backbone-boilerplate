/*global require*/
'use strict';

require.config({
  shim: {
		underscore: {
			exports: '_'
		},
    bootstrap: {
      deps: ['jquery']
    },
  },
  paths: {
		text: '../bower_components/requirejs-text/text',
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash',
    bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
  }
});

require([
	'routes/router',
	'bootstrap'
], function (AppRouter) {
	new AppRouter();
});
