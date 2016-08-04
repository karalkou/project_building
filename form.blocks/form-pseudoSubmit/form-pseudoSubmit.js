/**
 * Created by on 18.04.2016.
 */
modules.define('form-pseudoSubmit', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){

    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
        },
        {
            /* Static methods */
        }));

});

modules.define('form-pseudoSubmit', function(provide, formPseudoSubmit) {
    provide(formPseudoSubmit.decl({modName: 'cabinet-company-edit', modValue: true},
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;
                        var form = that.findBlockOutside('form');

                        var popups = that.findBlockOutside('page').findBlocksInside('popup');

                        for(var i = 0; i < popups.length; i++){
                            if(popups[i].domElem.attr('id') == 'attention-pop'){

                                var currentPopup = popups[i].domElem.find('.moderator-response-btn');

                                currentPopup.click(function(e){
                                    form.domElem.submit();
                                });

                            }
                        }
                    }
                }
            }

        }));
});
