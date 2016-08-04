modules.define('whole-popup', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {
					}
				}
			}
		},
		{
			/* статические методы */
			open: function(mods) {
				this.popups[mods]
					.setMod('visible')
					.delMod('closing');
				$('.input').focus();
				$('body').addClass('page_whole-popup');
			},

			close: function(mods) {
				this.popups[mods]
					.delMod('visible')
					.setMod('closing');
				setTimeout(function() {
					$('body').removeClass('page_whole-popup');
				}, 500);
			}
		}));
});

modules.define('whole-popup', ['jquery'], function(provide, $, wholePopup) {
	// Доопределяем базовый блок с модификтором _cities-choice
	provide(wholePopup.decl({modName: 'cities-choice', modValue: true}, {
		/*Методы экземпляра*/
		onSetMod: {
			'js': {
				'inited': function() {
					this.__self.popups = {};
					this.__self.popups['cities-choice'] = this;

					this.bindTo(this.elem('close'), 'click', function() {
						this.__self.close('cities-choice');
					});

					var input = this.findBlockInside('input');

					input.bindTo('keyup', function(e) {
						var val = this.domElem[0].value,
							searchReg = new RegExp(val, "i"), searchResult,
							$items = $('.cities-choice__city', '.whole-popup_cities-choice'),
							$headItem = $(".cities-choice__char", '.whole-popup_cities-choice');

						searchResult = $items.filter(function() {
							return searchReg.test($(this).text());
						});

						$headItem.removeClass("cities-choice__char_visible").addClass("cities-choice__char_hidden");
						$items.removeClass("cities-choice__city_visible").addClass("cities-choice__city_hidden");

						searchResult = $items.filter(function() {
							return searchReg.test($(this).text());
						});

						searchResult.addClass("cities-choice__city_visible").removeClass("cities-choice__city_hidden");

						var headItemToShow = $headItem.map(function(val, item) {
							var $headItem = null;
							return $(item).nextUntil(".cities-choice__char").hasClass("cities-choice__city_visible") && ($headItem = item), $headItem
						});

						headItemToShow.addClass("cities-choice__char_visible").removeClass("cities-choice__char_hidden");
					});
				}
			}
		}
	}));
});
