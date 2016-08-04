modules.define('hint', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod:{
                'js': {
                    'inited': function(){
                        var that = this;

                        that.parentNode = that.domElem.get(0).parentNode;

                        that.domElem.css({
                                'transition-property': 'opacity',
                                'transition-duration': that.params.duration + 'ms',
                                'transition-timing-function': 'ease-in-out'
                        });
                        $(that.parentNode).css({position: 'relative'});

                        // 'click'
                        that.parentNode.addEventListener('click', function(e){
                            if(!$(that.parentNode).hasClass('js-hint-acceptor-touched')){
                                $(that.parentNode).addClass('js-hint-acceptor-touched');
                                $(that.parentNode).find('.hint').css({ display: 'block' });
                                setTimeout( function(){
                                    $(that.parentNode).find('.hint').css({ opacity: '1'})
                                }, 0 );
                            }else{
                                $(that.parentNode).removeClass('js-hint-acceptor-touched');
                                $(that.parentNode).find('.hint').css({ opacity: ''});
                                setTimeout( function(){
                                    $(that.parentNode).find('.hint').css({ display: '' });
                                }, that.params.duration );
                            }

                        });
                    }
                }
            }

        },
        {
            /* статические методы */
        }));
});