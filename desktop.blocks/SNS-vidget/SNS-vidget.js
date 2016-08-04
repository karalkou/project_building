modules.define('SNS-vidget', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {
                        //if( this.elem('vk-fix').length){
                        //    var cssLink = document.createElement("link");
                        //    cssLink.href = "style.css";
                        //    cssLink.rel = "stylesheet";
                        //    cssLink.type = "text/css";
                        //    frames['vkwidget1'].document.body.appendChild(cssLink);
                        //}
                    }
                }
            }
        },
        {
            /* статические методы */
        }));
});