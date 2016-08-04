modules.define('main-pop', ['i-bem__dom', 'jquery', 'popup'], function(provide, BEMDOM, $, popup) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'come-on-baby': function(){

                    mainPop = this.findBlockOn('popup');

                    setTimeout(function(){
                        popup.open(mainPop)
                    }, 500);

                    /**
                     * Closing Event popup by clicking on button.
                     */
                    $('.main-pop-inner__submit .btn').on('click', function () {
                        popup.close(mainPop);
                        /*
                        $.ajax({
                            type: 'POST',
                            url: '/test/accept_ajax.php',
                            data: {action: 'acceptToU'},
                            success: function (ajaxRequest) {
                                console.info('ajaxRequest', ajaxRequest);
                                if(0)//ajaxRequest.length > 0)
                                {
                                    $('.main-pop').html(ajaxRequest);
                                }
                                else
                                {
                                    popup.close(mainPop);
                                }
                            }
                        });*/
                    });
                }
            }
        }))
});

