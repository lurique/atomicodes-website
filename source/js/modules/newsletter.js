var App = App || {};

;(function() {

	App.Newsletter = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.form = document.getElementById('newsletterForm');
			this.input = this.form.querySelector('input');
			this.button = this.form.querySelector('button');

			// Toast messages
			this.success = document.getElementById('newsletter-success');
			this.alert = document.getElementById('newsletter-alert');
		},

		bindEvents: function() {
			this.form.addEventListener('submit', this.Events.sendSubscription);
		},

		Events: {
			sendSubscription: function(e) {
				var self = App.Newsletter;

				var value = self.input.value;

				if ( value.length <= 10 ) {
					self.alert.classList.add('active');

					setTimeout(function() {
						self.alert.classList.remove('active');
					}, 5000);
				} else {
					self.button.classList.add('active');

					setTimeout(function() {
						self.button.classList.remove('active');
						self.success.classList.add('active');
						self.input.value = '';

						setTimeout(function() {
							self.success.classList.remove('active');
						}, 5000);
					}, 3000);
				}

				e.preventDefault();

				console.log(value);
			}
		}

	}

})();