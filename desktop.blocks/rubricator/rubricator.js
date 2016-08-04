/**
 * Created on 07.04.2016.
 */
modules.define('rubricator', ['i-bem__dom', 'BEMHTML', 'jquery', 'chosen-type', 'remove', 'rubricator-pop'], function(provide, BEMDOM, BEMHTML, $, CHOSENTYPE, REMOVE, POP) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;

                        this.RUBRICS_ID = '';
                        this.SPEC_BTN_TYPE = '';
                        this.SESS_ID    = $('#sessid').val() || '';
                        this.LIMIT      = that.findBlockOutside('rubricator-outer-wrap').findBlockInside('chosen-type').params.limit     || 3;
                        this.ACTION     = that.params.action  || 'unknownAction';
                        this.INPUT_NAME = that.findBlockOutside('rubricator-outer-wrap').findBlockInside('chosen-type').params.inputName || 'defaultName';
                        this.RUBRICATOR_POP_CONTENT = that.findBlockOutside('rubricator-pop').findElem('content');
                        this.RUBRICATOR_POP = that.findBlockOutside('rubricator-pop');

                        this.chosenItemIdArr = [];

                        // bind to branch
                        that.bindTo(that.findElem('link', 'is-leaf', 'no'), 'click', function(e){
                            var item = e.target;
                            if( $(item).hasClass('rubricator__link_selected') !== true  ){
                                that.RUBRICS_ID = $(e.target).attr('id');
                                that.getRubrics();
                            }
                        });

                        // bind to leaf
                        that.bindTo(that.findElem('link', 'is-leaf', 'yes'), 'click', function(e){
                            var item = e.target;
                            var currentRubricator = $(e.target).closest('.rubricator');
                            var currentBtn = $(e.target).closest('.rubricator-outer-wrap').find('.rubricator-btn');
                            if( $(item).hasClass('rubricator__link_selected') !== true  ){
                                that.RUBRICS_ID = $(item).attr('id') || '';

                                // add chosen item
                                that._addChosenItem(item, currentRubricator, currentBtn);

                                $(item).addClass('rubricator__link_selected');

                                that.chosenItemIdArr = that._getChosenItemIdArr();
                                //console.log('hello');
                            }

                            REMOVE.on('removed', that._delSelectedClass, that); // подписка на событие удаления элемента

                        });

                        // bind to special button
                        that.bindTo(that.findElem('special-btn-pseudolink'), 'click', function(e){
                            var itemS = e.target;
                            var currentRubricatorS = $(e.target).closest('.rubricator');
                            var currentBtnS = $(e.target).closest('.rubricator-outer-wrap').find('.rubricator-btn');

                                that.SPEC_BTN_TYPE = $(itemS).attr('data-type') || '';

                                // whether all rubrics or current rubric
                                if(that.SPEC_BTN_TYPE === 'current'){
                                    var currentRubric = that.findElem('header-text');
                                    var lastIndex = $(currentRubric).length - 1;
                                    itemS = currentRubric[lastIndex];
                                    that.RUBRICS_ID = $(currentRubric[lastIndex]).attr('id');

                                    that._addChosenItem(itemS, currentRubricatorS, currentBtnS);
                                    that._addSelectedClass(that.RUBRICS_ID);
                                    REMOVE.on('removed', that._totalDelSelectedClasses, that);
                                }else if(that.SPEC_BTN_TYPE === 'all'){
                                    that.RUBRICS_ID = $(e.target).attr('data-type');

                                    that._addChosenItem(itemS, currentRubricatorS, currentBtnS);
                                    that._totalDelSelectedClasses();
                                    REMOVE.on('removed', that._delSelectedClass, that);
                                }else{
                                    console.log('oops! This special button has unrecognized data-type (it should be either "current" or "all")');
                                    //that._addChosenItem(itemS, currentRubricatorS, currentBtnS);
                                    //REMOVE.on('removed', that._delSelectedClass, that);
                                }

                                // add chosen item
                                that.chosenItemIdArr = that._getChosenItemIdArr();

                        });

                        // bind to header-text link
                        that.bindTo(that.findElem('header-text', 'is-link', 'yes'), 'click', function(e){
                            if($(e.target).hasClass('rubricator__header-text_start')){

                                var collection;
                                collection = that.RUBRICATOR_POP_CONTENT.find('.rubricator');

                                for(var i = 0; i < collection.length; i++){
                                    if($(collection[i]).hasClass('rubricator_first-load')) {
                                        if($(collection[i]).hasClass('rubricator_hidden')){
                                            $(collection[i]).removeClass('rubricator_hidden');
                                        }
                                    }else{
                                        $(collection[i]).remove();
                                    }
                                }
                            }else{
                                that.RUBRICS_ID = $(e.target).attr('id');
                                that.getRubrics();
                            }
                        });

                        REMOVE.on('removed', that._firstLoadEnableBtn, that);
                        REMOVE.on('removed', that._delSelectedClass, that);

                    }
                }
            },

            getRubrics: function(){
                var self = this;

                self.chosenItemIdArr = self._getChosenItemIdArr();

                /*--- ajax request ---*/
                /*
                $.ajax({
                    type: 'POST',
                    url: '',
                    data: { action: self.ACTION, rubricsId: self.RUBRICS_ID, sessId: self.SESS_ID, chosenItemIdArr: self.chosenItemIdArr },
                    dataType: 'json',
                    success: function(ajaxRequest) {

                        var bemAjaxAnswer = {
                            bemRubricsHeaderContent  : ajaxRequest.bemRubricsHeaderContent,
                            bemRubricsTable          : ajaxRequest.bemRubricsTable,
                            bemRubricsSpecBtn        : ajaxRequest.bemRubricsSpecBtn
                        };

                        var bemJSON = {
                            block        : 'rubricator',
                            js           : { action: self.ACTION },
                            headerContent: bemAjaxAnswer.bemRubricsHeaderContent,
                            error        : 'При загрузке рубрик возникла ошибка',
                            columns      : bemAjaxAnswer.bemRubricsTable,
                            specialBtn   : bemAjaxAnswer.bemRubricsSpecBtn
                        };

                        self._bemJSON = bemJSON;

                        var collection;

                        collection = self.RUBRICATOR_POP_CONTENT.find('.rubricator');
                        for(var i = 0; i < collection.length; i++){
                            if($(collection[i]).hasClass('rubricator_first-load')){
                                $(collection[i]).addClass('rubricator_hidden');
                            }else{
                                $(collection[i]).remove();
                            }
                        }
                        BEMDOM.append(self.RUBRICATOR_POP_CONTENT, BEMHTML.apply(self._bemJSON));
                    }
                });
                */
                /*--- /ajax request ---*/


                /*-------------------- immitation of ajax --------------------*/
                var ajaxRequest = {
                    bemRubricsHeaderContent: [
                        {
                            text: 'Рубрикатор видов деятельности',
                            textMods: { 'is-link': 'yes', start: true },
                            arrowMods: { visible: true }
                        },
                        {
                            text: 'Автомобили',
                            id: '0123',
                            textMods: { 'is-link': 'no' },
                            arrowMods: {}
                        }
                    ],
                    bemRubricsTable: [
                        {
                            content: {
                                elem: 'list',
                                list: [
                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '0123' }, content: 'Автомобили' },
                                        { elem: 'count', content: '42' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '124' }, content: 'Безопасность' },
                                        { elem: 'count', content: '23' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '125' }, content: 'Бизнес' },
                                        { elem: 'count', content: '95' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '126' }, content: 'Государство' },
                                        { elem: 'count', content: '55' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '127' }, content: 'Компьютеры' },
                                        { elem: 'count', content: '45' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '128' }, content: 'Интернет' },
                                        { elem: 'count', content: '20' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '129' }, content: 'Красота' },
                                        { elem: 'count', content: '12' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '130' }, content: 'Культура и искусство' },
                                        { elem: 'count', content: '21' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '131' }, content: 'Медицина' },
                                        { elem: 'count', content: '71' } ] }
                                ]
                            }
                        },
                        {
                            content: {
                                elem: 'list',
                                list: [
                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '132' }, content: 'Наука и образование' },
                                        { elem: 'count', content: '5' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '133' }, content: 'Общество' },
                                        { elem: 'count', content: '11' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '134' }, content: 'Отдых и туризм' },
                                        { elem: 'count', content: '32' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '135' }, content: 'Производство' },
                                        { elem: 'count', content: '32' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '136' }, content: 'Поставки' },
                                        { elem: 'count', content: '63' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '137' }, content: 'Реклама и полиграфия' },
                                        { elem: 'count', content: '77' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '138' }, content: 'Семья и дети' },
                                        { elem: 'count', content: '32' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '139' }, content: 'Домашние животные' },
                                        { elem: 'count', content: '12' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '140' }, content: 'Спорт' },
                                        { elem: 'count', content: '33' } ] }
                                ]
                            }
                        },
                        {
                            content: {
                                elem: 'list',
                                list: [
                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '141' }, content: 'Справочные системы' },
                                        { elem: 'count', content: '50' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '142' }, content: 'Строительство' },
                                        { elem: 'count', content: '45' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '143' }, content: 'Телекоммуникации и связь' },
                                        { elem: 'count', content: '13' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '144' }, content: 'Товары для дома и дачи' },
                                        { elem: 'count', content: '15' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '145' }, content: 'Транспорт и перевозки' },
                                        { elem: 'count', content: '28' } ] },

                                    { content: [
                                        { elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '146' }, content: 'Услуги' },
                                        { elem: 'count', content: '87' } ] }
                                ]
                            }
                        }
                    ],
                    bemRubricsSpecBtn: {
                        content: 'Текущая категория',
                        type: 'current'
                    }
                };

                var bemAjaxAnswer = {
                    bemRubricsHeaderContent  : ajaxRequest.bemRubricsHeaderContent,
                    bemRubricsTable          : ajaxRequest.bemRubricsTable,
                    bemRubricsSpecBtn        : ajaxRequest.bemRubricsSpecBtn
                };

                var bemJSON = {
                    block        : 'rubricator',
                    js           : { action: self.ACTION },
                    headerContent: bemAjaxAnswer.bemRubricsHeaderContent,
                    error        : 'При загрузке рубрик возникла ошибка',
                    columns      : bemAjaxAnswer.bemRubricsTable,
                    specialBtn   : bemAjaxAnswer.bemRubricsSpecBtn
                };

                self._bemJSON = bemJSON;

                var collection;

                collection = self.RUBRICATOR_POP_CONTENT.find('.rubricator');
                for(var i = 0; i < collection.length; i++){
                    if($(collection[i]).hasClass('rubricator_first-load')){
                        $(collection[i]).addClass('rubricator_hidden');
                    }else{
                        $(collection[i]).remove();
                    }
                }
                BEMDOM.append(self.RUBRICATOR_POP_CONTENT, BEMHTML.apply(self._bemJSON));
                /*------------------- /immitation of ajax -------------------*/

            },
            /**
             * Returns array of chosen items id's
             * @returns {Array}
             * @private
             */
            _getChosenItemIdArr: function(){
                var that = this;
                var chosenContainer = that.findBlockOutside('form-item-v2').findBlockInside('chosen-wrap').domElem,
                    chosenContainKids = chosenContainer.children(),
                    chosenItemIdArr = [];

                for(var i = 0; i < chosenContainKids.length; i++){
                    chosenItemIdArr[i] = $(chosenContainKids[i]).find("input[type='hidden']").attr('data-id');
                }

                return chosenItemIdArr;
            },
            /**
             * Make .rubricator_link selected, when .chosen-item was add
             * @param itemId - data from BEM-event (id of removed .chosen-item)
             * @private
             */
            _addSelectedClass: function(itemId){
                var that = this;
                var selectedItem = that.domElem.closest('.rubricator-pop').find('#' + itemId);
                selectedItem.addClass('rubricator__link_selected');
            },
            /**
             * Make .rubricator_link active, when .chosen-item was removed
             * @param noParameter - empty parameter
             * @param data - data from BEM-event (id of removed .chosen-item)
             * @private
             */
            _delSelectedClass: function(noParameter, data){
                var that = this;
                var linksCollection = $(that.findElem('link', 'selected', true));
                for(var i = 0; i < linksCollection.length; i++){
                    if($(linksCollection[i]).attr('id') == data.itemId){
                        $(linksCollection[i]).removeClass('rubricator__link_selected');
                    }
                }
            },
            /**
             * Make all .rubricator_link items selected, when .chosen-item was add
             * @private
             */
            _addAllSelectedClasses: function(){
                var that = this;
                //console.log('_addAllSelectedClasses');
                var linksCollection = $(that.findElem('link'));
                for(var i = 0; i < linksCollection.length; i++){
                    $(linksCollection[i]).addClass('rubricator__link_selected');
                }
            },
            /**
             * Make .rubricator_link active, when .chosen-item was removed
             * @private
             */
            _totalDelSelectedClasses: function(){
                var that = this;
                var linksCollection = that.domElem.closest('.rubricator-pop').find('.rubricator__link');
                for(var i = 0; i < linksCollection.length; i++){
                    $(linksCollection[i]).removeClass('rubricator__link_selected');
                }
            },
            /**
             *
             * @private
             */
            _delAllSelectedClasses: function(){
                var that = this;
                var linksCollection = $(that.findElem('link', 'selected', true));

                for(var i = 0; i < linksCollection.length; i++){
                    for(var j = 0; j < that.chosenItemIdArr.length; j++){
                        if($(linksCollection[i]).attr('id') == that.chosenItemIdArr[j]){
                            $(linksCollection[i]).removeClass('rubricator__link_selected');
                        }
                    }
                }
            },

            _addChosenItem: function(item, currentRubricator, currentBtn){
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

                if(that.SPEC_BTN_TYPE === 'current'){

                    REMOVE.on('removed', checkIsBtnAndFieldDisabled, that);

                    if( limitQuantity < that.LIMIT ){

                        var arr = $chosenWrap.find("input[type='hidden']");
                        for (var j = 0; j < arr.length; j++){ // проверка на нахождение в блоке отобранных категорий элементов данной категории и удаление их
                            var chosenId = $(arr[j]).val();
                            var headerText = that.findElem('header-text'),
                                lastIndex = $(headerText).length - 1,
                                exist = $(headerText[lastIndex]).closest('.rubricator__content').find('#'+chosenId);
                            if(exist.length > 0){
                                $(arr[j]).closest('.remove').remove();
                                limitQuantity--;
                            }
                        }

                        BEMDOM.append($chosenWrap, BEMHTML.apply(bemJSON));

                        if(limitQuantity >= that.LIMIT-1 ){
                            POP.close(popup);
                            btn.addClass('btn_disabled');
                            chosenInput.setMod(chosenInput.findElem('field'), 'disabled');
                            chosenInput.findElem('field').prop('disabled', true);
                        }
                    }
                    that._addAllSelectedClasses();
                    that.SPEC_BTN_TYPE = ''; // in order to clear this const

                }else if(that.SPEC_BTN_TYPE === 'all'){

                    REMOVE.on('removed', checkIsBtnAndFieldDisabled, that);
                    BEMDOM.update($chosenWrap, BEMHTML.apply(bemJSON));

                    that._delAllSelectedClasses();

                    POP.close(popup);

                    btn.addClass('btn_disabled');
                    chosenInput.setMod(chosenInput.findElem('field'), 'disabled');
                    chosenInput.findElem('field').prop('disabled', true);
                    that.SPEC_BTN_TYPE = ''; // in order to clear this const
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

                    if(bemEventData.itemIdType == 'all'){
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
             * @param $chosenWrap - context of exemplar of block
             * @private
             */
            _enableBtn: function ($chosenWrap) {
                var btn = $chosenWrap.closest('.form-item-v2').find('.btn'),
                    chosenInput = $chosenWrap.closest('.form-item-v2').find('.chosen-type');

                btn.removeClass('btn_disabled');
                chosenInput.find('.chosen-type__field').removeClass('chosen-type__field_disabled');
                chosenInput.find('.chosen-type__field').prop('disabled', false);
            },
            /**
             *
             * @param noParameter
             * @param bemEventData
             * @private
             */
            _firstLoadEnableBtn: function(noParameter, bemEventData){
                var btn = bemEventData.itemParent.closest('.form-item-v2').find('.btn'),
                    chosenInput = bemEventData.itemParent.closest('.form-item-v2').find('.chosen-type');

                btn.removeClass('btn_disabled');
                chosenInput.find('.chosen-type__field').removeClass('chosen-type__field_disabled');
                chosenInput.find('.chosen-type__field').prop('disabled', false);
            }

        },
        {
            /* Static methods */
        }
    ));
});

