modules.define('start-yb-item-wrapper', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $ ){
    provide(BEMDOM.decl(this.name,{
        //методы экземпляра блока
        onSetMod:{
            'js': {
                'inited': function(){
                    /* через бэм не работает */
                    /*this.bindTo('contact-tel', 'click', function(){
                        this.getMods('contact-tel', 'visible', true);
                        console.log('hello, world');
                    })*/
                    /* через jQuery */
                    $('.start-yb-item__contact-tel').on('click', function(){
                        $(this).addClass('start-yb-item__contact-tel_visible');
                    });

                    /* mef, you can insert ajax here */
                }
            }
        }
    }))
});

