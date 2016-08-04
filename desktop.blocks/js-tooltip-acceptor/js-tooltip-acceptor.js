/**
 * Created on 27.06.2016.
 */
modules.define('js-tooltip-acceptor', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;
                        var offsetTop = that.params.top || 0;
                        var offsetLeft = that.params.left || 0;
                        this.domElem.hover(
                            function(e){
                                var target = e.currentTarget;
                                var coords = that._getCoords(target);
                                $(that.params.tip).css(
                                    {
                                        display: 'block',
                                        top: coords.top + offsetTop,
                                        left: coords.left + offsetLeft
                                    }
                                );
                            },
                            function(e){
                                var target = e.currentTarget;
                                $(that.params.tip).css(
                                    {
                                        display: 'none',
                                        top: '',
                                        left: ''
                                    }
                                );
                            }
                        );
                    }
                }
            },

            _getCoords: function(elem){
                var box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            }
        },
        {
            /* статические методы */
        }))
});

