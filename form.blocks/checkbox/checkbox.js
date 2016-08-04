/**
 * Created on 23.03.2016.
 */
modules.define('checkbox', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var self = this;

                        this.bindTo('click', function(e){

                            self.realCheckbox = $(e.currentTarget).find('.checkbox__real');
                            self.pseudoCheckbox = $(e.currentTarget).find('.checkbox__unreal');

                            this.toggleCheckbox(self.realCheckbox, self.pseudoCheckbox);
                        });

                        // check whether checkbox is checked

                        var realElem = this.findElem('real');
                        var unrealElem = this.findElem('unreal');

                        if( $(realElem).prop('checked') ){
                            $(unrealElem).addClass('checkbox__unreal_checked');
                        }else{
                            $(unrealElem).removeClass('checkbox__unreal_checked');
                        }

                        if( $(unrealElem).hasClass('checkbox__unreal_checked') ){
                            $(realElem).prop('checked', true);
                        }else{
                            $(realElem).prop('checked', false);
                        }

                    }
                }
            },

            /**
             * Set/remove 'checked' property (attribute) for checkbox
             * @param realCheckbox - bem .checkbox__real
             * @param pseudoCheckbox - bem .checkbox__unreal
             */
            toggleCheckbox: function(realCheckbox, pseudoCheckbox){
                if( realCheckbox.prop('checked') ){
                    realCheckbox.prop('checked', false);
                    pseudoCheckbox.removeClass('checkbox__unreal_checked');
                }else{
                    realCheckbox.prop('checked', true);
                    pseudoCheckbox.addClass('checkbox__unreal_checked');
                }
            }
        },
        {
            /* статические методы */
        }));
});