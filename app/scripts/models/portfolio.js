/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var PortfolioModel = Backbone.Model.extend({
    url: '',

    initialize: function() {
    },

    defaults: {
    },
		
		triggerTest: function() {
			console.log('test');
		},

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return PortfolioModel;
});
