/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
	'models/blog'
], function ($, _, Backbone, JST, BlogModel) {
  'use strict';

  var BlogView = Backbone.View.extend({
    template: JST['app/scripts/templates/blog.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
			console.log(homeView);
			var blogModel = new BlogModel();
			this.listenTo(blogModel, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return BlogView;
});
