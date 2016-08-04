modules.define('scroll-to-elem', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {
			//методы экземпляра блока
			onSetMod: {
				'js': {
					'inited': function() {
						this.bindTo('click', function(e) {

							if (this.params.hide) {
								this._onClickByClass(e);
							} else {
								this.__self.onClick(this);
							}

						})
					}
				}
			},

			_onClickByClass: function() {
				var $elem = $('.' + this.params.scroll),
					i, elemLength = $elem.length, top,
					HEIGHT_HEADER = this.params.heightHeader || 86,
					heightStickyBlock = this.findBlockOutside('page')
						.findBlockInside(this.params.stickyElem).domElem[0].offsetHeight;

				for (i = 0; i < elemLength; i++) {
					if (this.__self._findHiddenElem($elem[i])) {
						top = $($elem[i]).offset().top - heightStickyBlock - HEIGHT_HEADER;
					}
				}

				this.__self._animate({
					duration: 500,
					delta: this.__self._delta,
					delay: 15,
					scrollTop: function(progress) {
						window.scrollTo(0, top * progress);
					}
				});

			}


		},
		{
			onClick: function(self) {
				var HEIGHT_HEADER = 86,
					top = $('#' + self.params.scroll).offset().top - HEIGHT_HEADER;

				this._animate({
					duration: 500,
					delta: this._delta,
					delay: 15,
					scrollTop: function (progress) {
						window.scrollTo(0, top * progress);
					}
				});
			},


			/**
			 * Finds hidden if the parent element
			 * @param elem
			 * @returns {*}
			 * @private
			 */
			_findHiddenElem: function(elem) {
				var computedStyle;

				if (elem.currentStyle) {
					//IE8
					computedStyle = elem.currentStyle;

					while (computedStyle.display === 'block') {

						elem = elem.parentNode;
						computedStyle = elem.currentStyle;

						if (elem === document.body) {
							break;
						} else if (computedStyle.display === 'none') {
							return false;
						}

					}

					return true;

				} else if (window.getComputedStyle) {
					computedStyle = window.getComputedStyle(elem, null);

					while (computedStyle.getPropertyValue('display') === 'block') {

						elem = elem.parentNode;
						computedStyle = window.getComputedStyle(elem, null);

						if (elem === document.body) {
							break;
						} else if (computedStyle.getPropertyValue('display') === 'none') {
							return false;
						}
					}

					return true;
				}
			},
			/**
			 * Delta for animation
			 * @param progress
			 * @returns {*}
			 * @private
			 */
			_delta: function(progress) {
				return progress;
			},
			/**
			 * Animation scroll
			 * window
			 * @param opts
			 * @private
			 */
			_animate: function(opts) {

				var start = new Date(), timer;

				timer = setInterval(function() {

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

			}
		}))
});
