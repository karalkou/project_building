({
    block: 'page',
    mods: { 'sticky-push': 'none'},
    cabinet: true,
    title: 'Страница компании (30.06.16)',
    head: [
        {
            elem : 'meta',
            attrs : { name : 'viewport', content: 'width=1260' },
        },
        { elem: 'css', url: '../merged/_merged.css' },
        {
            elem : 'conditional-comment',
            condition : '< IE 9',
            content : [
                { elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
                { elem : 'js', url : '/js/modernizr-html5shiv-respond.min.js' },
                { elem : 'js', url : '/js/polifil_event.js' }
            ]
        },
        { elem: 'js', url: '../merged/_merged.js' }
    ],
    content: [
        {
            block: 'blur',
            js: true,
            url: '/img/background-blur/background-gradient-company.jpg'
        },
        {
            block: 'image-fixed',
            js: true,
            url: '/img/company/background/company.jpg'
        },
        /* head part */
        {
            block: 'content-v2',
            mods: { type: 'transparent '},
            content: {
                elem: 'inner',
                content: [
                    {
                        block: 'company-page-head',
                        content: [
                            {
                                block: 'row',
                                content: [
                                    /* page-top: left part */
                                    {
                                        block: 'col-md-offset-1',
                                        mix: {block: 'col-md-2'},
                                        content: {
                                            block: 'company-page-head',
                                            elem: 'left',
                                            content: [
                                                {
                                                    block: 'company-page-head',
                                                    elem: 'logo',
                                                    content: {
                                                        block: 'img',
                                                        url: '/img/company/company-logo-new.jpg',
                                                        content: 'content'
                                                    }
                                                },
                                                {
                                                    elem: 'rate-wrap',
                                                    content: [
                                                        {
                                                            block: 'rating',
                                                            rate: '4',
                                                            mix: { block: 'company-page-head', elem: 'rate' },
                                                            content: 'content'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: { color: 'white' },
                                                            mix: { block: 'company-page-head', elem: 'feedbacks' },
                                                            url: '#',
                                                            content: '15 отзывов'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    /* page-top: center part */
                                    {
                                        block: 'col-md-6',
                                        content: {
                                            block: 'company-page-head',
                                            elem: 'center',
                                            content: [
                                                {
                                                    tag: 'h2',
                                                    elem: 'title',
                                                    mix: { block: 'title-v2', mods: { color: 'white', 'size': 'l' } },
                                                    content: 'Системные технологии, Центр Автоматизации Бизнеса'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: { color: 'white' },
                                                    mix: { block: 'company-page-head', elem: 'site-link' },
                                                    url: '#',
                                                    content: 'systech.ru'
                                                },
                                                {
                                                    elem: 'tags',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            mods: { color: 'white-transparent' },
                                                            mix: { block: 'company-page-head', elem: 'tags-item' },
                                                            url: '#',
                                                            content: 'Разработка стартапов'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: { color: 'white-transparent' },
                                                            mix: { block: 'company-page-head', elem: 'tags-item' },
                                                            url: '#',
                                                            content: 'Создание и тестирование программного обеспечения'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: { color: 'white-transparent' },
                                                            mix: { block: 'company-page-head', elem: 'tags-item' },
                                                            url: '#',
                                                            content: 'Реинжиниринг и миграция'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: { color: 'white-transparent' },
                                                            mix: { block: 'company-page-head', elem: 'tags-item' },
                                                            url: '#',
                                                            content: 'Консалтинг и экспертиза'
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    /* page-top: right part */
                                    {
                                        block: 'col-md-2',
                                        content: {
                                            block: 'company-page-head',
                                            elem: 'right',
                                            content: [
                                                {
                                                    block: 'badge',
                                                    mods: { type: 'link' },
                                                    mix: [
                                                        {block: 'company-page-head', elem: 'badge'},
                                                        {block: 'clearfix'}
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'ico',
                                                            mods: {type: 'partner'}
                                                        },
                                                        {
                                                            elem: 'content',
                                                            content: 'Партнёр'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'city',
                                                    content: [
                                                        {
                                                            block: 'ico-location',
                                                            mix: { block: 'company-page-head', elem: 'city-ico' },
                                                            tag: 'i'
                                                        },
                                                        {
                                                            block: 'company-page-head',
                                                            elem: 'city-text',
                                                            content: [
                                                                'Нижний Новгород и ',
                                                                {
                                                                    elem: 'hint-acceptor',
                                                                    content: [
                                                                        'ещё 5 городов',
                                                                        {
                                                                            block: 'hint',
                                                                            js: {
                                                                                duration: 300
                                                                            },
                                                                            mix: { block: 'company-page-head', elem: 'hint' },
                                                                            content: [
                                                                                {
                                                                                    tag: 'p',
                                                                                    content: 'Волгоград'
                                                                                },
                                                                                {
                                                                                    tag: 'p',
                                                                                    content: 'Санкт-Петербург'
                                                                                },
                                                                                {
                                                                                    tag: 'p',
                                                                                    content: 'Ростов-на-Дону'
                                                                                },
                                                                                {
                                                                                    tag: 'p',
                                                                                    content: 'Омск'
                                                                                },
                                                                                {
                                                                                    tag: 'p',
                                                                                    content: 'Саранск'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'company-show-content',
                                                    js: true,
                                                    mix: { block: 'company-page-head', elem: 'tel-wrap' },
                                                    content: {
                                                        elem: 'inner',
                                                        content: [
                                                            {
                                                                elem: 'first-show',
                                                                content: 'Телефон'
                                                            },
                                                            {
                                                                elem: 'final-show',
                                                                content: [
                                                                    {
                                                                        elem: 'final-show-item',
                                                                        content: '+7 (917) 839-96-02'
                                                                    },
                                                                    {
                                                                        elem: 'final-show-item',
                                                                        content: '+7 (917) 839-96-02'
                                                                    },
                                                                    {
                                                                        elem: 'final-show-item',
                                                                        content: '+7 (917) 839-96-02'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'row',
                                content: {
                                    block: 'col-md-10',
                                    mix: { block: 'col-md-offset-1' },
                                    content: {
                                        block: 'tabs',
                                        mods: { 'controls-type': 'events', color: 'white' },
                                        mix: { block: 'company-page-head', elem: 'tabs' },
                                        js: {
                                            tabs: true
                                        },
                                        tabs: [
                                            {
                                                elem: 'item',
                                                mods: {selected: true},
                                                url: '#tab-1',
                                                content: 'О компании'
                                            },
                                            {
                                                elem: 'item',
                                                url: '#tab-2',
                                                content: 'Отзывы'
                                            },
                                            {
                                                elem: 'item',
                                                url: '#tab-3',
                                                content: 'Контакты'
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },
        /* content part */
        {
            block: 'content-v2',
            content: {
                elem: 'inner',
                content: [
                    /* tab-1 */
                    {
                        attrs: { id: 'tab-1' },
                        content: [
                            {
                                block: 'company-page-content',
                                content: [
                                    {
                                        block: 'row',
                                        content: [
                                            {
                                                block: 'company-page-content',
                                                elem: 'part-left',
                                                content: {
                                                    block: 'col-md-5',
                                                    mix: { block: 'col-md-offset-1' },
                                                    content: [
                                                        {
                                                            tag: 'h2',
                                                            block: 'company-page-content',
                                                            elem: 'title',
                                                            elemMods: { section: true },
                                                            mix: { block: 'title-v2', mods: { size: 'l' } },
                                                            content: 'О компании'
                                                        },
                                                        {
                                                            block: 'company-page-owner',
                                                            mix: { block: 'company-page-content', elem: 'owner' },
                                                            content: [
                                                                {
                                                                    elem: 'logo-wrap',
                                                                    content: [
                                                                        {
                                                                            block: 'img',
                                                                            mods: { responsive: true, circle: true },
                                                                            url: '/img/temporary/ustinov.png'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'info-wrap',
                                                                    content: [
                                                                        {
                                                                            elem: 'quote',
                                                                            content: '<div class="company-page-owner__pre-quote">”</div>' +
                                                                            '<div class="company-page-owner__quote-text">Построим звездолет и эвакуируемся с этой планеты&nbsp;' +
                                                                            '<div class="company-page-owner__post-quote">”</div></div>',

                                                                        },
                                                                        {
                                                                            elem: 'author',
                                                                            elemMods: { 'not-link': true },
                                                                            content: 'Юрий Устинов'
                                                                        },
                                                                        {
                                                                            elem: 'position',
                                                                            content: 'Руководитель направления'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'company-page-content',
                                                            elem: 'p',
                                                            content: '«Системные технологии» - Челябинская региональная ' +
                                                            'компания, работающая в сфере автоматизации организационного ' +
                                                            'управления с 1999 года. Цель деятельности компании - ' +
                                                            'повышении продуктивности* работы  региональных, ' +
                                                            'организаций за счет совершенствования их управленческих ' +
                                                            'систем. Основными потребителями услуг компании являются ' +
                                                            'предприятия среднего и малого бизнеса, государственные и ' +
                                                            'муниципальные учреждения, работающие на территории Челябинской области. '
                                                        },
                                                        {
                                                            block: 'company-page-content',
                                                            elem: 'p',
                                                            content: 'Компания предоставляет клиентам полный комплекс ' +
                                                            'услуг по автоматизации управленческой деятельности. '
                                                        },
                                                        {
                                                            block: 'title-v2',
                                                            mods: { size: 'xs', countable: true },
                                                            mix: {
                                                                block: 'company-page-content',
                                                                elem: 'title',
                                                                elemMods: { content: true }
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'count',
                                                                    content: '1.'
                                                                },
                                                                'Управленческий и ИТ-консалтинг:'
                                                            ]
                                                        },
                                                        {
                                                            block: 'list',
                                                            mods: { 'type-style': 'line', 'padding-bottom': 's' },
                                                            mix: { block: 'company-page-content', elem: 'list' },
                                                            list: [
                                                                { content: 'выявление управленческих проблем;' },
                                                                { content: 'определение методологии их решения;' },
                                                                { content: 'разработка технологии обработки информации.' }
                                                            ]
                                                        },
                                                        {
                                                            block: 'title-v2',
                                                            mods: { size: 'xs', countable: true },
                                                            mix: {
                                                                block: 'company-page-content',
                                                                elem: 'title',
                                                                elemMods: { content: true }
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'count',
                                                                    content: '2.'
                                                                },
                                                                'Проектирование и внедрение информационных систем на базе продуктов 1С:'
                                                            ]
                                                        },
                                                        {
                                                            block: 'list',
                                                            mods: { 'type-style': 'line', 'padding-bottom': 's' },
                                                            mix: { block: 'company-page-content', elem: 'list' },
                                                            list: [
                                                                {
                                                                    content: 'адаптация систем 1С к автоматизации  ' +
                                                                    'следующих сфер деятельности клиентов - ' +
                                                                    'бухгалтерской, торгово-закупочной, логистической, ' +
                                                                    'производственной, сервисной, управления ' +
                                                                    'персоналом, расчета заработной платы;'
                                                                },
                                                                {
                                                                    content: 'управление процессом внедрения ' +
                                                                    'информационных систем, включая миграцию данных ' +
                                                                    'и обучение персонала клиентов.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'company-page-ask-wrap',
                                                            content: {
                                                                block: 'company-page-ask',
                                                                content: [
                                                                    {
                                                                        elem: 'pic',
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'Задать вопрос'
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                block: 'company-page-content',
                                                elem: 'part-right',
                                                content: {
                                                    block: 'col-md-5',
                                                    mix: { block: 'col-md-offset-1' },
                                                    content: ['']
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    /* tab-2 */
                    {
                        attrs: { id: 'tab-2' },
                        content: ['tab-2']
                    },
                    /* tab-3 */
                    {
                        attrs: { id: 'tab-3' },
                        content: ['tab-3']
                    }
                ]
            }
        }
    ]
});