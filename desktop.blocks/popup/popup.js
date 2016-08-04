modules.define('popup', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* Instance methods */
			onSetMod: {
				'js': {
					'inited': function() {
						this.__self.init();

						this.bindTo(this.elem('close'), 'click', function(e) {
							this._onClose(e);
						})
					}
				}
			},
			/**
			 * Event close button
			 * @param e
			 * @private
			 */
			_onClose: function(e) {
				this.__self.close(this);
			}
		},
		/* Static methods */
		{
			/**
			 * Open popup
			 * @param self - popup for opening
			 */
			open: function(self) {
				self.setMod('visible')
					.delMod('closing');
				this._background.addClass('popup__background_visible');
			},
			/**
			 * Close popup
			 * @param self - popup for closing
			 */
			close: function(self) {
				self.delMod('visible')
					.setMod('closing');
				this._background.removeClass('popup__background_visible');
				this._background.addClass('popup__background_closing');
				var that = this;
				setTimeout(function(){
					that._background.removeClass('popup__background_closing');
				}, 500)
			},
			/**
			 * Init background.
			 * It is common for all the popup.
			 */
			init: function() {
				if (!this.load) {
					this.load = true;
					BEMDOM.append(document.body, '<div class="popup__background"></div>');
					this._background = $('.popup__background');
				}
			}
		}));
});
