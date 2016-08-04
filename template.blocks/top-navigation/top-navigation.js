modules.require(['jquery'], function($) {
	function pageScroll(){
		var top =  window.pageYOffset || document.documentElement.scrollTop;
		if(top > 50){
			$('.top-navigation').addClass('top-navigation_type_scrolled');
		}else{
			$('.top-navigation').removeClass('top-navigation_type_scrolled');
		}
	};

	$(window).scroll(function(){
		pageScroll();
	});

	pageScroll();
});