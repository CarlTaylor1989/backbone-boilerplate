define(function() {
	'use strict';
	
	app.models.User = Backbone.Model.extend({

		getFullName: function() {
			return this.get('first_name')+" "+this.get('last_name');
		}

	});

	it('should have a getFullName() method', function() {
		expect(typeof this.user.getFullName).to.equal('function');
	});
	
});