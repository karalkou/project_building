({
	block: 'page',
	mods: { 'sticky-push': 'none'},
	title: 'Каталог компаний по яндексу',
	head: [
		{
			elem : 'meta',
			attrs : { name : 'viewport', content: 'width=1260' }
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
			url: '/img/background-blur/background-gradient-service-min.jpg'
		},
		{
			block: 'content-v2',
			mods: {type: 'transparent'},
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
										elemMods: { size: 'l' },
										mix: { block: 'offset-v2', mods: { 'margin-bottom': 'x3' } },
										content: [
											{
												tag: 'span',
												content: 'Предложения'
											},
											{
												block: 'link',
												mods: {'whole-popup': true, color: 'white', 'border-style': 'dashed'},
												js: {
													'whole-popup': {
														state: true,
														mods: 'cities-choice'
													}
												},
												url: '/',
												content: 'Москве'
											}
										]
									}
								]
							}
						]
					},
					{
						block: 'row',
						mix: { block: 'offset-v2', mods: { 'margin-bottom': 'x2' } },
						content: [
							{
								block: 'col-md-offset-2',
								mix: {block: 'col-md-3'},
								content: {
									block: 'title-v2',
									elemMods: { size: 'xs' },
									/*mix: { block: 'font', mods: { family: 'robotolight' } },*/
									content: 'Виды деятельности'
								}
							},
							{
								block: 'col-md-6',
								mix: { block: 'offset', mods: { 'padding-left': 'reset' } },
								content: [
									{
										block: 'tabs',
										js: { links: true },
										mods: { color: 'white-opaque' },
										tabs: [
											{
												elem: 'item',
												mods: { enabled: true },
												url: 'http://club.alfabank.ru/discounts/',
												content: 'Основные'
											},
											{
												elem: 'item',
												mods: {selected: true},
												url: '#',
												content: 'Все',
											}
										]
									}
								]
							}
						]
					},
					{
						block: 'category-rubricator',
						js: { action: 'something', seffolder: 'catalog-company-yandex-activities.html' },
						gridWidth: 'col-md-8',
						gridOffset: 'col-md-offset-2',
						outlineMods: {},
						header: {
							visibilityMods: {},
							headerContent: [
								//{
								//	text: 'Автомобили',
								//	textMods: { color: 'white' },
								//}
							],
							error: 'При загрузке рубрик возникла ошибка'
						},
						columns: [
							{
								content: {
									elem: 'list',
									list: [
										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'yes', selected: true }, attrs: { id: '123' }, content: 'Автомобили' },
											{ elem: 'count', content: '42' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '124' }, content: 'Безопасность' },
											{ elem: 'count', content: '23' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '125' }, content: 'Бизнес' },
											{ elem: 'count', content: '95' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '126' }, content: 'Государство' },
											{ elem: 'count', content: '55' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '127' }, content: 'Компьютеры' },
											{ elem: 'count', content: '45' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Интернет' },
											{ elem: 'count', content: '20' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Красота' },
											{ elem: 'count', content: '12' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Культура и искусство' },
											{ elem: 'count', content: '21' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Медицина' },
											{ elem: 'count', content: '71' } ] }
									]
								}
							},
							{
								content: {
									elem: 'list',
									list: [
										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Наука и образование' },
											{ elem: 'count', content: '5' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Общество' },
											{ elem: 'count', content: '11' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Отдых и туризм' },
											{ elem: 'count', content: '32' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Производство' },
											{ elem: 'count', content: '32' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Поставки' },
											{ elem: 'count', content: '63' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Реклама и полиграфия' },
											{ elem: 'count', content: '77' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Семья и дети' },
											{ elem: 'count', content: '32' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Домашние животные' },
											{ elem: 'count', content: '12' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Спорт' },
											{ elem: 'count', content: '33' } ] }
									]
								}
							},
							{
								content: {
									elem: 'list',
									list: [
										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Справочные системы' },
											{ elem: 'count', content: '50' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Строительство' },
											{ elem: 'count', content: '45' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Телекоммуникации и связь' },
											{ elem: 'count', content: '13' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Товары для дома и дачи' },
											{ elem: 'count', content: '15' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Транспорт и перевозки' },
											{ elem: 'count', content: '28' } ] },

										{ content: [
											{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: '123' }, content: 'Услуги' },
											{ elem: 'count', content: '28' } ] }
									]
								}
							}
						]
					},
					{
						content: '<div class="row category-list-wrap category-list-wrap_first-load i-bem category-list-wrap_js_inited"> <div class="col-md-12"> <div class="category-list i-bem category-list_js_inited"> <div class="category-list__item row" data-id="1"> <div class="category-list__logo-wrap col-md-2"> <div class="category-list__logo"><img class="img" alt="image" title="image" src="/img/catalog-category/ecwid.png"></div></div><div class="category-list__space-center col-md-8"> <div class="category-list__overtitle">сервис для бизнеса</div><a class="link link_color_white category-list__title" style="display: inline-block" href="http://ru.wix.com/">Современный конструктор интернет магазинов</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Что-то там конструирующее агенство</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Булочная широкого профиля</a> <p class="category-list__text">Любой человек, не обладающий навыками программирования, может легко создать онлайн-магазин и разместить его на своем сайте</p></div><div class="category-list__space-right col-md-2"> <div class="badge category-list__icon"><i class="ico ico_type_percent"></i> <div class="badge__content">Скидка <br>20%</div></div></div></div><div class="category-list__item row" data-id="2"> <div class="category-list__logo-wrap col-md-2"> <div class="category-list__logo"><img class="img" alt="image" title="image" src="/img/catalog-category/bitrix.png"></div></div><div class="category-list__space-center col-md-8"> <div class="category-list__overtitle">сервис для бизнеса</div><a class="link link_color_white category-list__title" style="display: inline-block" href="#">12 инструментов для организации работы</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Что-то там конструирующее агенство</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Булочная широкого профиля</a> <p class="category-list__text">Полный комплект инструментов для управления продажами, задачами, проектами — всеми рабочими процессами внутри компании.</p></div><div class="category-list__space-right col-md-2"> <div class="badge category-list__icon"><i class="ico ico_type_percent"></i> <div class="badge__content">Скидка <br>10%</div></div></div></div><div class="category-list__item row" data-id="3"> <div class="category-list__logo-wrap col-md-2"> <div class="category-list__logo"><img class="img" alt="image" title="image" src="/img/catalog-category/kontur.png"></div></div><div class="category-list__space-center col-md-8"> <div class="category-list__overtitle">сервис для бизнеса</div><a class="link link_color_white category-list__title" style="display: inline-block" href="#">Современный конструктор интернет магазинов</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Что-то там конструирующее агенство</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Булочная широкого профиля</a> <p class="category-list__text">Любой человек, не обладающий навыками программирования, может легко создать онлайн-магазин и разместить его на своем сайте</p></div><div class="category-list__space-right col-md-2"> <div class="badge category-list__icon"><i class="ico ico_type_rub"></i> <div class="badge__content">Выгода <br>5000 Руб.</div></div></div></div><div class="category-list__item row" data-id="4"> <div class="category-list__rating col-md-2"> <div class="rating"> <div class="rating__item rating__item_shaded"></div><div class="rating__item rating__item_shaded"></div><div class="rating__item rating__item_shaded"></div><div class="rating__item rating__item_shaded"></div><div class="rating__item"></div></div></div><div class="category-list__space-center col-md-8"> <div class="category-list__overtitle"></div><a class="link link_color_white category-list__title" style="display: inline-block" href="#">Скидка 10% на программное обеспечение и решение</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Что-то там конструирующее агенство</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Булочная широкого профиля</a> <p class="category-list__text">СП ИНТЕГР компания является официальным представителем на территории Удмуртии и Пермского края ведущих компаний-разработчиков.</p></div><div class="category-list__space-right col-md-2"> <div class="badge category-list__icon"><i class="ico ico_type_partner"></i> <div class="badge__content">Партнёр</div></div></div></div><div class="category-list__item row" data-id="5"> <div class="category-list__rating col-md-2"> <div class="rating"> <div class="rating__item rating__item_shaded"></div><div class="rating__item rating__item_shaded"></div><div class="rating__item"></div><div class="rating__item"></div><div class="rating__item"></div></div></div><div class="category-list__space-center col-md-8"> <div class="category-list__overtitle"></div><a class="link link_color_white category-list__title" style="display: inline-block" href="#">Все на Warcraft!!!</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Что-то там конструирующее агенство</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Булочная широкого профиля</a> <p class="category-list__text">Digital-агентство IsWin. Профессиональные услуги по созданию, продвижению и сопровождению сайтов, разработке фирменного стиля.</p></div><div class="category-list__space-right col-md-2"> <div class="badge category-list__icon"><i class="ico ico_type_partner"></i> <div class="badge__content">Партнёр</div></div></div></div><div class="category-list__item row" data-id="6"> <div class="category-list__empty-wrap col-md-2"></div><div class="category-list__space-center col-md-8"> <div class="category-list__overtitle"></div><a class="link link_color_white category-list__title" style="display: inline-block" href="#">Fleep Art — разработка сайтов</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Что-то там конструирующее агенство</a> <a class="link link_color_white category-list__title" style="display: none" href="#">Булочная широкого профиля</a> <p class="category-list__text">Digital агентство "Fleep Art" - создает сайты, разрабатывает дизайн, оптимизирует и продвигает сайты в поисковых системах более 5 лет. </p><ul class="category-list__activities-wrap"> <li class="category-list__activity"><span class="category-list__activity-inner">IT-консалтинг </span></li><li class="category-list__activity"><span class="category-list__activity-inner">Продажа ПО </span></li><li class="category-list__activity"><span class="category-list__activity-inner">Создание сайтов</span></li></ul> </div><div class="category-list__space-right col-md-2"> <div class="badge category-list__icon"><i class="ico"></i> <div class="badge__content"></div></div></div></div></div><div class="category-list-more category-list-more_visible i-bem" data-bem="{&quot;category-list-more&quot;:{}}" data-page-num="10"><a class="category-list-more__btn link link_color_white link_border-style_dashed" href="#">Показать ещё</a></div></div></div>'
					}
				]
			}
		},
		{
			block: 'content-v2',
			mods: { type: 'white-opaque' },
			content: [
				{
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
											mods: { size: 'm' },
											mix: [
												{ block: 'font', mods: { family: 'robotolight' } },
												{ block: 'offset-v2', mods: { 'margin-bottom': 'x3' }, }
											],
											content: 'Как получить скидки у партнеров банка?'
										},
										{
											block: 'list',
											mods: { 'type-style': 'line', color: 'white', 'padding-bottom': 's', margin: 'medium' },
											list: [
												{ content: 'Выберите компанию-партнера и cделайте заказ.' },
												{ content: 'При заключении договора сообщите, что вы клиент Альфа-Банка.' },
												{ content: 'Оплатите заказ со счета в Альфа-Банке и получите скидку*.' }
											]
										},
										{
											tag: 'p',
											block: 'offset-v2',
											mods: { 'margin-bottom': 'x3' },
											content: 'Мы уже отобрали для вас надежных партнеров, оказывающих услуги ' +
											'для бизнеса. Выбирая компании для включения в , мы учитывали не ' +
											'только стоимость и спектр предоставляемых услуг, но и размер, историю ' +
											'и репутацию предприятия, а также опирались на отзывы наших клиентов.'
										},
										{
											tag: 'p',
											block: 'offset-v2',
											mods: { 'margin-bottom': 'x3' },
											content: 'Все клиенты Альфа-Банка автоматически становятся участниками ' +
											'программы и могут пользоваться скидками сразу после открытия счета.'
										},
										{
											block: 'title-v2',
											mods: { size: 'm' },
											mix: [
												{ block: 'font', mods: { family: 'robotolight' } },
												{ block: 'offset-v2', mods: { 'margin-bottom': 'x3' }, }
											],
											content: 'Как предложить свои скидки?'
										},
										{
											block: 'link',
											mods: { color: 'white' },
											content: 'Правила для партнёров'
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
			block: 'preloader-overlay',
			content: [
				{
					block: 'img',
					mix: { block: 'preloader-overlay', elem: 'rotate'},
					url: '/img/preloader/5A1.png'
				}
			]
		}
	]
});