modules.define('landing-navigation', ['i-bem__dom', 'jquery', 'jquery__mpageScroll2id'], function(provide, BEMDOM, $, mpageScroll2id) {
    provide(BEMDOM.decl(this.name, {
        //методы экземпляра блока
        onSetMod: {
            'js': {
                'inited': function() {
                    var self = this;
                    if (this.hasMod('sticky', true)) {

                        this._boolMod = true;
                        this._coordsTab = this._getCoords().top;
                        this.heightHeader = this.findBlockOutside('page').findBlockInside('top-navigation').domElem[0].offsetHeight;
                        this._paddingTop = parseInt(this.getStyle(this.domElem[0], "padding-top"), 10);
                        this._pageScroll();
                        $(window).scroll(function () {
                            self._pageScroll();
                        });
                    }
                    this.startPlugin();
                }
            }
        },
        /**
         * Getting the coordinates
         * @returns {{top: number}}
         * @private
         */
        _getCoords: function() {
            var box = this.domElem[0].getBoundingClientRect(),
                body = document.body,
                top,
                docEl = document.documentElement,
                scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
                clientTop = docEl.clientTop || body.clientTop || 0;

            top = box.top + scrollTop - clientTop;

            return {
                top: top
            };

        },
        /**
         * Event window scroll
         * @private
         */
        _pageScroll: function() {
            var top = window.pageYOffset || document.documentElement.scrollTop,
                HEIGHT_HEADER = this.findBlockOutside('page').findBlockInside('top-navigation').domElem[0].offsetHeight;

            top += HEIGHT_HEADER;

            if (this._boolMod && top >= this._coordsTab) {
                this._boolMod = false;
                this.setMod('scrolled');
            } else if (top <= this._coordsTab) {
                this.delMod('scrolled');
                this._boolMod = true;
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
        /**
         * start plug-in mPageScroll2id
         */
        startPlugin: function(){
            $('.landing-navigation__item .link').mPageScroll2id({
                offset: 127,
                scrollSpeed: 700,
                highlightClass: "link_selected"
            });

        }
    }))
});