
modules.define('pseudo-sticky-acceptor', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
            // методы экземпляра блока
            onSetMod: {
                'js': {
                    'inited': function() {
                        var self = this;
                        var coordStickyDonorFromBottom;

                        function getDonorCoords(){
                            var stickyDonor = self.findBlockOutside('page').findBlockInside('pseudo-sticky-donor').domElem[0],
                                coordStickyDonor = stickyDonor.getBoundingClientRect().top + $(window).scrollTop();

                            coordStickyDonorFromBottom = $(document).height() - coordStickyDonor;
                        }

                        function showAndHide() {
                            var offset = $(document).height() - ($(window).scrollTop() + $(window).height());

                            if ( (offset - coordStickyDonorFromBottom) > 0 ) {
                                self.setMod('visible');
                            }else{
                                self.delMod('visible');
                            }

                        }

                        getDonorCoords();
                        showAndHide();

                        $(window).scroll(function(){
                            showAndHide();
                        });

                        $(window).resize(function(){
                            getDonorCoords();
                            showAndHide();
                        });

                    }
                }
            }

        },
        {
            // static methods
        }))
});

