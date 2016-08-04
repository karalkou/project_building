/**
 * Created on 08.04.2016.
 */
modules.define('rubricator-btn', ['i-bem__dom', 'jquery', 'rubricator-pop'], function(provide, BEMDOM, $, POP) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var popup = this.findBlockOutside('form-item-v2').findBlockInside('rubricator-pop');
                        var otherPopups = this.findBlockOutside('page').findBlocksInside('rubricator-pop');

                        this.bindTo('click', function(e){
                            var target = e.target;
                            for (var i = 0; i < otherPopups.length; i++){
                                POP.close(otherPopups[i]);
                            }

                            if($(target).hasClass('btn_disabled') == false ){
                                POP.open(popup);
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

