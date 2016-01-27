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
			'click .nav a': 'navFocus'
		},
		
		navFocus: function() {
			console.log('nav clicked');
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
			
			this.navFocus();

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

		destroy: function() {
			this.stopListening();
			this.undelegateEvents();
			this.unbind();
		},

		showModal: function(modalID, onComplete) {
			// Acquire new modal content
			var modalTarget = '.js-modal-content-' + modalID;
			var modalContent = {
				header: $(modalTarget+' .js-modal-content-header').html(),
				body:   $(modalTarget+' .js-modal-content-body').html()
			};
			// Determine large or small modal
			if($(modalTarget).attr('data-modal-large') === 'false') {
				$('.js-modal .modal-dialog').removeClass('modal-lg');
			} else {
				$('.js-modal .modal-dialog').addClass('modal-lg');
			}
			// Set header contents
			if(typeof modalContent.header !== 'undefined') {
				$('.js-modal').removeClass('modal-no-header');
				$('.js-modal-header').html(modalContent.header);
			} else {
				$('.js-modal-header').empty();
				$('.js-modal').addClass('modal-no-header');
			}
			// Set body contents and show
			$('.js-modal-body').html(modalContent.body);
			$('.js-modal').modal();

			// Set click handler for close modal link other than close button
			var self = this;
			$('.js-close-modal').click(function() {
				self.closeModal();
			});

			// Set event tracking click handlers for new modal content
			this.setEventTrackingClicks(true);

			// Run callback if specified
			if(typeof onComplete !== 'undefined') {
				onComplete();
			}
		},

		closeModal: function() {
			$('.js-modal').modal('hide');
			$('.modal-backdrop').remove();
		},

		setSharedModalClickHandler: function() {
			var self = this;
			$('.js-shared-modal').click(function(e) {
				e.preventDefault();
				var modal = $(this).attr('data-modal');
				if(typeof modal !== 'undefined') {
					self.showModal(modal);
				}
			});
		},

		// Return jQuery element for clicked box, whether box itself or child element clicked
		identifyClickedBox: function(e) {
			return (e.target.tagName !== 'DIV') ? $(e.target).parent() : $(e.target);
		},

		setMenuActiveItem: function() {
			$('.js-menu li, .js-menu-mobile li').removeClass('is-active');
			$('.js-menu-' + this.id).addClass('is-active');
		},

		setMobileMenuButtonHandlers: function() {
			$('.js-open-mobile-menu').click(function(e) {
				e.preventDefault();
				$('body').addClass('mobile-menu-open');
			});
			$('.js-close-mobile-menu').click(function(e) {
				e.preventDefault();
				$('body').removeClass('mobile-menu-open');
			});
		},

		setThemeClasses: function() {
			// Clear current theme classes
			$('body').attr('class', '');

			// Set new background colour
			if(this.background !== null) {
				$('body').addClass('theme-bg-'+this.background);
			}

			// Set new page theme colour
			if(this.theme !== null) {
				$('body').addClass('theme-'+this.theme);
			}
		},

		scrollToTop: function() {
			window.scrollTo(0, 0);
		}

	});

	return BaseView;

});