modules.define('start-yb', ['i-bem__dom', 'jquery', 'popup'], function(provide, BEMDOM, $, popup) {
    provide(BEMDOM.decl(this.name, {
        /* Instance methods */
        onSetMod: {
            'js': {
                'inited': function() {

                    var feedbackPop = this.elem('feedbackPop');

                    if( feedbackPop ) {
                        var pop = this.findBlockOn('popup');

                        this._fillfeedBackPop(feedbackPop, pop);

                        if (this.hasMod(feedbackPop, 'show', true)) {
                            this._openfeedBackPop(pop);
                            this._closefeedBackPop(pop);
                        }
                    }
                }
            }
        },
        /**
         * fill feedback pop-up
         * @private
         */
        _fillfeedBackPop: function(feedbackPop ,pop) {

            var $titleBlock = $(this.findBlockInside('feedbackPop-title').domElem);
            var $textBlock  = $(this.findBlockInside('feedbackPop-text').domElem);

            if (this.hasMod(feedbackPop, 'err', true)) {
                var $content = $titleBlock.closest('.feedback-content');

                $content.html("<h3 class='content__section-title content__section-title_type_popup content__section-title_centered'>" + this.params.errMsg + "</h3>");

            }else{

                var $Name  = $titleBlock.find('.feedbackPop-title__companyName');
                var $Addr  = $textBlock.find('.feedbackPop-text__address').find('.feedbackPop-text__insertable');
                var $Phone = $textBlock.find('.feedbackPop-text__phone').find('.feedbackPop-text__insertable');
                var $Email = $textBlock.find('.feedbackPop-text__email').find('.feedbackPop-text__insertable');

                $Name.html('<strong>' + this.params.companyName + '</strong>');
                $Addr.html('<b>' + this.params.address + '</b>');
                $Phone.html('<b>' + this.params.phone + '</b>');
                $Email.html('<b>' + this.params.email + '</b>');

            }

        },
        /**
         * open feedback
         * @private
         */
        _openfeedBackPop: function(pop) {
            popup.open(pop);
        },
        /**
         * close feedback on button's click
         * @private
         */
        _closefeedBackPop: function(pop) {
            var btn = pop.findBlockInside('feedbackPop-close');
            if(btn){
                var $closeBtn = $(btn.domElem).find('.btn');

                $closeBtn.on('click', function () {
                    popup.close(pop);
                });
            }

        }
    }))
});
