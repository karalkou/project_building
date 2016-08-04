/**
 * Created on 26.04.2016.
 */
modules.define('category-list-more', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            /**
             * Initialization of this block
             * @param e - event of click
             * @private
             */
            _setInit: function(e){
                var that = this;
                that._categoryList = that.findBlockOutside('page').findBlockInside('category-list');
                that.curItemsIdArr = [];
                that.RUBRICS_ID = '';
                that.SESS_ID    = $('#sessid').val() || '';
                that.ACTION     = that.params.action  || 'unknownAction';

                // get current rubrics_id
                if($('.category-rubricator').length > 0 ){
                    var rubricatorDOM = $('.category-rubricator').get(0);
                    if( $(rubricatorDOM).find('.category-rubricator__header-text').length > 0 ){
                        var rubrHeadCollect = $(rubricatorDOM).find('.category-rubricator__header-text');
                        that.RUBRICS_ID = $(rubrHeadCollect[rubrHeadCollect.length - 1]).attr('id');
                    }
                }

                that._getCurrentItemsIdArr();
                that._getCategoryList(that.ACTION, that.RUBRICS_ID, that.SESS_ID);
            },

            /**
             * Get data-id content from .category-list__item and fill with this information array
             * @private
             */
            _getCurrentItemsIdArr: function(){
                var that = this;
                if(that._categoryList.domElem.length){

                    var $categoryList = that._categoryList.domElem,
                        $categoryListItems = $categoryList.children();

                    for(var i = 0; i < $categoryListItems.length; i++){
                        that.curItemsIdArr[i] =  $($categoryListItems[i]).attr('data-id');
                    }

                }
            },

            /**
             * Get list of categories
             * @private
             */
            _getCategoryList: function(action, rubricsId, sessId){
                var that = this;

                /*--- ajax request ---*/
                /*
                $.ajax({
                    type: 'POST',
                    url: '',
                    data: { action: action, rubricsId: rubricsId, sessId: sessId, curItemsIdArr: that.curItemsIdArr },
                    dataType: 'json',
                    success: function(ajaxResponse) {

                        var bemJSON_list = {
                            block: 'category-list',
                            mods : { wrapper: 'none' },
                            list : ajaxResponse.categoryList.list
                        };

                        that._bemJSON_list = bemJSON_list;
                        if( typeof ajaxResponse.categoryList != 'undefined'){
                            console.log('ajaxResponse.categoryList is defined');
                            that._applyListContent();

                        }

                        if( typeof ajaxResponse.nextPageNum == 'undefined'){
                            that._removeShowBtn();
                        }else{
                            that._replacePageNum(ajaxResponse.nextPageNum);
                        }
                    }
                });
                */
                /*--- /ajax request ---*/


                /*-------------------- immitation of ajax --------------------*/
                var ajaxResponse = {
                    categoryList: {
                        list: [
                            {
                                dataId: '7',
                                leftFieldType: 'logo',
                                url: '/img/catalog-category/ecwid.png',
                                'over-title': 'сервис для бизнеса',
                                title: ['Современный конструктор интернет магазинов'],
                                text: 'Любой человек, не обладающий навыками программирования, может ' +
                                'легко создать онлайн-магазин и разместить его на своем сайте',
                                activities: '',
                                'icon-type': 'percent',
                                'icon-text': 'Скидка <br> 20%'
                            },
                            {
                                dataId: '8',
                                leftFieldType: 'logo',
                                url: '/img/catalog-category/bitrix.png',
                                'over-title': 'сервис для бизнеса',
                                title: ['12 инструментов для организации работы'],
                                text: 'Полный комплект инструментов для управления продажами, ' +
                                'задачами, проектами — всеми рабочими процессами внутри компании.',
                                activities: '',
                                'icon-type': 'percent',
                                'icon-text': 'Скидка <br> 10%'
                            },
                            {
                                dataId: '9',
                                leftFieldType: 'logo',
                                url: '/img/catalog-category/kontur.png',
                                'over-title': 'сервис для бизнеса',
                                title: ['Современный конструктор интернет магазинов'],
                                text: 'Любой человек, не обладающий навыками программирования, может ' +
                                'легко создать онлайн-магазин и разместить его на своем сайте',
                                activities: '',
                                'icon-type': 'rub',
                                'icon-text': 'Выгода <br> 5000 Руб.'
                            },
                            {
                                dataId: '10',
                                leftFieldType: 'rating',
                                rate: '4',
                                'over-title': '',
                                title: ['Скидка 10% на программное обеспечение и решение'],
                                text: 'СП ИНТЕГР компания является официальным представителем на ' +
                                'территории Удмуртии и Пермского края ведущих компаний-разработчиков.',
                                activities: '',
                                'icon-type': 'partner',
                                'icon-text': 'Партнёр <br> клуба <br> клиентов'
                            },
                            {
                                dataId: '11',
                                leftFieldType: 'rating',
                                rate: '2',
                                'over-title': '',
                                title: ['Скидки 15% на другие услуги агентства: фирменный ст...'],
                                text: 'Digital-агентство IsWin. Профессиональные услуги по созданию, ' +
                                'продвижению и сопровождению сайтов, разработке фирменного стиля.',
                                activities: '',
                                'icon-type': 'partner',
                                'icon-text': 'Партнёр <br> клуба <br> клиентов'
                            },
                            {
                                dataId: '12',
                                leftFieldType: '',
                                rate: '',
                                'over-title': '',
                                title: ['Fleep Art — разработка сайтов'],
                                text: 'Digital агентство "Fleep Art" - создает сайты, разрабатывает ' +
                                'дизайн, оптимизирует и продвигает сайты в поисковых системах более ' +
                                '5 лет. ',
                                activities: [
                                    {
                                        activity: 'IT-консалтинг '
                                    },
                                    {
                                        activity: 'Продажа ПО '
                                    },
                                    {
                                        activity: 'Создание сайтов'
                                    }
                                ],
                                'icon-type': '',
                                'icon-text': ''
                            }
                        ]
                    },
                    nextPageNum: '5'
                };
                var bemJSON_list = {
                    block: 'category-list',
                    mods : { wrapper: 'none' },
                    list : ajaxResponse.categoryList.list
                };

                that._bemJSON_list = bemJSON_list;
                if( typeof ajaxResponse.categoryList != 'undefined'){
                    that._applyListContent();

                }

                if( typeof ajaxResponse.nextPageNum == 'undefined'){
                    that._removeShowBtn();
                }else{
                    that._replacePageNum(ajaxResponse.nextPageNum);
                }
                /*------------------- /immitation of ajax -------------------*/
            },

            /**
             * Apply category-list from server response (from ajax)
             * @private
             */
            _applyListContent: function(){
                var that = this;
                BEMDOM.append(that._categoryList.domElem, BEMHTML.apply(that._bemJSON_list));
                that.emit('change');
            },

            /**
             * Replace current number of page inside of category-list-more button
             * @param num - number of next page
             * @private
             */
            _replacePageNum: function(num){
                if(num != undefined ){
                    this.domElem.attr('data-page-num', num);
                }else{
                    this.domElem.remove();
                }
            },

            /**
             * Removes current block
             * @private
             */
            _removeShowBtn: function(){
                this.domElem.remove();
            }
        },
        {
            /* Static methods */
            live: function() {
                this.liveBindTo('btn', 'click', function(e) {
                    e.preventDefault();
                    e.target.blur();

                    this._setInit(e);
                });
            }
        }
    ));
});

