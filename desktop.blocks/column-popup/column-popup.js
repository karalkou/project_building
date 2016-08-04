modules.define('column-popup', ['i-bem__dom'], function(provide, BEMDOM) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {

						this.__self.popups = {};

						if (this.hasMod('align', 'right')) {
							this.__self.popups.align = {};
							this.__self.popups.align.right = this;
						}

						this.bindTo('mouseleave', function(e) {
							this._mouseleave(e);
						});
					}
				}
			},

			_mouseleave: function(e) {
				this.__self.closeByModsAlign(this.getMod('align'));
			}

		},
		{
			/* статические методы */
			openByModsAlign: function(align) {
				this.popups.align[align]
					.setMod('visible')
					.delMod('closing');
			},
			closeByModsAlign: function(align) {
				this.popups.align[align]
					.setMod('closing')
					.delMod('visible');
			}
		}));
});
