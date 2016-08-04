modules.define('partners-list', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
        //методы экземпляра блока
        onSetMod: {
            'js': {
                'inited': function() {

                    var viewPortHeight = document.documentElement.clientHeight,
                        $partnersArray = $('.partners-list__item');

                    for (var i = 0; i < $partnersArray.length; i++){
                        var bonusItemsArray = $($partnersArray[i]).find('.bonuses-list__item'),
                            partnerHeight = $($partnersArray[i]).outerHeight();

                        if( bonusItemsArray.length === 2  ){
                           if( (viewPortHeight - partnerHeight) > $(bonusItemsArray[1]).outerHeight()  ){
                               bonusItemsArray.css('display', 'block');
                           }
                        }
                    }

                }
            }
        }

    }))
});