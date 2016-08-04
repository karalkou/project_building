/**
 * Created on 20.06.2016.
 */
modules.define('counteragent-dropdown', ['i-bem__dom', 'jquery__mCustomScrollbar'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod:{
                'js': {
                    'inited': function(){
                        var that = this;
                        this.bindTo(this.findElem('info'), 'click', function(e){
                            var target = e.currentTarget;
                            var $fa = $(target).find('.fa');

                            if($fa.hasClass('fa-angle-down')){
                                $fa.removeClass('fa-angle-down');
                                $fa.addClass('fa-angle-up');
                            }else{
                                $fa.addClass('fa-angle-down');
                                $fa.removeClass('fa-angle-up');
                            }

                            that.findElem('inner').slideToggle();
                            that.findElem('inner').mCustomScrollbar();
                        });
                    }
                }
            }
        },
        {
            /* статические методы */

        }));
});