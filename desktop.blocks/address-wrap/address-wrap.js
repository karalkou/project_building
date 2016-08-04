/**
 * Created on 14.03.2016.
 */
modules.define('address-wrap', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $){
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;
                        this.counter = $($('[data-count]')[$('[data-count]').length - 1]).attr('data-count') -0 + 1 || 1;
                        this.appendElem = this.findBlockOutside('page').findBlockInside('address-wrap-add').domElem;

                        this.bindTo('btnAdd', 'click', function(e) {
                            that._onAddAddressClick(e);
                        });

                        if(this.elem('btnDel').length){
                            this.bindTo('btnDel', 'click', function(e) {
                                that._onDelAddressClick(e);
                            });
                        }

                    }
                }
            },

            /**
             * Click handler on add button
             * @param e - event of click
             * @private
             */
            _onAddAddressClick: function(e){
                console.log('_onAddAddressClick');
                var that = this;
                var $addressBlock = $('.address-wrap_main').clone(true);

                $addressBlock.removeClass('address-wrap_main').addClass('address-srap_additional');
                $addressBlock.find('.content__title')
                    .removeClass('content__title_countable')
                    .removeClass('content__title_size_xs')
                    .addClass('content__title_size_xxs')
                    .text('Дополнительный адрес');

                $($addressBlock[0].children[1]).find('input').val('').attr( { 'data-count': that.counter } );
                $($addressBlock[0].children[2]).find('input').val('').attr( { 'data-count': that.counter } );
                $($addressBlock[0].children[3]).find('input').val('').attr( { 'data-count': that.counter } );
                $($addressBlock[0].children[4]).find('input').val('').attr( { 'data-count': that.counter } );
                $($addressBlock[0].children[5]).find('.address-wrap__btnDel').removeClass('address-wrap__btnDel_hidden');

                that.appendElem.append($addressBlock);
                that._counterIncrease();
            },

            /**
             * Click handler on delete button
             * @param e - event of click
             * @private
             */
            _onDelAddressClick: function(e){
                var that = this;
                var $block =  $(e.target).closest('.address-wrap');
                var top = $block.offset().top - 450;
                window.scrollTo(0, top);
                $block.remove();
                that._counterReduce();
             },

            /**
             * Increase value of counter
             * @private
             */
            _counterIncrease: function(){
                var that = this;
                that.counter++;
            },

            /**
             * Reduce value of counter
             * @private
             */
            _counterReduce: function(){
                var that = this;
                that.counter--;
            }
        },
        {
            /* Statics methods */
        }));
});