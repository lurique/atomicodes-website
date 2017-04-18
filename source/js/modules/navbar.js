var App = App || {};

;(function() {

	App.Navbar = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.navbar = document.getElementById('nav');
		},

		bindEvents: function() {
			window.onscroll = this.Events.changeClass;
		},

		Events: {
			changeClass: function() {
				var self = App.Navbar;

				var scrollY = window.pageYOffset | document.body.scrollTop;

				self.navbar.classList.remove('active');

				if ( scrollY > 100 ) {
					self.navbar.classList.add('active');
				}
			}
		}

	}

})();