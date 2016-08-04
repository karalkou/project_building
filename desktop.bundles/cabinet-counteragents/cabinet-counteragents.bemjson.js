({
    block: 'page',
    mods: { 'sticky-push': 'none'},
    cabinet: true,
    title: 'Проверка контрагентов',
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
            url: '/img/background-blur/background-gradient-counteragents.jpg'
        },
        {
            block: 'content',
            mods: { type: 'transparent '},
            content: {
                elem: 'inner',
                content: [
                    {
                        block: 'row',
                        content: [
                            {
                                block: 'col-md-offset-2',
                                mix: {block: 'col-md-8'},
                                content: [
                                    {
                                        block: 'title-v2',
                                        tag: 'h2',
                                        mods: { color: 'white', 'size': 'xl' },
                                        mix: { block: 'counteragents-title' },
                                        content: 'Проверка контрагентов'
                                    },
                                    {
                                        block: 'form',
                                        content: {
                                            block: 'search',
                                            mods: { align: 'left' },
                                            mix: { block: 'counteragent-search-input', js: true },
                                            type: 'search',
                                            placeholder: 'Введите ИНН',
                                        }
                                    },
                                    {
                                        block: 'counteragents-headliner-text',
                                        content: [
                                            {
                                                elem: 'p',
                                                content: 'Сервис позволяет получить информацию о контрагенте:'
                                            },
                                            {
                                                block: 'list',
                                                mix: { block: 'counteragents-headliner-text', elem: 'list'},
                                                mods: { 'type-style': 'line', color: 'white', 'padding-bottom': 's' },
                                                list: [
                                                    {
                                                        content: 'о его текущем статусе;'
                                                    },
                                                    {
                                                        content: 'его основные регистрационные данные;'
                                                    },
                                                    {
                                                        content: 'его рейтинг и факторы риска.'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'p',
                                                content: 'Проверяя контрагентов вы проявляете должную ' +
                                                'осмотрительность и защищаете свой бизнес от возможных потерь ' +
                                                'и снижаете риск возникновения претензий со стороны налоговых органов.'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'content-v2',
            content:[
                {
                    elem: 'inner',
                    elemMods: { conjuncted: 'top' },
                    content: [
                        {
                            block: 'row',
                            content: {
                                block: 'col-md-offset-2',
                                mix:  { block: 'col-md-8' },
                                content: [
                                    {
                                        block: 'title-v2',
                                        mods: { size: 'l' },
                                        mix: [
                                            { block: 'font', mods: { family: 'robotolight' } },
                                            { block: 'offset-v2', mods: { 'margin-bottom': 'x2' } }
                                        ],
                                        content: 'ООО ”Мастерская интернет-решений Урядова Евгения”'
                                    },
                                    {
                                        content: 'Мастерская интернет-решений Урядова Евгения'
                                    },
                                    {
                                        block: 'counteragent-top-status',
                                        content: {
                                            block: 'status',
                                            mods: { inline: true, single: true },
                                            content: [
                                                {
                                                    elem: 'pic',
                                                    elemMods: { attention: true }
                                                },
                                                {
                                                    elem: 'text',
                                                    elemMods: { attention: true },
                                                    content: 'Контрагент с низким рейтингом.&nbsp;'
                                                },
                                                {
                                                    elem: 'text-add',
                                                    content: 'Работа с ним имеет риски.&nbsp;'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: { color: 'light-gray', underline: 'dashed' },
                                                    mix: [
                                                        { block: 'status', elem: 'link' },
                                                        { block: 'counteragent-protocol-link', js: true }
                                                    ],
                                                    url: '#',
                                                    content: 'Подробнее'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        block: 'tabs',
                                        mods: {margin: 'm'},
                                        mix: { block: 'offset-v2', mods: { 'margin-bottom': 'x5' } },
                                        js: {
                                            tabs: true
                                        },
                                        tabs: [
                                            {
                                                elem: 'item',
                                                mods: {selected: true},
                                                url: '#tab-1',
                                                content: 'Карточка'
                                            },
                                            {
                                                elem: 'item',
                                                url: '#tab-2',
                                                content: 'Протокол рейтинга'
                                            },
                                            {
                                                elem: 'item',
                                                url: '#tab-3',
                                                content: 'Финансы'
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            block: 'row',
                            content: {
                                block: 'line'
                            }
                        }
                    ]
                },
                {
                    attrs: { id: 'tab-1' },
                    content: [
                        {
                            elem: 'inner',
                            elemMods: { conjuncted: 'bottom' },
                            content: [
                                {
                                    block: 'counteragent-card',
                                    content:  [
                                        {
                                            block: 'row',
                                            content: {
                                                block: 'col-md-8',
                                                mix: { block: 'col-md-offset-2' },
                                                content: [
                                                    {
                                                        block: 'status',
                                                        mods: { inline: true, single: true },
                                                        mix: { block: 'counteragent-company-status' },
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                elemMods: { success: true },
                                                                mix: { block: 'counteragent-company-status', elem: 'pic', elemMods: { success: true } },
                                                            },
                                                            {
                                                                elem: 'text',
                                                                elemMods: { success: true },
                                                                mix: { block: 'counteragent-company-status', elem: 'text', elemMods: { success: true } },
                                                                content: 'Действует'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            block: 'row',
                                            content: [
                                                {
                                                    block: 'col-md-4',
                                                    mix: { block: 'col-md-offset-2' },
                                                    content: [
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'title',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: 'Оптовая торговля непродовольственными потребительскими товарами'
                                                        },
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'numbers',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: [
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-key' },
                                                                            content: 'ИНН'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-val' },
                                                                            content: '7716587150'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-key' },
                                                                            content: 'КПП'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-val' },
                                                                            content: '770601001'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-key' },
                                                                            content: 'ОГРН'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-val' },
                                                                            content: '1077760627713'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'date',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: [
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'date-key' },
                                                                            content: 'Дата регистрации:'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'date-val' },
                                                                            content: '27 сентября 2016'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'date-key' },
                                                                            content: 'Код ИФНС:'
                                                                        },
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'date-val' },
                                                                            content: '7701'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'date-key' },
                                                                            content: 'Дата постановки на учёт:'
                                                                        },
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'date-val' },
                                                                            content: '10.09.2010'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'management',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: [
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'label',
                                                                    elemMods: { title: true },
                                                                    content: 'Руководство'
                                                                },
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'text-wrap',
                                                                    content: [
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'text',
                                                                            content: 'ПАНОВ СЕРГЕЙ ВАЛЕРЬЕВИЧ '
                                                                        },
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'text',
                                                                            content: 'ГЕНЕРАЛЬНЫЙ ДИРЕКТОР'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'text-wrap',
                                                                    content: [
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'text',
                                                                            content: 'МУЛЕЕВ ЭМИЛЬ ЗАБИРОВИЧ '
                                                                        },
                                                                        {
                                                                            block: 'counteragent-card',
                                                                            elem: 'text',
                                                                            content: 'ТЕХНИЧЕСКИЙ ДИРЕКТОР'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'address',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: [
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'label',
                                                                    elemMods: { title: true },
                                                                    content: 'Адрес регистрации'
                                                                },
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'text',
                                                                    content: '400048, г. Москва, пр-кт Ленинский, 4 / стр1А'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'activity',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: [
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'label',
                                                                    elemMods: { title: true },
                                                                    content: 'Основной вид деятельности'
                                                                },
                                                                {
                                                                    block: 'counteragent-card',
                                                                    elem: 'text',
                                                                    elemMods: { uppercase: true, activity: true, last: true },
                                                                    content: 'ДЕЯТЕЛЬНОСТЬ ПО СОЗДАНИЮ И ИСПОЛЬЗОВАНИЮ БАЗ ДАННЫХ' +
                                                                    ' И ИНФОРМАЦИОННЫХ РЕСУРСОВ (72.4)'
                                                                },
                                                                {
                                                                    block: 'counteragent-dropdown',
                                                                    js: true,
                                                                    content: [
                                                                        {
                                                                            elem: 'info',
                                                                            elemMods: { 'counteragent-info': true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'text',
                                                                                    elemMods: { 'counteragent-info': true },
                                                                                    content: 'Остальные (5)'
                                                                                },
                                                                                {
                                                                                    elem: 'arrow',
                                                                                    elemMods: { direction: 'down' },
                                                                                    content: {
                                                                                        block: 'fa',
                                                                                        mix: { block: ' fa-angle-down' }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'inner',
                                                                            mix: { block: 'counteragent-card', elem: 'dropdown-activity' },
                                                                            content: [
                                                                                {
                                                                                    block: 'counteragent-card',
                                                                                    elem: 'text',
                                                                                    elemMods: { uppercase: true, activity: true },
                                                                                    content: 'Продажа бубликов'
                                                                                },
                                                                                {
                                                                                    block: 'counteragent-card',
                                                                                    elem: 'text',
                                                                                    elemMods: { uppercase: true, activity: true },
                                                                                    content: 'Диагностика бубликов'
                                                                                },
                                                                                {
                                                                                    block: 'counteragent-card',
                                                                                    elem: 'text',
                                                                                    elemMods: { uppercase: true, activity: true },
                                                                                    content: 'Обмен баранками'
                                                                                },
                                                                                {
                                                                                    block: 'counteragent-card',
                                                                                    elem: 'text',
                                                                                    elemMods: { uppercase: true, activity: true },
                                                                                    content: 'ДЕЯТЕЛЬНОСТЬ ПО СОЗДАНИЮ И ИСПОЛЬЗОВАНИЮ БАЗ ДАННЫХ' +
                                                                                    ' И ИНФОРМАЦИОННЫХ РЕСУРСОВ (72.4)'
                                                                                },,
                                                                                {
                                                                                    block: 'counteragent-card',
                                                                                    elem: 'text',
                                                                                    elemMods: { uppercase: true, activity: true },
                                                                                    content: 'деятельность по поддержанию в ' +
                                                                                    'работоспособном состоянии энергетических ' +
                                                                                    'установок промпредприятий'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'counteragent-card',
                                                            elem: 'funds',
                                                            mix: { block: 'counteragent-card', elem: 'item' },
                                                            content: [
                                                                {
                                                                    elem: 'label',
                                                                    elemMods: { title: true },
                                                                    content: 'Регистрация во внебюджетных фондах'
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-key' },
                                                                            content: 'ФСС'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'counteragent-card', elem: 'numbers-key' },
                                                                            content: '772705489177271'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'col-md-4',
                                                    content: {
                                                        block: 'counteragent-offer-panel',
                                                        content: [
                                                            {
                                                                block: 'special-offers',
                                                                content: [
                                                                    {
                                                                        elem: 'title',
                                                                        elemMods: { vertical: true },
                                                                        content: 'Спецпредложения'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mods: { color: 'red' },
                                                                                mix: { block: 'special-offer', elem: 'text' },
                                                                                content: 'На услуги (ИТ-аутсорсинг, ИТ-консалтинг, ' +
                                                                                '1С-внедрение, 1С-поддержка, ' +
                                                                                '1С-консультации, 1С-доработка) компании «Системные технологии».'
                                                                            },
                                                                            {
                                                                                elem: 'tag-wrap',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'IT-консалтинг,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'продажа ПО,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'создание сайтов,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'интернет-маркетинг'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mods: { color: 'red' },
                                                                                mix: { block: 'special-offer', elem: 'text' },
                                                                                content: 'Всем новым клиентам, заключившим договор ' +
                                                                                'на Абонентское обслуживание компьютерной техники ' +
                                                                                'или 1С, компания «Системные технологии» ДАРИТ месяц ' +
                                                                                'БЕСПЛАТНОГО обслуживания.'
                                                                            },
                                                                            {
                                                                                elem: 'tag-wrap',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'Продажа и обслуживание компьютеров'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'inner',
                            elemMods: {color: 'gray'},
                            content: [
                                {
                                    block: 'row',
                                    content: {
                                        block: 'col-md-offset-2',
                                        mix:  { block: 'col-md-8' },
                                        content: [
                                            {
                                                block: 'title-v2',
                                                mods: { size: 'l' },
                                                mix: { block: 'font', mods: { family: 'robotolight' } },
                                                content: 'Результат проверки на 03.06.2016'
                                            },
                                            {
                                                block: 'counteragent-status-panel',
                                                content: [
                                                    {
                                                        block: 'status',
                                                        mods: { inline: true },
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                elemMods: { danger: true }
                                                            },
                                                            {
                                                                elem: 'text',
                                                                content: [
                                                                    'Находится на стадии ликвидации.',
                                                                    {
                                                                        elem: 'text-specification',
                                                                        content: 'На организацию есть ' +
                                                                        'данные в сервисе. Регистрация ' +
                                                                        'подтверждена.'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'status',
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                elemMods: { danger: true }
                                                            },
                                                            {
                                                                elem: 'text',
                                                                content: [
                                                                    'Рекомендуется проверить наличие сообщенй о ' +
                                                                'банкротстве за последние 12 месяцев.',
                                                                    {
                                                                        elem: 'text-specification',
                                                                        content: 'На организацию есть ' +
                                                                        'данные в сервисе. Регистрация ' +
                                                                        'подтверждена.'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'status',
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                elemMods: { attention: true }
                                                            },
                                                            {
                                                                elem: 'text',
                                                                content: [
                                                                    'Выявлен ряд признаков, нетепичных для обычной ' +
                                                                'хозяйственной деятельности. Рекомендуется проявить должную ' +
                                                                'осмотрительность, установив надежный контакт с действующим ' +
                                                                'руководством (собственниками) компании.',
                                                                    {
                                                                        elem: 'text-specification',
                                                                        content: 'На организацию есть ' +
                                                                        'данные в сервисе. Регистрация ' +
                                                                        'подтверждена.'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'status',
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                elemMods: { success: true }
                                                            },
                                                            {
                                                                elem: 'text',
                                                                content: [
                                                                    'Данные руководителя/учредителя компании обнаружены ' +
                                                                'в реестре ФНС “массовых” руководителей и учредителей.',
                                                                    {
                                                                        elem: 'text-specification',
                                                                        content: 'На организацию есть ' +
                                                                        'данные в сервисе. Регистрация ' +
                                                                        'подтверждена.'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'status',
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                elemMods: { success: true }
                                                            },
                                                            {
                                                                elem: 'text',
                                                                content: [
                                                                    'Данные руководителя/учредителя компании обнаружены ' +
                                                                'в реестре ФНС “массовых” руководителей и учредителей.',
                                                                    {
                                                                        elem: 'text-specification',
                                                                        content: 'На организацию есть ' +
                                                                        'данные в сервисе. Регистрация ' +
                                                                        'подтверждена.'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'link',
                                                mods: { color: 'red' },
                                                mix: { block: 'counteragent-protocol-link', js: true },
                                                url: '#rate-protocol',
                                                content: 'Все результаты проверки'
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            elem: 'inner',
                            elemMods: {color: 'black'},
                            content: {
                                block: 'counteragent-info',
                                content: {
                                    block: 'row',
                                    content: {
                                        block: 'col-md-8',
                                        mix: { block: 'col-md-offset-2' },
                                        content: [
                                            {
                                                block: 'row',
                                                mix: { block: 'counteragent-info', elem: 'row' },
                                                content: [
                                                    {
                                                        block: 'counteragent-info',
                                                        elem: 'column',
                                                        content: [
                                                            /* Арбитражные дела */
                                                            {
                                                                block: 'title-v2',
                                                                mods: { size: 's' },
                                                                mix: [
                                                                    { block: 'counteragent-info', elem: 'arbitration-title' },
                                                                    { block: 'counteragent-info', elem: 'title' }
                                                                ],
                                                                content: [
                                                                    'Арбитражные дела',
                                                                    {
                                                                        block: 'counteragent-info',
                                                                        elem: 'title-sup',
                                                                        elemMods: { arbitration: true },
                                                                        content: '(110)'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'counteragent-info', elem: 'arbitration-table',
                                                                tag: 'ul',
                                                                content: [
                                                                    {
                                                                        block: 'counteragent-info', elem: 'arbitration-tr',
                                                                        elemMods: { head: true },
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { first: true },
                                                                                content: 'Роль'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { second: true },
                                                                                content: 'за 12 мес'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { third: true },
                                                                                content: 'За всё время'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    },
                                                                    /* arbitration 2 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'arbitration-tr',
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { first: true },
                                                                                content: 'Истец'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { second: true },
                                                                                content: '0 тыс.р. (0)'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { third: true },
                                                                                content: '786 тыс.р. (1)'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    },
                                                                    /* arbitration 3 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'arbitration-tr',
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { first: true, 'last-line': true },
                                                                                content: 'Ответчик'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { second: true, 'last-line': true },
                                                                                content: '25 тыс.р. (1)'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'arbitration-td',
                                                                                elemMods: { third: true, 'last-line': true },
                                                                                content: '130 тыс.р. (3)'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    /* Учредители */
                                                    {
                                                        block: 'counteragent-info',
                                                        elem: 'column',
                                                        content: [
                                                            {
                                                                block: 'title-v2',
                                                                mods: { size: 's' },
                                                                mix: [
                                                                    { block: 'counteragent-info', elem: 'founders-title' },
                                                                    { block: 'counteragent-info', elem: 'title' }
                                                                ],
                                                                content: [
                                                                    'Учредители',
                                                                    {
                                                                        block: 'counteragent-info',
                                                                        elem: 'title-sup',
                                                                        content: '(3)'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'counteragent-info', elem: 'founders-list',
                                                                content: [
                                                                    /* founders 1 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'founders-list-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'founders-tooltip-acceptor',
                                                                                mix: {
                                                                                    block: 'js-tooltip-acceptor',
                                                                                    js: {
                                                                                        tip: '#tooltip-1',
                                                                                        top: 25,
                                                                                        left: -15
                                                                                    }
                                                                                },
                                                                                content: 'Мастерская интернет-решений Урядова Евгения',
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'half-transparent',
                                                                                content: 'Доля: 55 000,00 р.'
                                                                            }
                                                                        ]
                                                                    },
                                                                    /* founders 2 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'founders-list-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'founders-tooltip-acceptor',
                                                                                mix: {
                                                                                    block: 'js-tooltip-acceptor',
                                                                                    js: {
                                                                                        tip: '#tooltip-2',
                                                                                        top: 25,
                                                                                        left: -15
                                                                                    }
                                                                                },
                                                                                content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING...'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'half-transparent',
                                                                                content: 'Доля: 37 740 000,00 р.'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'counteragent-dropdown',
                                                                js: true,
                                                                content: [
                                                                    {
                                                                        elem: 'info',
                                                                        elemMods: { 'counteragent-info': true },
                                                                        content: [
                                                                            {
                                                                                elem: 'text',
                                                                                elemMods: { 'counteragent-info': true },
                                                                                content: 'Остальные (3)'
                                                                            },
                                                                            {
                                                                                elem: 'arrow',
                                                                                elemMods: { direction: 'down' },
                                                                                content: {
                                                                                    block: 'fa',
                                                                                    mix: { block: ' fa-angle-down' }
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'inner',
                                                                        mix: { block: 'counteragent-info', elem: 'dropdown-licenses' },
                                                                        content: {
                                                                            block: 'counteragent-info', elem: 'table',
                                                                            tag: 'ul',
                                                                            content: [
                                                                                /* founders 3 */
                                                                                {
                                                                                    block: 'counteragent-info', elem: 'founders-list-item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'founders-tooltip-acceptor',
                                                                                            mix: {
                                                                                                block: 'js-tooltip-acceptor',
                                                                                                js: {
                                                                                                    tip: '#tooltip-3',
                                                                                                    top: 25,
                                                                                                    left: -15
                                                                                                }
                                                                                            },
                                                                                            content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING...'
                                                                                        },
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'half-transparent',
                                                                                            content: 'Доля: 37 740 000,00 р.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                /* founders 4 */
                                                                                {
                                                                                    block: 'counteragent-info', elem: 'founders-list-item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'founders-tooltip-acceptor',
                                                                                            mix: {
                                                                                                block: 'js-tooltip-acceptor',
                                                                                                js: {
                                                                                                    tip: '#tooltip-4',
                                                                                                    top: 25,
                                                                                                    left: -15
                                                                                                }
                                                                                            },
                                                                                            content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING...'
                                                                                        },
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'half-transparent',
                                                                                            content: 'Доля: 37 740 000,00 р.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                /* founders 5 */
                                                                                {
                                                                                    block: 'counteragent-info', elem: 'founders-list-item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'founders-tooltip-acceptor',
                                                                                            mix: {
                                                                                                block: 'js-tooltip-acceptor',
                                                                                                js: {
                                                                                                    tip: '#tooltip-5',
                                                                                                    top: 25,
                                                                                                    left: -15
                                                                                                }
                                                                                            },
                                                                                            content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING...'
                                                                                        },
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'half-transparent',
                                                                                            content: 'Доля: 37 740 000,00 р.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'counteragent-info', elem: 'founders-capital',
                                                                mix: { block: 'counteragent-info', elem: 'half-transparent' },
                                                                content: 'Уставный капитал: 10 000 000 р.'
                                                            }
                                                        ]
                                                    },
                                                    /* Лицензии */
                                                    {
                                                        block: 'counteragent-info',
                                                        elem: 'column',
                                                        content: [
                                                            {
                                                                block: 'title-v2',
                                                                mods: { size: 's' },
                                                                mix: [
                                                                    { block: 'counteragent-info', elem: 'licenses-title' },
                                                                    { block: 'counteragent-info', elem: 'title' }
                                                                ],
                                                                content: [
                                                                    'Лицензии',
                                                                    {
                                                                        block: 'counteragent-info',
                                                                        elem: 'title-sup',
                                                                        content: '(2)'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem: 'text',
                                                                attrs: { style: 'display: none' },
                                                                content: 'Нет данных'
                                                            },
                                                            {
                                                                block: 'counteragent-info', elem: 'table',
                                                                tag: 'ul',
                                                                content: [
                                                                    /* licenses 1 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'tr',
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'licenses-td',
                                                                                    elemMods: { first: true }
                                                                                },
                                                                                content: {
                                                                                    elem: 'licenses-tooltip-acceptor',
                                                                                    mix: {
                                                                                        block: 'js-tooltip-acceptor',
                                                                                        js: {
                                                                                            tip: '#tooltip-01',
                                                                                            top: 25
                                                                                        }
                                                                                    },
                                                                                    content: '108815 1'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'licenses-td',
                                                                                    elemMods: { second: true }
                                                                                },
                                                                                content: '25.03.2013'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    },
                                                                    /* licenses 2 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'tr',
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'licenses-td',
                                                                                    elemMods: { first: true }
                                                                                },
                                                                                content: {
                                                                                    elem: 'licenses-tooltip-acceptor',
                                                                                    mix: {
                                                                                        block: 'js-tooltip-acceptor',
                                                                                        js: {
                                                                                            tip: '#tooltip-02',
                                                                                            top: 25
                                                                                        }
                                                                                    },
                                                                                    content: '108814 1'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'licenses-td',
                                                                                    elemMods: { second: true }
                                                                                },
                                                                                content: '25.03.2013'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                block: 'counteragent-dropdown',
                                                                js: true,
                                                                content: [
                                                                    {
                                                                        elem: 'info',
                                                                        elemMods: { 'counteragent-info': true },
                                                                        content: [
                                                                            {
                                                                                elem: 'text',
                                                                                elemMods: { 'counteragent-info': true },
                                                                                content: 'Остальные (3)'
                                                                            },
                                                                            {
                                                                                elem: 'arrow',
                                                                                elemMods: { direction: 'down' },
                                                                                content: {
                                                                                    block: 'fa',
                                                                                    mix: { block: ' fa-angle-down' }
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'inner',
                                                                        mix: { block: 'counteragent-info', elem: 'dropdown-licenses' },
                                                                        content: {
                                                                            block: 'counteragent-info', elem: 'table',
                                                                            tag: 'ul',
                                                                            content: [
                                                                                /* licenses 3 */
                                                                                {
                                                                                    block: 'counteragent-info', elem: 'tr',
                                                                                    tag: 'li',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'td',
                                                                                            mix: {
                                                                                                block: 'counteragent-info',
                                                                                                elem: 'licenses-td',
                                                                                                elemMods: { first: true }
                                                                                            },
                                                                                            content: {
                                                                                                elem: 'licenses-tooltip-acceptor',
                                                                                                mix: {
                                                                                                    block: 'js-tooltip-acceptor',
                                                                                                    js: {
                                                                                                        tip: '#tooltip-03',
                                                                                                        top: 25
                                                                                                    }
                                                                                                },
                                                                                                content: '108814 1'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'td',
                                                                                            mix: {
                                                                                                block: 'counteragent-info',
                                                                                                elem: 'licenses-td',
                                                                                                elemMods: { second: true }
                                                                                            },
                                                                                            content: '25.03.2013'
                                                                                        },
                                                                                        {
                                                                                            block: 'clearfix'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                /* licenses 4 */
                                                                                {
                                                                                    block: 'counteragent-info', elem: 'tr',
                                                                                    tag: 'li',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'td',
                                                                                            mix: {
                                                                                                block: 'counteragent-info',
                                                                                                elem: 'licenses-td',
                                                                                                elemMods: { first: true }
                                                                                            },
                                                                                            content: {
                                                                                                elem: 'licenses-tooltip-acceptor',
                                                                                                mix: {
                                                                                                    block: 'js-tooltip-acceptor',
                                                                                                    js: {
                                                                                                        tip: '#tooltip-04',
                                                                                                        top: 25
                                                                                                    }
                                                                                                },
                                                                                                content: '108814 1'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'td',
                                                                                            mix: {
                                                                                                block: 'counteragent-info',
                                                                                                elem: 'licenses-td',
                                                                                                elemMods: { second: true }
                                                                                            },
                                                                                            content: '25.03.2013'
                                                                                        },
                                                                                        {
                                                                                            block: 'clearfix'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                /* licenses 5 */
                                                                                {
                                                                                    block: 'counteragent-info', elem: 'tr',
                                                                                    tag: 'li',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'td',
                                                                                            mix: {
                                                                                                block: 'counteragent-info',
                                                                                                elem: 'licenses-td',
                                                                                                elemMods: { first: true }
                                                                                            },
                                                                                            content: {
                                                                                                elem: 'licenses-tooltip-acceptor',
                                                                                                mix: {
                                                                                                    block: 'js-tooltip-acceptor',
                                                                                                    js: {
                                                                                                        tip: '#tooltip-05',
                                                                                                        top: 25
                                                                                                    }
                                                                                                },
                                                                                                content: '108814 1'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            block: 'counteragent-info', elem: 'td',
                                                                                            mix: {
                                                                                                block: 'counteragent-info',
                                                                                                elem: 'licenses-td',
                                                                                                elemMods: { second: true }
                                                                                            },
                                                                                            content: '25.03.2013'
                                                                                        },
                                                                                        {
                                                                                            block: 'clearfix'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    /* Финаносвые показатели */
                                                    {
                                                        block: 'counteragent-info',
                                                        elem: 'column',
                                                        content: [
                                                            {
                                                                block: 'title-v2',
                                                                mods: { size: 's' },
                                                                mix: [
                                                                    { block: 'counteragent-info', elem: 'finances-title' },
                                                                    { block: 'counteragent-info', elem: 'title' }
                                                                ],
                                                                content: 'Финансовые показатели'
                                                            },
                                                            {
                                                                block: 'counteragent-info', elem: 'table',
                                                                tag: 'ul',
                                                                content: [
                                                                    {
                                                                        block: 'counteragent-info', elem: 'tr',
                                                                        elemMods: { head: true },
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'finances-td',
                                                                                    elemMods: { first: true }
                                                                                },
                                                                                content: 'Выручка'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'finances-td',
                                                                                    elemMods: { second: true }
                                                                                },
                                                                                content: '255 445 тыс. р.'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: [
                                                                                    { block: 'counteragent-info', elem: 'finances-td', elemMods: { third: true } },
                                                                                    { block: 'counteragent-info', elem: 'finances-td', elemMods: { pos: true } },
                                                                                ],
                                                                                content: '+41%'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    },
                                                                    /* finances 2 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'tr',
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'finances-td',
                                                                                    elemMods: { first: true }
                                                                                },
                                                                                content: 'Прибыль (убыток)'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'finances-td',
                                                                                    elemMods: { second: true }
                                                                                },
                                                                                content: '-116 175 тыс. р.'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: [
                                                                                    { block: 'counteragent-info', elem: 'finances-td', elemMods: { third: true } },
                                                                                    { block: 'counteragent-info', elem: 'finances-td', elemMods: { neg: true } },
                                                                                ],
                                                                                content: '-28%'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    },
                                                                    /* finances 3 */
                                                                    {
                                                                        block: 'counteragent-info', elem: 'tr',
                                                                        tag: 'li',
                                                                        content: [
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'finances-td',
                                                                                    elemMods: { first: true }
                                                                                },
                                                                                content: 'Активы'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: {
                                                                                    block: 'counteragent-info',
                                                                                    elem: 'finances-td',
                                                                                    elemMods: { second: true }
                                                                                },
                                                                                content: '292 050 тыс. р.'
                                                                            },
                                                                            {
                                                                                block: 'counteragent-info', elem: 'td',
                                                                                mix: [
                                                                                    { block: 'counteragent-info', elem: 'finances-td', elemMods: { third: true } },
                                                                                    { block: 'counteragent-info', elem: 'finances-td', elemMods: { pos: true } },
                                                                                ],
                                                                                content: '+121%'
                                                                            },
                                                                            {
                                                                                block: 'clearfix'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            elem: 'inner',
                            content: [
                                {
                                    block: 'row',
                                    content: {
                                        block: 'col-md-offset-2',
                                        mix:  { block: 'col-md-8' },
                                        content: [
                                            {
                                                block: 'title-v2',
                                                mods: { size: 'm', align: 'center' },
                                                mix: { block: 'font', mods: { family: 'robotolight' } },
                                                content: 'Данные предоставлены сервисом Моё дело'
                                            },
                                            {
                                                block: 'counteragent-provider-logo',
                                                content: {
                                                    block: 'link',
                                                    url: 'https://www.moedelo.org',
                                                    mods: { underline: 'false' },
                                                    content: {
                                                        block: 'img',
                                                        url: '/img/color-logo/moe-delo-bureau.png'
                                                    }
                                                }
                                            },
                                            {
                                                block: 'special-offers',
                                                content: [
                                                    {
                                                        elem: 'title',
                                                        elemMods: { horizontal: true },
                                                        content: 'Спецпредложения'
                                                    },
                                                    {
                                                        block: 'row',
                                                        content: [
                                                            {
                                                                block: 'col-md-6',
                                                                content: {
                                                                    block: 'special-offers',
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            mods: { color: 'red' },
                                                                            mix: { block: 'special-offer', elem: 'text' },
                                                                            content: 'На услуги (ИТ-аутсорсинг, ИТ-консалтинг, ' +
                                                                            '1С-внедрение, 1С-поддержка, ' +
                                                                            '1С-консультации, 1С-доработка) компании «Системные технологии».'
                                                                        },
                                                                        {
                                                                            block: 'special-offers',
                                                                            elem: 'tag-wrap',
                                                                            content: [
                                                                                {
                                                                                    elem: 'tag',
                                                                                    content: 'IT-консалтинг,&nbsp;'
                                                                                },
                                                                                {
                                                                                    elem: 'tag',
                                                                                    content: 'продажа ПО,&nbsp;'
                                                                                },
                                                                                {
                                                                                    elem: 'tag',
                                                                                    content: 'создание сайтов,&nbsp;'
                                                                                },
                                                                                {
                                                                                    elem: 'tag',
                                                                                    content: 'интернет-маркетинг'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                            },
                                                            {
                                                                block: 'col-md-6',
                                                                content: {
                                                                    block: 'special-offers',
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            mods: { color: 'red' },
                                                                            mix: { block: 'special-offer', elem: 'text' },
                                                                            content: 'Всем новым клиентам, заключившим договор ' +
                                                                            'на Абонентское обслуживание компьютерной техники ' +
                                                                            'или 1С, компания «Системные технологии» ДАРИТ месяц ' +
                                                                            'БЕСПЛАТНОГО обслуживания.'
                                                                        },
                                                                        {
                                                                            block: 'special-offers',
                                                                            elem: 'tag-wrap',
                                                                            content: [
                                                                                {
                                                                                    elem: 'tag',
                                                                                    content: 'Продажа и обслуживание компьютеров'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                /*------------ Second Tab ------------*/
                {
                    attrs: { id: 'tab-2' },
                    content: [
                        {
                            elem: 'inner',
                            elemMods: { conjuncted: 'bottom' },
                            content: [
                                {
                                    block: 'row',
                                    content: [
                                        {
                                            block: 'col-md-8',
                                            mix: { block: 'col-md-offset-2' },
                                            content: [
                                                {
                                                    block: 'counteragents-protocol-nav',
                                                    content: [
                                                        {
                                                            elem: 'label',
                                                            content: 'Проверки'
                                                        },
                                                        {
                                                            block: 'list',
                                                            mods: { inline: true, type: 'nav' },
                                                            mix: { block: 'counteragents-protocol-nav', elem: 'filter' },
                                                            js: {
                                                                nav: 'filter',
                                                                'listed-name': 'counteragent-statuses'
                                                            },
                                                            wrapper : 'none',
                                                            list: [
                                                                {
                                                                    content: {
                                                                        block: 'link',
                                                                        mods: { color: 'red', underline: 'dashed' },
                                                                        mix: { block: 'link_selected' },
                                                                        url: '#all',
                                                                        content: 'Все'
                                                                    }
                                                                },
                                                                {
                                                                    content: {
                                                                        block: 'link',
                                                                        mods: { color: 'red', underline: 'dashed' },
                                                                        url: '#negative',
                                                                        content: 'Отрицательные'
                                                                    }
                                                                },
                                                                {
                                                                    content: {
                                                                        block: 'link',
                                                                        mods: { color: 'red', underline: 'dashed' },
                                                                        url: '#positive',
                                                                        content: 'Положительные'
                                                                    }
                                                                },
                                                                {
                                                                    content: {
                                                                        block: 'link',
                                                                        mods: { color: 'red', underline: 'dashed' },
                                                                        url: '#neutral',
                                                                        content: 'Нейтральные'
                                                                    }
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
                                    block: 'counteragents-protocol-cont',
                                    content: [
                                        {
                                            block: 'row',
                                            content: [
                                                {
                                                    block: 'col-md-4',
                                                    mix: { block: 'col-md-offset-2' },
                                                    content: [
                                                        {
                                                            block: 'counteragent-statuses',
                                                            content: [
                                                                {
                                                                    block: 'status',
                                                                    filter: 'negative',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { danger: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Находится на стадии ликвидации.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'Записи о прекращении деятельности нет.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'neutral',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { attention: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Выявлен ряд признаков, нетепичных ' +
                                                                                'для обычной хозяйственной деятельности.' +
                                                                                ' Рекомендуется проявить должную ' +
                                                                                'осмотрительность, установив надежный ' +
                                                                                'контакт с действующим руководством ' +
                                                                                '(собственниками) компании.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'Организация не находится ' +
                                                                                    'в стадии исключения из ЕГРЮЛ по ' +
                                                                                    'последним доступным сервису данным.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'neutral',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { attention: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Данные руководителя/учредителя' +
                                                                                ' компании обнаружены в реестре ФНС ' +
                                                                                '“массовых” руководителей и учредителей.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'На организацию есть ' +
                                                                                    'данные в сервисе. Регистрация ' +
                                                                                    'подтверждена.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'neutral',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { attention: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Находится на стадии ликвидации.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'Записи о прекращении деятельности нет.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'neutral',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { attention: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Выявлен ряд признаков, нетепичных ' +
                                                                                'для обычной хозяйственной деятельности.' +
                                                                                ' Рекомендуется проявить должную ' +
                                                                                'осмотрительность, установив надежный ' +
                                                                                'контакт с действующим руководством ' +
                                                                                '(собственниками) компании.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'Организация не находится ' +
                                                                                    'в стадии исключения из ЕГРЮЛ по ' +
                                                                                    'последним доступным сервису данным.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'positive',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { success: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Данные руководителя/учредителя' +
                                                                                ' компании обнаружены в реестре ФНС ' +
                                                                                '“массовых” руководителей и учредителей.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'На организацию есть ' +
                                                                                    'данные в сервисе. Регистрация ' +
                                                                                    'подтверждена.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'positive',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { success: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Находится на стадии ликвидации.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'Записи о прекращении деятельности нет.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'positive',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { success: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Выявлен ряд признаков, нетепичных ' +
                                                                                'для обычной хозяйственной деятельности.' +
                                                                                ' Рекомендуется проявить должную ' +
                                                                                'осмотрительность, установив надежный ' +
                                                                                'контакт с действующим руководством ' +
                                                                                '(собственниками) компании.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'Организация не находится ' +
                                                                                    'в стадии исключения из ЕГРЮЛ по ' +
                                                                                    'последним доступным сервису данным.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'status',
                                                                    filter: 'positive',
                                                                    mix: { block: 'counteragent-statuses', elem: 'item' },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            elemMods: { success: true }
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: [
                                                                                'Данные руководителя/учредителя' +
                                                                                ' компании обнаружены в реестре ФНС ' +
                                                                                '“массовых” руководителей и учредителей.',
                                                                                {
                                                                                    elem: 'text-specification',
                                                                                    content: 'На организацию есть ' +
                                                                                    'данные в сервисе. Регистрация ' +
                                                                                    'подтверждена.'
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
                                                    block: 'col-md-4',
                                                    content: [
                                                        {
                                                            block: 'counteragent-offer-panel',
                                                            content: [
                                                                {
                                                                    block: 'special-offers',
                                                                    content: [
                                                                        {
                                                                            elem: 'title',
                                                                            elemMods: { vertical: true },
                                                                            content: 'Спецпредложения'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'link',
                                                                                    mods: { color: 'red' },
                                                                                    mix: { block: 'special-offer', elem: 'text' },
                                                                                    content: 'На услуги (ИТ-аутсорсинг, ИТ-консалтинг, ' +
                                                                                    '1С-внедрение, 1С-поддержка, ' +
                                                                                    '1С-консультации, 1С-доработка) компании «Системные технологии».'
                                                                                },
                                                                                {
                                                                                    elem: 'tag-wrap',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'tag',
                                                                                            content: 'IT-консалтинг,&nbsp;'
                                                                                        },
                                                                                        {
                                                                                            elem: 'tag',
                                                                                            content: 'продажа ПО,&nbsp;'
                                                                                        },
                                                                                        {
                                                                                            elem: 'tag',
                                                                                            content: 'создание сайтов,&nbsp;'
                                                                                        },
                                                                                        {
                                                                                            elem: 'tag',
                                                                                            content: 'интернет-маркетинг'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'link',
                                                                                    mods: { color: 'red' },
                                                                                    mix: { block: 'special-offer', elem: 'text' },
                                                                                    content: 'Всем новым клиентам, заключившим договор ' +
                                                                                    'на Абонентское обслуживание компьютерной техники ' +
                                                                                    'или 1С, компания «Системные технологии» ДАРИТ месяц ' +
                                                                                    'БЕСПЛАТНОГО обслуживания.'
                                                                                },
                                                                                {
                                                                                    elem: 'tag-wrap',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'tag',
                                                                                            content: 'Продажа и обслуживание компьютеров'
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
                                                            block: 'counteragent-recommendations',
                                                            content: [
                                                                {
                                                                    elem: 'title',
                                                                    mix: { block: 'title-v2', mods: { size: 's' } },
                                                                    content: 'Рекомендации.'
                                                                },
                                                                {
                                                                    elem: 'list-title',
                                                                    content: 'Целесообразно провести дополнительную ' +
                                                                    '(активную) проверку контрагента, в частности:'
                                                                },
                                                                {
                                                                    block: 'list',
                                                                    mods: { 'type-style': 'line' },
                                                                    mix: { block: 'counteragent-recommendations', elem: 'list' },
                                                                    list: [
                                                                        {
                                                                            content: 'лично встретиться с ' +
                                                                            'представителями контрагента ' +
                                                                            '(его руководством) и запротоколировать ' +
                                                                            'результат встречи;'
                                                                        },
                                                                        {
                                                                            content: 'получить копии паспортов ' +
                                                                            'представителей контрагента (руководителя) ' +
                                                                            'и сравнить их с оригиналами, а также ' +
                                                                            'проверить действительность паспортов, ' +
                                                                            'полномочия представителей на ведение ' +
                                                                            'переговоров, подписание и исполнение ' +
                                                                            'договора (доверенности, приказы и т.д.)'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    block: 'row',
                                    content: [
                                        {
                                            block: 'col-md-8',
                                            mix: { block: 'col-md-offset-2' },
                                            content: [
                                                {
                                                    block: 'special-offers',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            elemMods: { horizontal: true },
                                                            content: 'Спецпредложения'
                                                        },
                                                        {
                                                            block: 'row',
                                                            content: [
                                                                {
                                                                    block: 'col-md-6',
                                                                    content: {
                                                                        block: 'special-offers',
                                                                        elem: 'item',
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mods: { color: 'red' },
                                                                                mix: { block: 'special-offer', elem: 'text' },
                                                                                content: 'На услуги (ИТ-аутсорсинг, ИТ-консалтинг, ' +
                                                                                '1С-внедрение, 1С-поддержка, ' +
                                                                                '1С-консультации, 1С-доработка) компании «Системные технологии».'
                                                                            },
                                                                            {
                                                                                block: 'special-offers',
                                                                                elem: 'tag-wrap',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'IT-консалтинг,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'продажа ПО,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'создание сайтов,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'интернет-маркетинг'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                },
                                                                {
                                                                    block: 'col-md-6',
                                                                    content: {
                                                                        block: 'special-offers',
                                                                        elem: 'item',
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mods: { color: 'red' },
                                                                                mix: { block: 'special-offer', elem: 'text' },
                                                                                content: 'Всем новым клиентам, заключившим договор ' +
                                                                                'на Абонентское обслуживание компьютерной техники ' +
                                                                                'или 1С, компания «Системные технологии» ДАРИТ месяц ' +
                                                                                'БЕСПЛАТНОГО обслуживания.'
                                                                            },
                                                                            {
                                                                                block: 'special-offers',
                                                                                elem: 'tag-wrap',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'Продажа и обслуживание компьютеров'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                /*------------ Third Tab ------------*/
                {
                    attrs: { id: 'tab-3' },
                    content: [
                        {
                            elem: 'inner',
                            elemMods: { conjuncted: 'bottom' },
                            content: [
                                {
                                    block: 'row',
                                    content: [
                                        {
                                            block: 'col-md-9',
                                            mix: { block: 'col-md-offset-2' },
                                            content: [
                                                {
                                                    block: 'counteragents-finances',
                                                    content: [
                                                        {
                                                            block: 'counteragents-main-indicators',
                                                            content: [
                                                                /* 1 line */
                                                                {
                                                                    elem: 'tr',
                                                                    content: [
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { first : true },
                                                                            content: {
                                                                                elem: 'title-label',
                                                                                content: 'Основные показатели'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { second : true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Выручка (продажи)'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '255 445 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'proportion',
                                                                                    elemMods: { positive: true },
                                                                                    content: '+41,20%'
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { third : true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Чистая прибыль (убыток)'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '-116 175 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'proportion',
                                                                                    elemMods: { negative: true },
                                                                                    content: '-28,13%'
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { fourth : true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Активы (пассивы)'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '292 050 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'proportion',
                                                                                    elemMods: { positive: true },
                                                                                    content: '+120,92%'
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                /* 2 line */
                                                                {
                                                                    elem: 'tr',
                                                                    content: [

                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { first : true },
                                                                            content: {
                                                                                elem: 'label',
                                                                                content: ''
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { second : true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Налог на прибыль (доход)'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '255 445 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { third : true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Выплаты персоналу'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '-116 175 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { fourth : true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Стоимость собственных ОС'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '292 050 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            block: 'counteragents-aux-indicators',
                                                            content: [
                                                                /* 1 Рентабельность */
                                                                {
                                                                    elem: 'tr',
                                                                    content: [
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { first: true },
                                                                            content: {
                                                                                elem: 'indicator',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'indicator-ico',
                                                                                        elemMods: { type: 'profitability' }
                                                                                    },
                                                                                    {
                                                                                        elem: 'indicator-text',
                                                                                        content: 'Рентабельность'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { second: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'По продажам'
                                                                                },
                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Рентабельность продаж – отношение чистой прибыли (убытка) ' +
                                                                                            'к себестоимости продаж (себестоимость + коммерческие + управленческие расходы), ' +
                                                                                            'нормальным считается любое положительное значение, дополнительно' +
                                                                                            ' рекомендуется сравнить со средней рентабельностью по отрасли контрагента.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: '-35,59%'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { third: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'По активам'
                                                                                },
                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Рентабельность активов - отношение чистой прибыли (убытка) к ' +
                                                                                            'совокупным активам, нормальным считается любое положительное значение, ' +
                                                                                            'дополнительно рекомендуется сравнить со средней рентабельностью по отрасли контрагента.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: '-39,78%'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                /* 2 Платежеспособность */
                                                                {
                                                                    elem: 'tr',
                                                                    content: [
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { first: true },
                                                                            content: {
                                                                                elem: 'indicator',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'indicator-ico',
                                                                                        elemMods: { type: 'solvency' }
                                                                                    },
                                                                                    {
                                                                                        elem: 'indicator-text',
                                                                                        content: 'Платёжеспособность'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { second: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Долговая нагрузка'
                                                                                },
                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Уровень долговой нагрузки - отношение совокупной краткосрочной ' +
                                                                                            'кредиторской задолженности к выручке, характеризует зависимость организации ' +
                                                                                            'от краткосрочного внешнего финансирования (достаточность выручки для погашения), ' +
                                                                                            'ее использование в качестве долгового, расчетного центра, нормальным считается ' +
                                                                                            'значение менее 50%, пограничным – от 50 до 100%, критическим – более 100%.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: '37,78%'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { third: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Зависимость от дебиторов'
                                                                                },
                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Уровень зависимости от дебиторов - доля дебиторской задолженности ' +
                                                                                            'в активах организации, характеризует зависимость организации от дебиторов ' +
                                                                                            'или ее использование в качестве расчетного, кредитного центра и т.д., ' +
                                                                                            'нормальным считается значение менее 20%, пограничным – от 20 до 50%, ' +
                                                                                            'критическим – более 50%.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: '4,01%'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                /* 3 Финансовая устойчивость */
                                                                {
                                                                    elem: 'tr',
                                                                    content: [
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { first: true },
                                                                            content: {
                                                                                elem: 'indicator',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'indicator-ico',
                                                                                        elemMods: { type: 'financial-stability' }
                                                                                    },
                                                                                    {
                                                                                        elem: 'indicator-text',
                                                                                        content: 'Финансовая <br>устойчивость'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { second: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Текущая ликвидность'
                                                                                },
                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            //attrs: { style: 'display: block' },
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Уровень текущей ликвидности – отношение оборотных активов к ' +
                                                                                            'краткосрочным пассивам организации, характеризует финансовую устойчивость ' +
                                                                                            'организации (способность погашения как минимум краткосрочных обязательств), ' +
                                                                                            'нормальным в процессах о банкротствах считается значение более 200% ' +
                                                                                            '(Методологические рекомендации по проведению анализа финансово-хозяйственной ' +
                                                                                            'деятельности организаций, утв. Госкомстатом России 28 октября 2002 г.), ' +
                                                                                            'пограничным – от 100 до 200%, критическим – менее 100%.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: '230,87%'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { third: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Автономия'
                                                                                },
                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            attrs: { style: 'color: #a3a3a3' },
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Уровень автономии (обеспеченности собственными оборотными средствами) ' +
                                                                                            '- доля оборотных средств, обеспеченных собственными средствами организации, ' +
                                                                                            'также характеризует финансовую устойчивость организации (финансирование ' +
                                                                                            'текущих операций за счет собственных средств), нормальным в процессах о ' +
                                                                                            'банкротствах считается значение более 10% (Методологические рекомендации по ' +
                                                                                            'проведению анализа финансово-хозяйственной деятельности организаций, утв. ' +
                                                                                            'Госкомстатом России 28 октября 2002 г.), пограничным – от 5 до 10%, критическим – менее 5%.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: '21,61%'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                /* 4 Денежные потоки */
                                                                {
                                                                    elem: 'tr',
                                                                    content: [
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { first: true },
                                                                            content: {
                                                                                elem: 'indicator',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'indicator-ico',
                                                                                        elemMods: { type: 'cash-flow' }
                                                                                    },
                                                                                    {
                                                                                        elem: 'indicator-text',
                                                                                        content: 'Денежные потоки'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { second: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Входящий'
                                                                                },

                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Входящий и исходящий денежные потоки (cash flow) – поступление и выбытие денежных средств по текущим, финансовым и инвестиционным операциям, характеризует платежную активность организации, разница может сигнализировать о вливании (оттоке) ликвидности в организацию.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '417 324 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { third: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Исходящий'
                                                                                },

                                                                                {
                                                                                    elem: 'hint-acceptor',
                                                                                    mix: { block: 'hint-acceptor' },
                                                                                    content: [
                                                                                        '?',
                                                                                        {
                                                                                            block: 'hint',
                                                                                            mix: { block: 'counteragents-aux-indicators', elem: 'hint' },
                                                                                            content: 'Входящий и исходящий денежные потоки (cash flow) – поступление и выбытие денежных средств по текущим, финансовым и инвестиционным операциям, характеризует платежную активность организации, разница может сигнализировать о вливании (оттоке) ликвидности в организацию.'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '409 862 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'td',
                                                                            elemMods: { fourth: true },
                                                                            content: [
                                                                                {
                                                                                    elem: 'label',
                                                                                    content: 'Остаток'
                                                                                },
                                                                                {
                                                                                    elem: 'sum',
                                                                                    content: [
                                                                                        '11 077 000 ',
                                                                                        { block: 'rub', content: 'р' }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
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
                                    block: 'row',
                                    content: {
                                        block: 'line',
                                        mix: { block: 'counteragents-fin-btm-line' }
                                    }
                                },
                                {
                                    block: 'row',
                                    content: [
                                        {
                                            block: 'col-md-8',
                                            mix: { block: 'col-md-offset-2' },
                                            content: [
                                                {
                                                    block: 'special-offers',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            elemMods: { horizontal: true },
                                                            content: 'Спецпредложения'
                                                        },
                                                        {
                                                            block: 'row',
                                                            content: [
                                                                {
                                                                    block: 'col-md-6',
                                                                    content: {
                                                                        block: 'special-offers',
                                                                        elem: 'item',
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mods: { color: 'red' },
                                                                                mix: { block: 'special-offer', elem: 'text' },
                                                                                content: 'На услуги (ИТ-аутсорсинг, ИТ-консалтинг, ' +
                                                                                '1С-внедрение, 1С-поддержка, ' +
                                                                                '1С-консультации, 1С-доработка) компании «Системные технологии».'
                                                                            },
                                                                            {
                                                                                block: 'special-offers',
                                                                                elem: 'tag-wrap',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'IT-консалтинг,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'продажа ПО,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'создание сайтов,&nbsp;'
                                                                                    },
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'интернет-маркетинг'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                },
                                                                {
                                                                    block: 'col-md-6',
                                                                    content: {
                                                                        block: 'special-offers',
                                                                        elem: 'item',
                                                                        content: [
                                                                            {
                                                                                block: 'link',
                                                                                mods: { color: 'red' },
                                                                                mix: { block: 'special-offer', elem: 'text' },
                                                                                content: 'Всем новым клиентам, заключившим договор ' +
                                                                                'на Абонентское обслуживание компьютерной техники ' +
                                                                                'или 1С, компания «Системные технологии» ДАРИТ месяц ' +
                                                                                'БЕСПЛАТНОГО обслуживания.'
                                                                            },
                                                                            {
                                                                                block: 'special-offers',
                                                                                elem: 'tag-wrap',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'tag',
                                                                                        content: 'Продажа и обслуживание компьютеров'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        /* Error */
        {
            attrs: { style: 'display: none' },
            block: 'content-v2',
            content:[
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'row',
                            content: {
                                block: 'col-md-offset-2',
                                mix:  { block: 'col-md-8' },
                                content: {
                                    block: 'align',
                                    mods: { center: true },
                                    content: [
                                        {
                                            block: 'error-msg',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    content: [
                                                        {
                                                            elem: 'pic',
                                                            elemMods: { type: 'red-exclamation' }
                                                        },
                                                        'К сожалению ничего не найдено по запросу «ываыва»'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        },
        /*--- tooltips ---*/
        /* founders */
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-1'},
            content: {
                block: 'counteragent-info',
                elem: 'founders-tooltip',
                content: [
                    {
                        elem: 'founders-tooltip-title',
                        content: 'Мастерская интернет-решений Урядова Евгения',
                    },
                    {
                        elem: 'founders-tooltip-row',
                        content: [
                            {
                                elem: 'founders-tooltip-key',
                                content: 'Доля'
                            },
                            {
                                elem: 'founders-tooltip-val',
                                content: '55 000,00 р.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-2'},
            content: {
                block: 'counteragent-info',
                elem: 'founders-tooltip',
                content: [
                    {
                        elem: 'founders-tooltip-title',
                        content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING LIMITED)',
                    },
                    {
                        elem: 'founders-tooltip-row',
                        content: [
                            {
                                elem: 'founders-tooltip-key',
                                content: 'Доля'
                            },
                            {
                                elem: 'founders-tooltip-val',
                                content: '37 740 000,00 р.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-3'},
            content: {
                block: 'counteragent-info',
                elem: 'founders-tooltip',
                content: [
                    {
                        elem: 'founders-tooltip-title',
                        content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING LIMITED)',
                    },
                    {
                        elem: 'founders-tooltip-row',
                        content: [
                            {
                                elem: 'founders-tooltip-key',
                                content: 'Доля'
                            },
                            {
                                elem: 'founders-tooltip-val',
                                content: '37 740 000,00 р.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-4'},
            content: {
                block: 'counteragent-info',
                elem: 'founders-tooltip',
                content: [
                    {
                        elem: 'founders-tooltip-title',
                        content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING LIMITED)',
                    },
                    {
                        elem: 'founders-tooltip-row',
                        content: [
                            {
                                elem: 'founders-tooltip-key',
                                content: 'Доля'
                            },
                            {
                                elem: 'founders-tooltip-val',
                                content: '37 740 000,00 р.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-5'},
            content: {
                block: 'counteragent-info',
                elem: 'founders-tooltip',
                content: [
                    {
                        elem: 'founders-tooltip-title',
                        content: 'МОЕ ДЕЛО ХОЛДИНГ ЛИМИТЕД (MOE DELO HOLDING LIMITED)',
                    },
                    {
                        elem: 'founders-tooltip-row',
                        content: [
                            {
                                elem: 'founders-tooltip-key',
                                content: 'Доля'
                            },
                            {
                                elem: 'founders-tooltip-val',
                                content: '37 740 000,00 р.'
                            }
                        ]
                    }
                ]
            }
        },
        /* licenses */
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-01'},
            content: [
                /*-------------*/
                {
                    block: 'counteragent-info',
                    elem: 'licenses-tooltip',
                    content: [
                        {
                            elem: 'licenses-tooltip-issued',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Кем выдано: ЦЕНТР ПО ЛИЦЕНЗИРОВАНИЮ, ' +
                                    'СЕРТИФИКАЦИИ И ЗАЩИТЕ ГОСУДАРСТВЕННОЙ ТАЙНЫ'
                                },
                                {
                                    tag: 'p',
                                    content: 'Номер: ЛСЗ0013365 14142Н  БЕССРОЧНО'
                                }
                            ]
                        },
                        {
                            elem: 'licenses-tooltip-divider',
                            mix: { block: 'line' }
                        },
                        {
                            elem: 'licenses-tooltip-activity',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Вид деятельности: РАЗРАБОТКА, ПРОИЗВОДСТВО, ' +
                                    'РАСПРОСТРАНЕНИЕ ШИФРОВАЛЬНЫХ (КРИПТОГРАФИЧЕСКИХ) СРЕДСТВ,' +
                                    ' ИНФОРМАЦИОННЫХ СИСТЕМ И ТЕЛЕКОММУНИКАЦИОННЫХ СИСТЕМ, ' +
                                    'ЗАЩИЩЕННЫХ С ИСПОЛЬЗОВАНИЕМ ШИФРОВАЛЬНЫХ (КРИПТОГРАФИЧЕСКИХ) ' +
                                    'СРЕДСТВ, ВЫПОЛНЕНИЕ РАБОТ, ОКАЗАНИЕ УСЛУГ В ОБЛАСТИ ШИФРОВАНИЯ ' +
                                    'ИНФОРМАЦИИ, ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ ШИФРОВАЛЬНЫХ ' +
                                    '(КРИПТОГРАФИЧЕСКИХ) СРЕДСТВ, ИНФОРМАЦИОННЫХ СИСТЕМ И ' +
                                    'ТЕЛЕКОММУНИКАЦИОННЫХ СИСТЕМ, ЗАЩИЩЕННЫХ С ИСПОЛЬЗОВАНИЕМ ' +
                                    'ШИФРОВАЛЬНЫХ (КРИПТОГРАФИЧЕСКИХ) СРЕДСТВ (ЗА ИСКЛЮЧЕНИЕМ ' +
                                    'СЛУЧАЯ, ЕСЛИ ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ ШИФРОВАЛЬНЫХ ' +
                                    '(КРИПТОГРАФИЧЕСКИХ) СРЕДСТВ, ИНФОРМАЦИОННЫХ СИСТЕМ И ' +
                                    'ТЕЛЕКОММУНИКАЦИОННЫХ СИСТЕМ, ЗАЩИЩЕННЫХ С ИСПОЛЬЗОВАНИЕМ ' +
                                    'ШИФРОВАЛЬНЫХ (КРИПТОГРАФИЧЕСКИХ) СРЕДСТВ, ОСУЩЕСТВЛЯЕТСЯ ' +
                                    'ДЛЯ ОБЕСПЕЧЕНИЯ СОБСТВЕННЫХ НУЖД ЮРИДИЧЕСКОГО ЛИЦА ИЛИ ' +
                                    'ИНДИВИДУАЛЬНОГО ПРЕДПРИНИМАТЕЛЯ)'
                                },
                            ]
                        }
                    ]
                }
                /*-------------*/
            ]
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-02'},
            content: [
                {
                    block: 'counteragent-info',
                    elem: 'licenses-tooltip',
                    content: [
                        {
                            elem: 'licenses-tooltip-issued',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Кем выдано: ЦЕНТР ПО ЛИЦЕНЗИРОВАНИЮ, ' +
                                    'СЕРТИФИКАЦИИ И ЗАЩИТЕ ГОСУДАРСТВЕННОЙ ТАЙНЫ'
                                },
                                {
                                    tag: 'p',
                                    content: 'Номер: ЛСЗ0013365 14142Н  БЕССРОЧНО'
                                }
                            ]
                        },
                        {
                            elem: 'licenses-tooltip-divider',
                            mix: { block: 'line' }
                        },
                        {
                            elem: 'licenses-tooltip-activity',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Вид деятельности: Развал-схождение баранок'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-03'},
            content: [
                {
                    block: 'counteragent-info',
                    elem: 'licenses-tooltip',
                    content: [
                        {
                            elem: 'licenses-tooltip-issued',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Кем выдано: ЦЕНТР ПО ЛИЦЕНЗИРОВАНИЮ, ' +
                                    'СЕРТИФИКАЦИИ И ЗАЩИТЕ ГОСУДАРСТВЕННОЙ ТАЙНЫ'
                                },
                                {
                                    tag: 'p',
                                    content: 'Номер: ЛСЗ0013365 14142Н  БЕССРОЧНО'
                                }
                            ]
                        },
                        {
                            elem: 'licenses-tooltip-divider',
                            mix: { block: 'line' }
                        },
                        {
                            elem: 'licenses-tooltip-activity',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Вид деятельности: Развал-схождение баранок'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-04'},
            content: [
                {
                    block: 'counteragent-info',
                    elem: 'licenses-tooltip',
                    content: [
                        {
                            elem: 'licenses-tooltip-issued',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Кем выдано: ЦЕНТР ПО ЛИЦЕНЗИРОВАНИЮ, ' +
                                    'СЕРТИФИКАЦИИ И ЗАЩИТЕ ГОСУДАРСТВЕННОЙ ТАЙНЫ'
                                },
                                {
                                    tag: 'p',
                                    content: 'Номер: ЛСЗ0013365 14142Н  БЕССРОЧНО'
                                }
                            ]
                        },
                        {
                            elem: 'licenses-tooltip-divider',
                            mix: { block: 'line' }
                        },
                        {
                            elem: 'licenses-tooltip-activity',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Вид деятельности: Развал-схождение баранок'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'js-tooltip',
            attrs: {id: 'tooltip-05'},
            content: [
                {
                    block: 'counteragent-info',
                    elem: 'licenses-tooltip',
                    content: [
                        {
                            elem: 'licenses-tooltip-issued',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Кем выдано: ЦЕНТР ПО ЛИЦЕНЗИРОВАНИЮ, ' +
                                    'СЕРТИФИКАЦИИ И ЗАЩИТЕ ГОСУДАРСТВЕННОЙ ТАЙНЫ'
                                },
                                {
                                    tag: 'p',
                                    content: 'Номер: ЛСЗ0013365 14142Н  БЕССРОЧНО'
                                }
                            ]
                        },
                        {
                            elem: 'licenses-tooltip-divider',
                            mix: { block: 'line' }
                        },
                        {
                            elem: 'licenses-tooltip-activity',
                            content: [
                                {
                                    tag: 'p',
                                    content: 'Вид деятельности: Развал-схождение баранок'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
    ]
});