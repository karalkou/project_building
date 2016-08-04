modules.define('image-fixed', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {

						function scroll(){
							var offsetTop;
							if($(".content").length){
								offsetTop = $(".content").offset().top;
							}else if($(".content-v2").length){
								offsetTop = $(".content-v2").offset().top;
							}

							var imageFixed = $('.image-fixed');

							var scrollTop = $(window).scrollTop();
							var diff = (offsetTop - scrollTop) / offsetTop;
							if (diff >= 0 && diff <= 1) {
								$(imageFixed).css('opacity', diff);
							}
							if((offsetTop - scrollTop) < 0){
								$(imageFixed).css('opacity', "0");
							}
						};

						scroll();

						$(window).scroll(function() {
							scroll();
						})


					}
				}
			}
		},
		{
			/* статические методы */
		}));
});