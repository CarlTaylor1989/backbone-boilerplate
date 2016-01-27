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
		},

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return PortfolioModel;
});
