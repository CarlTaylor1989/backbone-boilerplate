/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
	'views/_base',
	'text!/../templates/portfolio.html'
], function ($, _, Backbone, BaseView, html) {
  'use strict';

  var PortfolioView = BaseView.extend({
		
		template: _.template(html),

    events: {
			'click h5': 'headClick'
		},
		
		headClick: function() {
			console.log('clicked');
		}

  });

  return PortfolioView;
});
