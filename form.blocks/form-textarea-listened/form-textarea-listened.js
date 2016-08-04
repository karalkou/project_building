/**
 * Created on 19.02.2016.
 */
modules.define('form-textarea-listened', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function () {
                        var self = this,
                            textarea = this.findBlockInside('form-textarea').domElem[0],
                            counterView = this.findBlockInside('span').domElem[0],
                            leftSymbols ;

                        leftSymbols = 1000 - $(textarea).val().length;
                        $(counterView).text(leftSymbols);
                        if( leftSymbols < 0 ){
                            $(counterView).addClass('colorization_red-alpha');
                        } else{
                            $(counterView).removeClass('colorization_red-alpha');
                        }

                        $(textarea).keyup(function(){
                            leftSymbols = 1000 - $(this).val().length;
                            $(counterView).text(leftSymbols);
                            if( leftSymbols < 0 ){
                                $(counterView).addClass('colorization_red-alpha');
                                self.emit('lock');
                            } else{
                                $(counterView).removeClass('colorization_red-alpha');
                                self.emit('unlock');
                            }
                        });

                    }
                }
            }
        },
        {
            /* Static methods */
        }
    ));
});