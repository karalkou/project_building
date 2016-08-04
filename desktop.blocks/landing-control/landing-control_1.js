modules.define('landing-control', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {

                        console.log('hello from landing-control');
                        /* ----------------------------------------------------------------- */
                        function setCurrentBg(){
                            var windowTop = $(window).scrollTop();
                            var windowHeight = $(window).height();

                            $('.landing-control__item').each(function(){
                                var center = $(this).offset().top + $(this).height() / 2;

                                if(center >= windowTop && center <= windowTop + windowHeight) {

                                    if(!$(this).hasClass('current_visible'))
                                    {
                                        $('.current_visible').removeClass('current_visible');
                                        $(this).addClass('current_visible');
                                        return false;
                                    }

                                }
                            });
                        }

                        setCurrentBg();

                        $(window).scroll(function() {
                            setCurrentBg();
                        });
                        /* ----------------------------------------------------------------- */
                    }
                }
            }
        }))
});