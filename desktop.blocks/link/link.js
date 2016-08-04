modules.define('link', ['i-bem__dom', 'column-popup'], function(provide, BEMDOM, columnPopup) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */

		},
		{
			/* статические методы */
		}));
});

modules.define('link', ['column-popup'], function(provide, columnPopup, link) {
	// Доопределяем базовый блок с модификтором _show-column-popup
	provide(link.decl({modName: 'show-column-popup', modValue: true}, {
		/*Методы экземпляра*/
		onSetMod: {
			'js': {
				'inited': function() {
					var self = this;
					this._align = this.params.showPopup.align;

					this.bindTo('mouseover', function(e) {
						this._mouseOver(e);

						document.body.addEventListener('touchstart', function(e) {
							var target = e.target,
								reg = new RegExp('column-popup', 'i');
							if (!reg.test(target.className)) {
								columnPopup.closeByModsAlign(self._align);
							}
						})
					});

				}
			}
		},

		_mouseOver: function(e) {
			columnPopup.openByModsAlign(this._align);
		}

	}));
});

modules.define('link', ['whole-popup'], function(provide, wholePopup, link) {
	// Доопределяем базовый блок с модификтором _whole-popup
	provide(link.decl({modName: 'whole-popup', modValue: true}, {
		/*Методы экземпляра*/
		onSetMod: {
			'js': {
				'inited': function() {
					this._mods = this.params['whole-popup'].mods;

					this.bindTo('click', function(e) {
						this._onClick(e);
					});

				}
			}
		},

		_onClick: function(e) {
			wholePopup.open(this._mods);
			e.preventDefault();
			return false;
		}

	}));
});


modules.define('link', function(provide, link) {
	// Доопределяем базовый блок с модификтором _disabled
	provide(link.decl({modName: 'disabled', modValue: true}, {
		/*Методы экземпляра*/
		onSetMod: {
			'js': {
				'inited': function() {

					this.bindTo('click', function(e) {
						e.preventDefault();
						return false;
					});
				}
			}
		}
	}));
});
