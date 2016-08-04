modules.require(['jquery__carouFredSel'], function($) {
    $(document).ready(function(){

        var $pagination = $('.slider-pagination'),
            $slider  = $('.landing-slider'),
            $arrowNext = $('.landing-slider__next'),
            $arrowPrev = $('.landing-slider__prev');

        $slider.show();
        $arrowNext.show();
        $arrowPrev.show();
        $slider.carouFredSel({
            prev: {
                button: '.landing-slider__prev',
                onBefore: function(data){
                    $('.screen-wrapper__image_selected').removeClass('screen-wrapper__image_selected');
                    $('#' + data.items.visible[0].attributes['data-name'].value).addClass('screen-wrapper__image_selected');
                }
            },
            next: {
                button: '.landing-slider__next',
                onBefore: function(data){
                    $('.screen-wrapper__image_selected').removeClass('screen-wrapper__image_selected');
                    $('#' + data.items.visible[0].attributes['data-name'].value).addClass('screen-wrapper__image_selected');
                }
            },
            swipe: {
                onTouch: true,
                onMouse: true
            },
            auto: {
                play: false
            },
            items: {
                height: 'variable'
            },
            scroll: {
                fx: "fade",
                duration: 800
            },
            pagination: {
                container: $pagination,
                keys: true,
                anchorBuilder: function(nr) {
                    return '<li></li>';
                }
            }
        });
    });
});