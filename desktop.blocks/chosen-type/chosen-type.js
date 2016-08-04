/**
 * Created on 05.04.2016.
 */
modules.define('chosen-type', ['i-bem__dom', 'BEMHTML', 'jquery', 'remove', 'rubricator-pop'], function(provide, BEMDOM, BEMHTML, $, REMOVE, POP){
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;

                        this.RUBRICS_ID = '';
                        this.SESS_ID    = $('#sessid').val() || '';
                        this.LIMIT      = parseInt(that.params.limit) || 3;
                        this.ACTION     = that.params.action          || 'defaultAction';
                        this.INPUT_NAME = that.params.inputName       || 'defaultName';
                        this.$field     = this.elem('field');
                        this.timer      = 0;

                        that.cleanInput();

                        this.$field.keyup(function (e){
                            that.onKeyUp(e);
                        });

                        this.$field.focusout( function(){
                            that.onFocusOut();
                        });
                        this.$field.focusin( function(){
                            that.onFocusIn();
                        });

                    }
                }
            },

            cleanInput: function(){
                var that = this;
                that.$field.val('');
            },

            onKeyUp: function(e){
                var that = this;

                if (that.$field.val().length > 3) {
                    that.timer = setTimeout(function () {

                        var fieldVal = that.$field.val() || '';
                        var chosenContainer = that.findBlockOutside('form-item-v2').findBlockInside('chosen-wrap').domElem,
                            chosenContainKids = chosenContainer.children(),
                            chosenItemIdArr = [];

                        //get chosen-item's id to disable them on next step
                        for(var i = 0; i < chosenContainKids.length; i++){
                            chosenItemIdArr[i] = $(chosenContainKids[i]).find("input[type='hidden']").attr('data-id');
                        }

                        /*--- ajax request ---*/
                        /*
                        $.ajax({
                            type: 'POST',
                            url: '',
                            data: { action: that.ACTION, value: fieldVal, sessid: that.SESS_ID, chosenItemIdArr: chosenItemIdArr },
                            dataType: 'json',
                            success: function(ajaxRequest) {

                                var elemsArr = ajaxRequest.map(function(element, index, arr){
                                    return {
                                        elem: 'item',
                                        content: {
                                            block  : 'link',
                                            js     : false,
                                            mods   : { pseudo: true, color: 'black-red' },
                                            mix    : { block: 'chosen-type', elem: 'item-link' },
                                            attrs  : { id: element.id },
                                            content: element.item
                                        }
                                    };
                                });

                                var bemJSON = {
                                    block: 'chosen-type',
                                    elem: 'items-wrap',
                                    content: elemsArr
                                };
                                that._bemJSON = bemJSON;

                                // clean space to insert new-created dom-elements
                                if(that.elem('items-wrap').length){
                                    BEMDOM.destruct(that.elem('items-wrap'));
                                    that.dropElemCache('items-wrap');
                                    that.dropElemCache('item');
                                }
                                BEMDOM.append(that.domElem, BEMHTML.apply(that._bemJSON));
                                that.dropElemCache('items-wrap');
                                that.dropElemCache('item');
                                that.setItemsWrapVisible();

                                // events on click of item
                                that.elem('item').click(function(e){
                                    var target = e.target;
                                    var currentRubricator = $(e.target).closest('.rubricator');
                                    var currentBtn = $(e.target).closest('.rubricator-outer-wrap').find('.rubricator-btn');

                                    if ( $(target).hasClass('chosen-type__item-link') ){
                                        that.RUBRICS_ID = $(target).attr('id');

                                        setTimeout(function(){that.cleanInput();}, 600);
                                        that.addChosenItem(target, currentRubricator, currentBtn);

                                    }else{
                                        target = $(target).find('.chosen-type__item-link').get(0);
                                        that.RUBRICS_ID = $(target).attr('id');

                                        setTimeout(function(){that.cleanInput();}, 600);
                                        that.addChosenItem(target, currentRubricator, currentBtn);

                                    }

                                });
                            }
                        });
                        */
                        /*--- /ajax request ---*/

                        /*-------------------- immitation of ajax --------------------*/
                        var ajaxRequest = [];

                        if(fieldVal.length > 3 && fieldVal.length < 6){
                            ajaxRequest = [
                                { id: '25', item: 'Automobiles' },
                                { id: '26', item: 'Motorcycles' },
                                { id: '27', item: 'Bikes'       },
                                { id: '28', item: 'Helicopters' }
                            ];

                        }else if(fieldVal.length >= 6 && fieldVal.length < 10){
                            ajaxRequest = [
                                { id: '29', item: 'Automobiles' },
                                { id: '30', item: 'Motorcycles' },
                                { id: '31', item: 'Tractors'    },
                                { id: '32', item: 'Planes'      },
                                { id: '33', item: 'Combines'    }
                            ];

                        }else if(fieldVal.length >= 10){
                            ajaxRequest = [
                                { id: '34', item: 'Bolids'      },
                                { id: '35', item: 'Motorcycles' },
                                { id: '36', item: 'Tractors'    },
                                { id: '37', item: 'Planes'      },
                                { id: '38', item: 'Combines'    },
                                { id: '39', item: 'Helloworld'  }
                            ];
                        }

                        var elemsArr = ajaxRequest.map(function(element, index, arr){
                            return {
                                elem: 'item',
                                content: {
                                    block  : 'link',
                                    js     : false,
                                    mods   : { color: 'black-red' },
                                    mix    : { block: 'chosen-type', elem: 'item-link' },
                                    attrs  : { id: element.id },
                                    content: element.item
                                }
                            };
                        });

                        var bemJSON = {
                            block: 'chosen-type',
                            elem: 'items-wrap',
                            content: elemsArr
                        };
                        that._bemJSON = bemJSON;

                        // clean space to insert new-created dom-elements
                        if(that.elem('items-wrap').length){
                            BEMDOM.destruct(that.elem('items-wrap'));
                            that.dropElemCache('items-wrap');
                            that.dropElemCache('item');
                        }
                        BEMDOM.append(that.domElem, BEMHTML.apply(that._bemJSON));
                        that.dropElemCache('items-wrap');
                        that.dropElemCache('item');
                        that.setItemsWrapVisible();

                        /*------------------- /immitation of ajax -------------------*/

                        // events on click of item
                        that.elem('item').click(function(e){
                            var target = e.target;
                            var currentRubricator = $(e.target).closest('.rubricator');
                            var currentBtn = $(e.target).closest('.rubricator-outer-wrap').find('.rubricator-btn');
                            
                            if ( $(target).hasClass('chosen-type__item-link') ){
                                that.RUBRICS_ID = $(target).attr('id');

                                setTimeout(function(){that.cleanInput();}, 600);
                                that.addChosenItem(target, currentRubricator, currentBtn);

                            }else{
                                target = $(target).find('.chosen-type__item-link').get(0);
                                that.RUBRICS_ID = $(target).attr('id');

                                setTimeout(function(){that.cleanInput();}, 600);
                                that.addChosenItem(target, currentRubricator, currentBtn);

                            }
                           
                        });
                    }, 300);
                }else{
                    if(that.elem('items-wrap').length){
                        BEMDOM.destruct(that.elem('items-wrap'));
                        that.dropElemCache('items-wrap');
                    }
                    //that.setItemsWrapInvisible();
                }
            },

            onAjaxSuccess: function(ajaxRequest){
                var that = this;
            },

            setItemsWrapVisible: function(){
                var that = this;
                that.setMod( that.elem('items-wrap'), 'visible');
            },

            setItemsWrapInvisible: function(){
                var that = this;
                that.delMod( that.elem('items-wrap'), 'visible');
            },

            onFocusIn: function(e){
                var that = this;
                if( that.$field.val().length > 3 && that.elem('items-wrap').length){
                    that.setItemsWrapVisible();
                }
            },

            onFocusOut: function(e){
                var that = this;
                that.focusOutTimer = setTimeout(function(){that.setItemsWrapInvisible()}, 600);
            },

            addChosenItem: function(item, currentRubricator, currentBtn){
                var that = this;
                var $chosenWrap = that.findBlockOutside('form-item-v2').findBlockInside('chosen-wrap').domElem,
                    limitQuantity = $chosenWrap.children().length;

                var bemJSON = {
                    block: 'remove',
                    js: true,
                    mix: { block: 'chosen-item' },
                    content: [
                        {
                            elem: 'insides',
                            mix: { block: 'chosen-item', elem: 'name' },
                            content: [
                                {
                                    tag: '',
                                    content: item.innerText
                                },
                                {
                                    elem: 'del',
                                    mix: { block: 'chosen-item',  elem: 'cross' }
                                }
                            ]
                        },
                        {
                            tag: 'input',
                            block: 'chosen-item',
                            elem: 'hidden-input',
                            attrs: {
                                type     : 'hidden',
                                name     : that.INPUT_NAME + '[]',
                                value    : that.RUBRICS_ID,
                                'data-id': that.RUBRICS_ID
                            }
                        }
                    ]
                };

                var btn = currentBtn,
                    chosenInput = that.findBlockOutside('form-item-v2').findBlockInside('chosen-type'),
                    popup = that.findBlockOutside('form-item-v2').findBlockInside('rubricator-pop');

                if(that.RUBRICS_ID == 'all'){
                    console.log('wow');

                    REMOVE.on('removed', checkIsBtnAndFieldDisabled, that); // подписка на событие удаления элемента
                    BEMDOM.update($chosenWrap, BEMHTML.apply(bemJSON));

                    that._delAllSelectedClasses();

                    POP.close(popup);
                    console.log('popup closed from "all"');

                    btn.addClass('btn_disabled');
                    chosenInput.setMod(chosenInput.findElem('field'), 'disabled');
                    chosenInput.findElem('field').prop('disabled', true);

                }else{

                    // RU: проверка на наличие элементов с таким же id среди выбранных ( логика не нужна, т.к. уже выбранный
                    // элемент не возвращается в выдачу с сервера)
                    // EN: check whether we have the same id among chosen items ( this logic is unnecessary cause selected item
                    // does not return from server)
                    var flag = true;
                    var elemId = [];
                    for(var i = 0; i < limitQuantity; i++ ){
                        elemId[i] = $( $chosenWrap.children()[i]).find("input[type='hidden']").attr('data-id');
                    }
                    for(var j = 0; j < elemId.length; j++){
                        if(elemId[j] == that.RUBRICS_ID){
                            flag = false;
                        }
                    }

                    REMOVE.on('removed', checkIsBtnAndFieldDisabled, that);

                    if( limitQuantity < that.LIMIT && flag ){
                        BEMDOM.append($chosenWrap, BEMHTML.apply(bemJSON));

                        if(limitQuantity >= that.LIMIT-1 ){
                            POP.close(popup);
                            console.log('popup closed from "elems"');
                            btn.addClass('btn_disabled');
                            chosenInput.setMod(chosenInput.findElem('field'), 'disabled');
                            chosenInput.findElem('field').prop('disabled', true);
                        }
                    }

                }

                /**
                 * Make .rubricator_link active, when .chosen-item was removed
                 * @param subscribedData - data from subscription on BEM-event
                 * @param bemEventData - data from BEM-event (id of removed .chosen-item)
                 * @private
                 */
                function checkIsBtnAndFieldDisabled(subscribedData, bemEventData){
                    var that = this;
                    var $chosenWrap = bemEventData.itemParent,
                        limitQuantity = $chosenWrap.children().length;

                    if(bemEventData.itemId == 'all'){
                        var btn = $chosenWrap.closest('.form-item-v2').find('.btn'),
                            chosenInput = $chosenWrap.closest('.form-item-v2').find('.chosen-type');
                        btn.removeClass('btn_disabled');
                        chosenInput.find('.chosen-type__field').removeClass('chosen-type__field_disabled');
                        chosenInput.find('.chosen-type__field').prop('disabled', false);
                    }else{
                        if( limitQuantity < that.LIMIT ){
                            that._enableBtn($chosenWrap);
                        }
                    }
                }

            },

            /**
             * Enables .chosen-type__field and .rubricator__btn
             * @param that - context of exemplar of block
             */
            _enableBtn: function (that) {
                var btn = that.closest('.form-item-v2').find('.btn'),
                    chosenInput = that.closest('.form-item-v2').find('.chosen-type');

                btn.removeClass('btn_disabled');
                chosenInput.find('.chosen-type__field').removeClass('chosen-type__field_disabled');
                chosenInput.find('.chosen-type__field').prop('disabled', false);
            }
        },
        {
            /* Static methods */
        }));
});