/**
 * Created by on 27.04.2016.
 */
modules.define('url-block', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
        },
        {
            /* Static methods */

            /**
             * Join pathname and appendix
             * @param newStartPath - current pathname in url
             * @param appendix - new part, that we want to attach to pathname
             */
            consolidate: function(newStartPath, appendix){
                if(String(appendix).length === 0 ){
                    return newStartPath + '/';
                }
                return newStartPath + '/' + appendix + '/';
            }

        }));
});
