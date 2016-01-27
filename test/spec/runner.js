'use strict';
require.config({
    baseUrl: 'scripts/',
    paths: {
			jquery: '../app/bower_components/jquery/jquery',
			backbone: '../app/bower_components/backbone/backbone',
			underscore: '../app/bower_components/underscore/underscore'
    },
    shim: {
			underscore: {
				exports: '_'
			},
			jquery: {
				exports: '$'
			},
			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			}
    }
});
 
var specs = [
	'spec/test.js'
];
 
require(specs, function() {
	mocha.run();
});