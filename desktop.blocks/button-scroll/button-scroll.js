modules.define('button-scroll', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {
		//методы экземпляра блока
		onSetMod: {
			'js': {
				'inited': function() {
					if (this._getInternetExplorerVersion() != -1 && this._getInternetExplorerVersion() <= 9) {
						this.findBlockInside('img').delMod('hidden');
						this.findBlockInside('ico').setMod('hidden', true);
					}

					this.bindTo('click', function(e) {
						this._onClick(e);
					});
				}
			}
		},

		_onClick: function(e) {
			var top = $('.' + this.params.block).offset().top - 86;

			this._animate({
				duration: 500,
				delta: this._delta,
				delay: 15,
				scrollTop: function(progress) {
					window.scrollTo(0, top * progress);
				}
			});

		},

		_delta: function(progress) {
			return progress;
		},

		_animate: function(opts) {

			var start = new Date();

			var timer = setInterval(function() {

				var progress = (new Date() - start) / opts.duration;

				if (progress > 1) {
					progress = 1;
				}

				// отрисовать анимацию
				opts.scrollTop(opts.delta(progress));

				if (progress === 1) {
					clearInterval(timer);
				}

			}, opts.delay || 10);


		},
		/**
		 * Возвращает № IE если не ie то вернет -1
		 * @returns {number}
		 * @private
		 */
		_getInternetExplorerVersion: function() {
			var rv = -1;
			if (navigator.appName == 'Microsoft Internet Explorer') {
				var ua = navigator.userAgent;
				var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
				if (re.exec(ua) != null)
					rv = parseFloat(RegExp.$1);
			}
			return rv;
		}

	}))
});
