modules.define('form-choice', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                js: {
                    'inited': function(){
                        var self = this;
                        var textField = this.findBlockOutside('form').findBlockInside('quiz-customTextarea'),
                            customFieldSwitch = this.elem('inner', 'custom', true),
                            customRadioInput = customFieldSwitch.find('input');

                        /* selecting options */
                        this.bindTo( this.elem('inner'), 'click', function(e){
                        var clickedParent = e.currentTarget,
                            clickedInput = $(clickedParent).find('input');

                        if ( e.target.tagName === "LABEL" ){

                            if( self.hasMod('checkbox') ){
                                if ( clickedParent === customFieldSwitch.get(0) ){
                                    $(textField.domElem[0]).val('');
                                    textField.toggleMod('show', true)
                                }
                            }else if(self.hasMod('radio')){

                                if ( clickedParent === customFieldSwitch.get(0) ){

                                    if( ($(clickedInput).prop('checked')+'') === 'false' && !textField.hasMod('show', true) ){
                                        textField.setMod('show', true);
                                    }

                                }else{
                                    if( (customRadioInput.prop('checked')+'') === 'true' ){
                                        textField.delMod('show');
                                    }
                                }

                            }
                        }
                    } );
                        /* /selecting options */
                    }
                }
            }
        },
        {
            /* статические методы */
        }));
});