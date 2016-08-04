/**
 * Created by on 02.02.2016.
 */
modules.define('content', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */

            onSetMod: {
                'js': {
                    'inited': function() {

                        this._innerVideo();

                    }
                }
            },

            _innerVideo: function(){
                if(this.elem('inner-video').length){
                    /**
                     * script to fix iframe z-index
                     */
                    $('.content__inner-video iframe').each(function(){
                        var url = $(this).attr("src");
                        $(this).attr("src",url+"?wmode=transparent");
                    });
                }
            }

        },
        {
            /* статические методы */
        }));
});