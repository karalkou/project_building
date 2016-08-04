modules.define('caroufredsel', ['i-bem__dom', 'jquery__carouFredSel'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {
		//методы экземпляра блока
		onSetMod: {
			'js': {
				'inited': function() {

					var $pagination = this.findBlockInside('slider-pagination').domElem,
						$slider = this.elem('slider'), img, $img;

					$img = $slider.find('img'),
					img = [];

					for (var i = 0; i < $img.length; i++) {
						img[i] = new Image();
						img[i].src = $img[i].src;
					}

					img[0].onload = function() {
						$slider.show();
						$slider.carouFredSel({
							prev: {
								button: '.prevB',
								onAfter: function(){
									console.log( 'wow-wow, baby' );
								}
							},
							next: {
								button: '.nextB',
								onAfter: function(){
									console.log('палехче, братан');
								}
							},
							auto: {
								play: false
							},
							items: {
								height: 'variable',
							},
							scroll: {
								fx: "fade",
								duration: 500,
							},
							pagination: {
								container: $pagination,
								keys: true,
								anchorBuilder: function(nr) {
									return '<li></li>';
								}
							}
						});

						$pagination.css('width', $($pagination).find('li').length * 19 - 11 + 'px');

					}

					if (this._getInternetExplorerVersion() == 8) {
						this._ie8Init();
					}
				}
			}
		},
		_ie8Init: function() {
			var $pagination = this.findBlockInside('slider-pagination').domElem;

			this.elem('slider').show();
			this.elem('slider').carouFredSel({
				auto: {
					play: false
				},
				items: {
					height: 'variable',
				},
				scroll: {
					fx: "fade",
					duration: 500,
				},
				pagination: {
					container: $pagination,
					keys: true,
					anchorBuilder: function(nr) {
						return '<li></li>';
					}
				}
			});

			$pagination.css('width', $($pagination).find('li').length * 19 - 11 + 'px');
			$($($pagination).find('li')[$($pagination).find('li').length - 1]).css('margin-right', '0px');//ie8 last-child hack
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

