modules.define('btn-close', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {

						if (this._getInternetExplorerVersion() > 9 || this._getInternetExplorerVersion() == -1) {
							this.domElem[0].style.background = 'rgba(0,0,0,0)';
						}

						if (this._getInternetExplorerVersion() <= 9 && this._getInternetExplorerVersion() != -1) {
							this.setMod('hidden');
						}
					}
				}
			},

			_getInternetExplorerVersion: function() {
				var rv = -1; // Return value assumes failure.
				if (navigator.appName == 'Microsoft Internet Explorer') {
					var ua = navigator.userAgent;
					var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
					if (re.exec(ua) != null)
						rv = parseFloat(RegExp.$1);
				}
				return rv;
			}
		},
		{
			/* статические методы */
		}));
});