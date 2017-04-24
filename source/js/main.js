var App = App || {};

;(function() {

	Main = {

		init: function() {
			this.bindScripts();
			this.bindLanguage();
		},

		bindScripts: function() {
			for ( var script in App ) {
				App[script].init();
			}
		},

		bindLanguage: function() {
			var userLang = navigator.language || navigator.userLanguage;

			if ( userLang == 'pt-BR' ) {
				var elements = document.querySelectorAll('[data-portuguese]');

				elements.forEach(function(attr) {
					var attribute = attr.getAttribute('data-portuguese');

					attr.innerHTML = attribute;
					attr.setAttribute('data-css', attribute);
				});
			}
		}

	}

	document.addEventListener('DOMContentLoaded', function() {
		Main.init();
	});

})();
