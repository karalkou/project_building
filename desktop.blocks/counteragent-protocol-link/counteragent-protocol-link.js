/**
 * Created on 27.06.2016.
 */
modules.define('counteragent-protocol-link', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;
                        this._paddingTop = 0;
                        this._marginBottom = 0;
                        this.domElem.on('click', function(e){
                            e.preventDefault();
                            var tabToClick = $('a[href="#tab-2"]')[0],
                                tabsToScroll = $(tabToClick).closest('.tabs');
                            that._paddingTop = parseInt(that.getStyle(tabsToScroll[0], "padding-top"), 10);
                            that._marginBottom = parseInt(that.getStyle(tabsToScroll[0], "margin-bottom"), 10);
                            $(tabToClick).click();

                            that.scrollToTab(tabToClick);

                        });
                    }
                }
            },

            /**
             * Scroll window to tab content
             * @param eventTarget
             */
            scrollToTab: function(eventTarget) {
                var href = eventTarget.href,
                    idTab = href.slice(href.indexOf('#') + 1),
                    windowScroll = window.pageYOffset || document.documentElement.scrollTop,
                    top = document.getElementById(idTab).getBoundingClientRect().top,
                    HEIGHT_HEADER = this.findBlockOutside('page')
                            .findBlockInside('top-navigation').domElem[0].offsetHeight + this._paddingTop + this._marginBottom;

                if (top <= HEIGHT_HEADER) {
                    this._animate({
                        duration: 300,
                        delta: this._delta,
                        delay: 15,
                        scrollTop: function(progress) {
                            var val = windowScroll + (top * progress) - HEIGHT_HEADER;
                            window.scrollTo(0, val);
                        }
                    });
                }
            },

            /**
             * Get computed style
             * @param oElm
             * @param strCssRule
             * @returns {string}
             */
            getStyle: function(oElm, strCssRule) {
                var strValue = "";
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
                }
                else if (oElm.currentStyle) {
                    strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
                        return p1.toUpperCase();
                    });
                    strValue = oElm.currentStyle[strCssRule];
                }
                return strValue;
            },

            _delta: function(progress) {
                return progress;
            },

            _animate: function(opts) {

                var start = new Date();

                var timer = setInterval(function() {

                    var progress = (new Date() - start) / opts.duration;

                    if (progress > 1) {
                        progress = 1;
                    }

                    // отрисовать анимацию
                    opts.scrollTop(opts.delta(progress));

                    if (progress === 1) {
                        clearInterval(timer);
                    }

                }, opts.delay || 10);


            }
        },
        {
            /* статические методы */
        }));
});