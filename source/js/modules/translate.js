var App = App || {};

;(function() {

	App.Translate = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.languages = document.querySelector('#languages');
			this.language = document.querySelectorAll('.language');
		},

		bindEvents: function() {
			var self = this;

			this.language.forEach(function(lang) {
				lang.addEventListener('click', self.Events.translatePage);
			});
		},

		Events: {
			translatePage: function() {
				var selectLanguage = this.getAttribute('data-language');
				var selectElement = document.querySelectorAll('[data-'+selectLanguage+']');

				selectElement.forEach(function(attr) {
					var attribute = attr.getAttribute('data-'+selectLanguage);

					attr.innerHTML = attribute;
					attr.setAttribute('data-css', attribute);
				});
			}
		}

	}

})();