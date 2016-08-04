/**
 *
 */
modules.define('category-rubricator', ['i-bem__dom', 'BEMHTML', 'jquery', 'url-block', 'category-list-more'], function(provide, BEMDOM, BEMHTML, $, urlblock, categoryListMore) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;

                        that.preloaderBEM = that.findBlockOutside('page').findBlockInside('preloader-overlay');

                        that.RUBRICS_ID = '';
                        that.SESS_ID    = $('#sessid').val() || '';
                        that.ACTION     = that.params.action  || 'unknownAction';
                        that.SEF_FOLDER = that.params.seffolder  || 'seffolder-not-set';

                        // write information to the sessionStorage during first load
                        sessionStorage.setItem('CategoryRubrics_' + window.location.pathname, that.domElem.html());
                        if(that.findBlockOutside('content-v2__inner').domElem.has('.category-list').length) {
                            sessionStorage.setItem('CategoryList_' + window.location.pathname, that.findBlockOutside('content-v2__inner').findBlockInside('category-list').domElem.html());
                        }


                        //------ TEMPORARY!! Only until creating second BEM-page for alphabank's category catalog  ----
                        //------ Временно!! Только до тех пор, пока не будет создана вторая страница для каталога категорий  ----
                        //------ при этом, возможно, необходимо будет убрать модификатор enabled в подписке на клик в блоке tabs
                        $('.tabs__btn_selected').click(function(e){
                            e.preventDefault();
                        });
                        //----- the end of temporary


                        // bind to branch
                        that._bindToBranch();

                        // bind to header-text link
                        that._bindToHeaderText();

                        // actions on popstate
                        that._onpopstate();


                        // manipulations with existing html-markup when first-loaded
                        if( $('.category-list-wrap').hasClass('category-list-wrap_first-load') ){
                            var firstLoadItemsArr = $('.category-list__item');
                            var partnerArr = [];

                            for(var i=0; i < firstLoadItemsArr.length; i++){

                                if($(firstLoadItemsArr[i]).has('.ico_type_partner').length != 0){
                                    partnerArr = $(firstLoadItemsArr[i]).find('.category-list__title');
                                    $(partnerArr).css('display', 'none');

                                    var randTitleIndex = Math.floor(Math.random() * partnerArr.length);
                                    var randTitle = partnerArr[randTitleIndex];
                                    $(randTitle).css('display', 'inline-block');
                                }
                            }
                        }

                    }
                }
            },

            /**
             * Binding to branch
             * @private
             */
            _bindToBranch: function(){
                var that = this;
                this.bindTo(this.findElem('link', 'is-leaf', 'no'), 'click', function(e){
                    e.preventDefault();

                    var targetAttr = $(e.target).attr('id');
                    if( typeof targetAttr === 'string' ){
                        that.RUBRICS_ID = targetAttr;
                        that._getContent(that.ACTION, that.RUBRICS_ID, that.SESS_ID);
                    }

                });
            },

            /**
             * Binding to header-text
             * @private
             */
            _bindToHeaderText: function(){
                var that = this;
                this.bindTo(this.findElem('header-text'), 'click', function(e){
                    if($(e.target).hasClass('category-rubricator__header-text_disabled')){
                        e.preventDefault();
                    }else{
                        e.preventDefault();
                        that.RUBRICS_ID = $(e.target).attr('id');
                        that._getContent(that.ACTION, that.RUBRICS_ID, that.SESS_ID);
                    }
                });
            },

            /**
             *
             */
            _getContent: function(action, rubricsId, sessId){
                var that = this;

                /*--- ajax request ---*/
                /*
                $.ajax({
                    type: 'POST',
                    url: '',
                    data: {
                        action: action,
                        rubricsId: rubricsId,
                        sessId: sessId
                    },
                    dataType: 'json',
                    beforeSend: function(){
                        setTimeout(
                            function(){
                                that.preloaderBEM.domElem.css('display', 'block');
                            },
                            1000);
                    },
                    success: function(ajaxResponse) {

                        that.preloaderBEM.domElem.css('display', 'none');

                        var bemJSON_rubrics = {
                            block      : 'category-rubricator',
                            mods       : { wrapper: 'none' },
                            gridWidth  : 'col-md-8',
                            gridOffset : 'col-md-offset-2',
                            outlineMods: ajaxResponse.categoryRubricator.outlineMods,
                            header     : ajaxResponse.categoryRubricator.header,
                            columns    : ajaxResponse.categoryRubricator.columns
                        };
                        var bemJSON_list_1 = {
                            block: 'row',
                            mix: { block: 'category-list-wrap' },
                            content: {
                                block: 'col-md-12',
                                content: {
                                    block: 'category-list',
                                    list : ajaxResponse.categoryList.list
                                }
                            }
                        };
                        var bemJSON_list_2 = {
                            block: 'category-list',
                            mods : { wrapper: 'none' },
                            list : ajaxResponse.categoryList.list
                        };

                        that._bemJSON_rubrics = bemJSON_rubrics;
                        that._applyRubricatorContent();

                        that._bemJSON_list_1 = bemJSON_list_1;
                        that._bemJSON_list_2 = bemJSON_list_2;
                        if( typeof ajaxResponse.categoryList != 'undefined'){
                            that._applyListContent();
                        }

                        // whether ajaxResponse.categoryList exists
                        if( typeof ajaxResponse.categoryList != 'undefined' && typeof ajaxResponse.nextPageNum != 'undefined'){
                            that._bemJSON_showBtn = {
                                block: 'category-list-more',
                                mods: { visible: true },
                                js: true,
                                attrs: { 'data-page-num': ajaxResponse.nextPageNum },
                                content: {
                                    elem: 'btn',
                                    mix: { block: 'link', mods: { color: 'white', 'border-style': 'dashed' } },
                                    content: 'Показать ещё'
                                }
                            };

                            that._applyShowBtn();
                        }

                        that._getOldAndSetNewUrl();
                    }
                });
                */
                /*--- /ajax request ---*/

                /*-------------------- immitation of ajax --------------------*/
                var ajaxResponse = {
                    categoryRubricator: {
                        outlineMods: { visible: true },
                        header: {
                            visibilityMods: { visible: true },
                            headerContent: [
                                {
                                    text: 'Все категории',
                                    id: 'all',
                                    textMods: { color: 'white' },
                                    arrowMods: { visible: true }
                                },
                                {
                                    text: 'Автомобили',
                                    id: '127',
                                    textMods: { color: 'white', 'is-link': 'no', disabled: true }
                                }
                            ],
                            error: 'При загрузке рубрик возникла ошибка'
                        },
                        columns: [
                            {
                                content: {
                                    elem: 'list',
                                    list: [
                                        { content: [
                                            {
                                                elem: 'link' ,
                                                elemMods: { 'is-leaf': 'no' },
                                                attrs: { id: '123' },
                                                content: 'Автомобили'
                                            },
                                            {
                                                elem: 'count', content: '42'
                                            }
                                        ]
                                        },

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
                                        { content:
                                            [
                                                {
                                                    elem: 'link' ,
                                                    elemMods: { 'is-leaf': 'no' },
                                                    attrs: { id: '132' },
                                                    content: 'Наука и образование'
                                                },
                                                {
                                                    elem: 'count',
                                                    content: '5'
                                                }
                                            ]
                                        },

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
                        ]
                    },
                    categoryList: {
                        list: [
                            {
                                dataId: '1',
                                leftFieldType: 'logo',
                                url: '/img/catalog-category/ecwid.png',
                                'over-title': 'сервис для бизнеса',
                                title: [
                                    {
                                        text: 'Современный конструктор интернет магазинов',
                                        href: 'http://ru.wix.com/'
                                    }
                                ],
                                text: 'Любой человек, не обладающий навыками программирования, может ' +
                                'легко создать онлайн-магазин и разместить его на своем сайте',
                                activities: '',
                                'icon-type': 'percent',
                                'icon-text': 'Скидка <br> 20%'
                            },
                            {
                                dataId: '2',
                                leftFieldType: 'logo',
                                url: '/img/catalog-category/bitrix.png',
                                'over-title': 'сервис для бизнеса',
                                title: [
                                    {
                                        text: '12 инструментов для организации работы',
                                        href: '#'
                                    }
                                ],
                                text: 'Полный комплект инструментов для управления продажами, ' +
                                'задачами, проектами — всеми рабочими процессами внутри компании.',
                                activities: '',
                                'icon-type': 'percent',
                                'icon-text': 'Скидка <br> 10%'
                            },
                            {
                                dataId: '3',
                                leftFieldType: 'logo',
                                url: '/img/catalog-category/kontur.png',
                                'over-title': 'сервис для бизнеса',
                                title: [
                                    {
                                        text: 'Современный конструктор интернет магазинов',
                                        href: '#'
                                    }
                                ],
                                text: 'Любой человек, не обладающий навыками программирования, может ' +
                                'легко создать онлайн-магазин и разместить его на своем сайте',
                                activities: '',
                                'icon-type': 'rub',
                                'icon-text': 'Выгода <br> 5000 Руб.'
                            },
                            {
                                dataId: '4',
                                leftFieldType: 'rating',
                                rate: '4',
                                'over-title': '',
                                title: [
                                    {
                                        text: 'Скидка 10% на программное обеспечение и решение',
                                        href: '#'
                                    }
                                ],
                                text: 'СП ИНТЕГР компания является официальным представителем на ' +
                                'территории Удмуртии и Пермского края ведущих компаний-разработчиков.',
                                activities: '',
                                'icon-type': 'partner',
                                'icon-text': 'Партнёр <br> клуба <br> клиентов'
                            },
                            {
                                dataId: '5',
                                leftFieldType: 'rating',
                                rate: '2',
                                'over-title': '',
                                title: [
                                    {
                                        text: 'Скидки 15% на другие услуги агентства: фирменный ст...',
                                        href: '#'
                                    },
                                    {
                                        text: 'Бублики оптом в рассрочку',
                                        href: '#'
                                    },
                                    {
                                        text: 'Все на Warcraft!!!',
                                        href: '#'
                                    }
                                ],
                                text: 'Digital-агентство IsWin. Профессиональные услуги по созданию, ' +
                                'продвижению и сопровождению сайтов, разработке фирменного стиля.',
                                activities: '',
                                'icon-type': 'partner',
                                'icon-text': 'Партнёр <br> клуба <br> клиентов'
                            },
                            {
                                dataId: '6',
                                leftFieldType: '',
                                rate: '',
                                'over-title': '',
                                title: [
                                    {
                                        text: 'Fleep Art — разработка сайтов',
                                        href: '#'
                                    }
                                ],
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
                    nextPageNum: '10'
                };

                var bemJSON_rubrics = {
                    block      : 'category-rubricator',
                    mods       : { wrapper: 'none' },
                    gridWidth  : 'col-md-8',
                    gridOffset : 'col-md-offset-2',
                    outlineMods: ajaxResponse.categoryRubricator.outlineMods,
                    header     : ajaxResponse.categoryRubricator.header,
                    columns    : ajaxResponse.categoryRubricator.columns
                };
                var bemJSON_list_1 = {
                    block: 'row',
                    mix: { block: 'category-list-wrap' },
                    content: {
                        block: 'col-md-12',
                        content: {
                            block: 'category-list',
                            list : ajaxResponse.categoryList.list
                        }
                    }
                };
                var bemJSON_list_2 = {
                    block: 'category-list',
                    mods : { wrapper: 'none' },
                    list : ajaxResponse.categoryList.list
                };

                that._bemJSON_rubrics = bemJSON_rubrics;
                that._applyRubricatorContent();

                that._bemJSON_list_1 = bemJSON_list_1;
                that._bemJSON_list_2 = bemJSON_list_2;
                if( typeof ajaxResponse.categoryList != 'undefined'){
                    that._applyListContent();
                }

                // whether ajaxResponse.categoryList exists
                //if( typeof ajaxResponse.categoryList != 'undefined' && typeof ajaxResponse.nextPageNum != 'undefined'){
                //    that._bemJSON_showBtn = {
                //        block: 'category-list-more',
                //        mods: { visible: true },
                //        js: true,
                //        attrs: { 'data-page-num': ajaxResponse.nextPageNum },
                //        content: {
                //            elem: 'btn',
                //            mix: { block: 'link', mods: { color: 'white', 'border-style': 'dashed' } },
                //            content: 'Показать ещё'
                //        }
                //    };
                //
                //    that._applyShowBtn();
                //}

                /**/
                if( typeof ajaxResponse.categoryList != 'undefined' ){
                    if(typeof ajaxResponse.nextPageNum != 'undefined'){
                        that._bemJSON_showBtn = {
                            block: 'category-list-more',
                            mods: { visible: true },
                            js: true,
                            attrs: { 'data-page-num': ajaxResponse.nextPageNum },
                            content: {
                                elem: 'btn',
                                mix: { block: 'link', mods: { color: 'white', 'border-style': 'dashed' } },
                                content: 'Показать ещё'
                            }
                        };

                        that._applyShowBtn();
                    }else{
                        $('.category-list-more').remove();
                    }
                }
                /**/

                that._getOldAndSetNewUrl();

                /*------------------- /immitation of ajax -------------------*/
            },

            /**
             * Apply .category-rubricator content
             * @private
             */
            _applyRubricatorContent: function(){
                var that = this;
                BEMDOM.update(that.domElem, BEMHTML.apply(that._bemJSON_rubrics));
                this.dropElemCache('link');

                // еще раз байндим обработчики
                that._bindToBranch();

                // bind to header-text link
                that._bindToHeaderText();
            },

            /**
             * Apply .category-list content
             * @private
             */
            _applyListContent: function(){
                var that = this;

                if(that.findBlockOutside('page').findBlockInside('category-list') == null){
                    BEMDOM.after(that.domElem, BEMHTML.apply(that._bemJSON_list_1));
                }else{
                    that.findBlockOutside('page').findBlockInside('category-list').domElem.html(''); //обнуление контента
                    BEMDOM.append(that.findBlockOutside('page').findBlockInside('category-list').domElem, BEMHTML.apply(that._bemJSON_list_2));
                }
            },

            /**
             * Apply block .category-list-more
             * @private
             */
            _applyShowBtn: function(){
                var that = this;
                var categoryListMoreCollection = that.findBlockOutside('page').findBlocksInside('category-list-more');

                if(that.findBlockOutside('page').findBlockInside('category-list')){
                    for(var i = 0; i < categoryListMoreCollection.length; i++){
                        categoryListMoreCollection[i].domElem.remove();
                    }
                    BEMDOM.after(that.findBlockOutside('page').findBlockInside('category-list').domElem, BEMHTML.apply(that._bemJSON_showBtn));
                }
            },

            /**
             * Get old pathname and then set new pathname of url
             * @private
             */
            _getOldAndSetNewUrl: function(){
                var that = this;
                var newStartPath = this._getNewStartPath(window.location.pathname);

                // call static method of .url-block
                if(typeof newStartPath !== 'undefined'){
                    var newPath;
                    if( that.RUBRICS_ID.length > 0 && that.RUBRICS_ID === 'all' ){
                        that.RUBRICS_ID = '';
                    }else if(that.RUBRICS_ID.length == 0){
                        that.RUBRICS_ID = '';
                    }
                    newPath = urlblock.consolidate(newStartPath, that.RUBRICS_ID);

                }

                // update url
                window.history.pushState({page: newPath, type: "page"}, null , newPath);

                if(that.findBlockOutside('content-v2__inner').domElem.has('.category-rubricator').length){
                    sessionStorage.setItem('CategoryRubrics_' + window.location.pathname, that.domElem.html());
                    sessionStorage.setItem('CategoryList_' + window.location.pathname, that.findBlockOutside('content-v2__inner').findBlockInside('category-list-wrap').domElem.html());

                    // listening to show-more btn
                    categoryListMore.on('change',
                        function(){
                            sessionStorage.setItem('CategoryList_' + window.location.pathname, that.findBlockOutside('content-v2__inner').findBlockInside('category-list-wrap').domElem.html());
                        },
                        that);
                }
            },

            /**
             * Get new pathname of url
             * @param currentPathName - current pathname
             * @returns {string|*} - returns new pathname in order to use in other methods
             * @private
             */
            _getNewStartPath: function(currentPathName){
                var that = this;
                var pathArr = currentPathName.split(/\//);
                var requiredArr = [];
                var newStartPath;

                // поиск и сохранение в массив пути до catalog и след. за ним элемента, если он не подходит по regExp
                for(var j = 0; j < pathArr.length; j++){

                    if( pathArr[j] != that.SEF_FOLDER ){
                        requiredArr[j] = pathArr[j];
                    }else{
                        if( pathArr[j+1] !== undefined ){
                            if( /^([a-z\-\.]+)$/i.test(pathArr[j+1]) ){
                                requiredArr.push(pathArr[j]);
                                requiredArr.push(pathArr[j+1]);
                                break;
                            }else{
                                requiredArr.push(pathArr[j]);
                                break;
                            }

                        }else{
                            requiredArr.push(pathArr[j]);
                            break;
                        }
                    }
                }

                if(requiredArr[0] === '' ){
                    requiredArr.shift();
                }

                // return of the result
                newStartPath = '/' + requiredArr.join('/');
                return newStartPath;
            },

            /**
             * Actions on popstate event
             * @param e - event of browser history API
             * @private
             */
            _onpopstate: function(e){

                var that = this;
                window.addEventListener("popstate", function(e){
                    // if not first page
                    if ( e.state != null && e.state.type.length > 0) {
                        if(that.findBlockOutside('content-v2__inner').domElem.has('.category-rubricator').length){
                            that.domElem.html(sessionStorage.getItem('CategoryRubrics_' + e.state.page));

                            if(that.findBlockOutside('content-v2__inner').findBlockInside('category-list-wrap') == null){
                                var categoryWrap = {
                                    block: 'row',
                                    mix: { block: 'category-list-wrap' },
                                    content: sessionStorage.getItem('CategoryList_' + e.state.page)
                                };
                                BEMDOM.after(that.domElem, BEMHTML.apply(categoryWrap));
                            }else{
                                that.findBlockOutside('content-v2__inner').findBlockInside('category-list-wrap').domElem.html(sessionStorage.getItem('CategoryList_' + e.state.page));
                            }
                        }
                    }
                    // if first page
                    else if(e.state == null){
                        if(that.findBlockOutside('content-v2__inner').domElem.has('.category-rubricator').length){
                            that.domElem.html(sessionStorage.getItem('CategoryRubrics_' + window.location.pathname));
                            if(that.findBlockOutside('content-v2__inner').findBlockInside('category-list-wrap') != null){
                                that.findBlockOutside('content-v2__inner').findBlockInside('category-list-wrap').domElem.remove();
                            }

                        }
                    }

                    // bind to branch
                    that._bindToBranch();

                    // bind to header-text link
                    that._bindToHeaderText();

                }, false);

            }
        },
        {
            /* Static methods */
        }
    ));
});

