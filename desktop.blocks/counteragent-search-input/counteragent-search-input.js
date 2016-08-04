/**
 * Created on 14.06.2016.
 */
modules.define('counteragent-search-input', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $){
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;
                        $(this.domElem).keypress(keypressInBox);

                        function keypressInBox(e) {
                            var code = (e.keyCode ? e.keyCode : e.which);
                            if (code == 13) { //Enter keycode
                                e.preventDefault();

                                $(that.domElem).closest(".form").submit();
                            }
                        };
                    }

                }
            }
        },
        {
            /* Statics methods */
        }));
});