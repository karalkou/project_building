modules.define('moderator-btn', ['i-bem__dom', 'jquery', 'popup'], function(provide, BEMDOM, $, popup){

    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */

            onSetMod: {
                'js': {
                    'inited': function () {
                        var i,
                            lengthPopup,
                            that = this;
                        var form = that.findBlockOutside('form');

                        this._popups = this.findBlockOutside('page').findBlocksInside('popup');
                        lengthPopup = this._popups.length;

                        for (i = 0; i < lengthPopup; i++) {
                            if (this._popups[i].params.popup === this.params.popup) {
                                this._currentPopup = this._popups[i];
                                break;
                            }
                        }

                        this.bindTo('click', function (e) {
                            e.preventDefault();
                            popup.open(this._currentPopup);
                            $('.popup__background').on('click', function() {
                                popup.close(that._currentPopup);
                                $('.popup__background').off('click');
                            });
                        });

                        for(var j = 0; j < this._popups.length; j++){
                            if(this._popups[j].domElem.attr('id') == 'attention-pop'){

                                var currentPopup = this._popups[j];
                                var currentPopupBtn = this._popups[j].domElem.find('.moderator-response-btn');

                                currentPopupBtn.click(function(e){
                                    //console.log('click');
                                    form.domElem.submit();

                                    popup.close(currentPopup);
                                    $('.popup__background').off('click');
                                });

                            }
                        }
                    }
                }
            }
        },
        {
            /* Static methods */
        }));

});
