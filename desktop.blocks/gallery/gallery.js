/**
 * Created by andreiGladkov on 13.07.15.
 */
modules.require(['jquery__fancybox'], function($) {
	$('.gallery__link').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});