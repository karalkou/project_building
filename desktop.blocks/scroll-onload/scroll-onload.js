modules.define('scroll-onload', ['i-bem__dom', 'jquery', 'scroll-to-elem'], function(provide, BEMDOM, $, scrollToElem) {
	provide(BEMDOM.decl(this.name,
		{
			/* Instance methods */
			onSetMod: {
				'js': {
					'inited': function() {
						var urlObject = this.parseUrlQuery();

						if( urlObject.scroll === 'true') {
							scrollToElem.onClick(this);
						}
					}
				}
			},
			/**
			 * parsing of url string
			 * @returns {{}}
			 */
			parseUrlQuery: function () {
				var data = {};
				if(location.search) {
					var pair = (location.search.substr(1)).split('&');
					for(var i = 0; i < pair.length; i ++) {
						var param = pair[i].split('=');
						data[param[0]] = param[1];
					}
				}
				return data;
			}
		}))
});
