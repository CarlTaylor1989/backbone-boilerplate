// -------
// Base View
// -------
define([
	'jquery',
	'underscore',
	'backbone',
	'text!/../templates/_header.html',
	'text!/../templates/_footer.html',
	'text!/../templates/portfolio.html'
], function($, _, Backbone, htmlHeader, htmlFooter, Template) {

	'use strict';

	var BaseView = Backbone.View.extend({
		
		events: {
			'click .nav a': 'navScroll'
		},
		
		navScroll: function(id) {
			$('html, body').animate({
				scrollTop: $('#'+id).offset().top - 40
			}, 1000, 'swing');
		},

		el: '.app-container',

		onBeforeShowBase: function() {
			// Restore footer
			$('.js-footer').show();

			// Hide horizontal navbar on home page
			if(this.id === 'home') {
				$('.js-menu').hide();
			}

			this.setMenuActiveItem();
			this.scrollToTop();
			this.setEventTrackingClicks();
		},

		render: function() {
			// Inject page header, footer, mobile menu, etc.
			this.insertCoreHTML();

			// Set page contents
			this.$el.html(this.template(this.data));
			// After page has rendered
			this.afterRenderBase();

			return this;
		},

		insertCoreHTML: function() {
			// Set header
			var header = _.template(htmlHeader);
			$('.app-header').html(header());

			// Set footer
			var footer = _.template(htmlFooter);
			$('.app-footer').html(footer());
		},

		// Return jQuery element for clicked box, whether box itself or child element clicked
		identifyClickedBox: function(e) {
			return (e.target.tagName !== 'DIV') ? $(e.target).parent() : $(e.target);
		},

		setMenuActiveItem: function(id) {
			$('.nav li').removeClass('active');
			$('.nav li.menu-' + id).addClass('active');
		},

		afterRenderBase: function() {
			var self = this;
			$('.nav a').on('click', function(e) {
				e.preventDefault();
				var id = $(this).data('scroll');
				self.setMenuActiveItem(id);
				self.navScroll(id);
			});
		}

	});

	return BaseView;

});