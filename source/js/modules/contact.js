var App = App || {};

;(function() {

	App.Contact = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.form = document.getElementById('contactForm');
		},

		bindEvents: function() {
			this.form.addEventListener('submit', this.Events.sendContact);
		},

		Events: {
			sendContact: function() {
				var self = App.Contact;

				
			}
		}

	}

})();