/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
	'models/portfolio',
  'templates'
], function ($, _, Backbone, Portfolio, JST) {
  'use strict';

  var PortfolioView = Backbone.View.extend({
    template: JST['app/scripts/templates/portfolio.ejs'],

    el: 'body',

    events: {
			'click #me': 'completed'
		},

    initialize: function () {
			this.model = new Portfolio();
			
			this.listenTo(this.model, 'change', this.render);
    },
		
		completed: function() {
			this.model.triggerTest();
		},

    render: function () {
//			this.$el.append(this.template());
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return PortfolioView;
});
