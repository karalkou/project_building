modules.define('landing-control', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {

                        function setCurrentBg(){
                            var windowTop = $(window).scrollTop();
                            var windowHeight = $(window).height();

                            $('.landing-control__item').each(function(){
                                var center = $(this).offset().top + $(this).outerHeight() / 2;

                                if(center >= windowTop && center <= windowTop + windowHeight) {

                                    if(!$(this).hasClass('current_visible'))
                                    {
                                        var next_slide = this;
                                        var next_bg =  $('.screen-wrapper__bg', next_slide);

                                        var previous_slide_on_screen = $('.current_visible');
                                        var current_bg = $('.screen-wrapper__bg', previous_slide_on_screen);

                                        if( previous_slide_on_screen != null ) {
                                            $(current_bg).fadeTo('slow', 0);
                                            $(previous_slide_on_screen).removeClass('current_visible');
                                        }
                                        $(next_slide).addClass('current_visible');
                                        $(next_bg).fadeTo('slow', .7);
                                        $('.screen-wrapper__bg_head-first-load').removeClass('screen-wrapper__bg_head-first-load');

                                    }
                                    return false;
                                }
                            });
                        }

                        setCurrentBg();

                        $(window).scroll( setCurrentBg );
                    }
                }
            }
        }))
});

