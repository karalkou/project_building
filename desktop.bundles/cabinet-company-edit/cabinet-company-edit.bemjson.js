({
	block: 'page',
	mods: { 'sticky-push': 'none'},
	title: 'Редактирование компании',
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
			url: '/img/background-blur/background-gradient-cabinet.jpg'
		},
		{
			block: 'content',
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
										block: 'article',
										elem: 'title',
										mods: {color: 'white', 'certificate-page': true},
										content: 'Личный кабинет'
									},
									{
										block: 'list',
										mods: { inline: true, link: 'pseudo', margin: 'certificate' },
										mix: { block: 'fonts', mods:{ size: '17'}},
										js: true,
										list: [
											{
												url: '#1',
												content: 'Профиль'
											},
											{
												url: '#2',
												content: 'Сертификаты'
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
					content: [
						{
							block: 'row',
							content: {
								block: 'col-md-offset-2',
								mix: {block: 'col-md-8'},
								content: [
									{
										block: 'content',
										elem: 'title',
										elemMods: { size: 'ms' },
										mix: { block: 'offset', mods: { 'margin-bottom': '30' } },
										content: 'Страница о компании'
									},
									{
										block: 'content',
										elem: 'title',
										elemMods: { size: 'xs', font: 'regular' },
										mix: { block: 'offset', mods: { 'margin-top': 'reset' } },
										content: 'ООО «Компания с большим большим большим названием»'
									}
								]
							}
						},
						{
							block: 'row',
							content: {
								block: 'line',
								mix: { block: 'offset', mods: { 'margin-bottom': '15' } },
							}
						},
						{
							block: 'row',
							content: {
								block: 'col-md-9',
								mix: { block: 'col-md-offset-2' },
								content: {
									block: 'message-v2',
									mods: { success: true },
									pic: true,
									content: [
										{
											tag: 'p',
											content: 'Данные сохранены'
										}
									]
								}
							}
						},
						{
							block: 'row',
							content: {
								block: 'col-md-9',
								mix: { block: 'col-md-offset-2' },
								content: {
									block: 'message-v2',
									mods: { attention: true },
									pic: true,
									content: [
										{
											tag: 'p',
											content: 'Ожидает модерации'
										}
									]
								}
							}
						},
						{
							block: 'row',
							content: {
								block: 'col-md-9',
								mix: { block: 'col-md-offset-2' },
								content: {
									block: 'message-v2',
									mods: { danger: true },
									pic: true,
									content: [
										{
											tag: 'p',
											content: 'Несоответствие введённых данных'
										}
									]
								}
							}
						},
						{
							block: 'row',
							content: {
								block: 'col-md-9',
								mix: { block: 'col-md-offset-2' },
								content: {
									block: 'message-v2',
									mods: { danger: true },
									pic: true,
									content: [
										{
											tag: 'p',
											content: 'Страница не прошла модерацию'
										},
										{
											tag: 'p',
											content: 'Комментарий модератора: Вы ввели не корректные данные. ' +
											'Убедительная просьба исправить все замечания и отправить страницу на ' +
											'модерацию  '
										}
									]
								}
							}
						},
						{
							block: 'form',
							action: '#',
							js: true,
							method: 'POST',
							mods: {size: 'base', validate: 'company-edit', width: 'auto' },
							mix:  [{ block: 'row'}, { block: 'js-moderator-company-edit' }],
							content: [
								{
									block: 'col-md-9',
									mix: { block: 'col-md-offset-2' },
									content: [
										{
											block: 'content',
											elem: 'title',
											elemMods: { size: 'xs', countable: true },
											mix: { block: 'offset', mods: { 'margin-top': 'medium-plus' } },
											count: '1.',
											content: 'Контактная информация'
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: true,
											item: {
												label: 'Город, где открыт расчётный счёт',
												field: {
													block: 'form-select',
													name: 'city',
													js: true,
													search: true,
													item: [
														{
															content: 'Москва',
														},
														{
															content: 'Питер',
														},
														{
															content: 'Волгоград',
														},
														{
															content: 'Волжский',
														},
														{
															content: 'Саратов',
														},
														{
															content: 'Курск',
														}
													]
												},
												error: 'Укажите город',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: true,
											item: {
												label: 'Телефон',
												field: {
													block: 'form-input',
													name: 'tel_1',
													js: true,
													val: '1111111111'
												},
												error: 'Вы не указали телефон',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											item: {
												label: '',
												field: {
													block: 'form-input',
													mix: { block: 'ignore' },
													name: 'tel_2',
													js: true
												},
												error: 'Вы не указали телефон',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											item: {
												label: '',
												field: {
													block: 'form-input',
													mix: { block: 'ignore' },
													name: 'tel_3',
													js: true
												},
												error: 'Вы не указали телефон',
												mix: [{block: 'col-md-4'}],
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: true,
											item: {
												label: 'Электронная почта',
												field: {
													block: 'form-input',
													name: 'mail',
													val: '1@m.ru'
												},
												error: 'Формат example@mail.ru',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											item: {
												label: 'Адрес сайта',
												field: {
													block: 'form-input',
													mix: { block: 'ignore' },
													name: 'site',
												},
												error: 'Формат http://example.ru',
											}
										},
										{
											block: 'content',
											elem: 'title',
											elemMods: { size: 'xs', countable: true },
											count: '2.',
											content: 'О компании'
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: true,
											item: {
												label: 'Название компании (публичное)',
												field: {
													block: 'form-input',
													name: 'name',
													val: '1'
												},
												error: 'Вы не указали название компании',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: true,
											item: {
												label: 'Краткое описание',
												field: {
													block: 'form-input',
													name: 'description',
													//val: '1'
												},
												error: 'Вы не указали краткое описание',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: false,
											item: {
												label: 'Логотип',
												labelHint: 'Формат: jpeg, png.<br>Разрешение: не менее 100pх*100px<br>' +
												'Размер файла не больше 10 мб.',
												field: {
													block: 'form-img',
													placeMods: {},
													btnMods  : { color: 'green-transparent' },
													type: 'logo'
												},
												error: 'Вы не указали краткое описание',
											}
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: false,
											item: {
												label: 'Фоновое изображение',
												labelHint: 'Формат: jpeg, png.<br>Разрешение: не менее 1024pх*800px<br>' +
												'Размер файла не больше 10 мб.',
												field: {
													block: 'form-img',
													placeMods: {},
													btnMods  : { color: 'green-transparent' },
													type: 'bg'
												},
												error: 'Вы не указали краткое описание',
											}
										},
										{
											block: 'form',
											elem: 'label',
											elemMods: { type: 'required' },
											content: 'Описание компании'
										},
										{
											block: 'form-textarea-listened',
											mix: [
												{ block: 'font', mods: { family: 'robotoitalic' } },
												{ block: 'offset', mods: { 'margin-top': 'reset' } }
											],
											elem: 'error',
											content: 'Это поле должно быть заполнено'
										},
										{
											block: 'bitrix-custom-field',
											mix: { block: 'offset', mods: {'margin-top': 's-half','margin-bottom': 's-double'} },
											attrs : { style : 'height: 200px; background: lightyellow; border: 1px solid gray;' },
										}
									]
								},
								{
									block: 'line',
									mix: [
										{ block: 'clearfix' },
										{ block: 'offset', mods: { 'margin-bottom': 'large' } }
									]
								},
								{
									block: 'col-md-9',
									mix: { block: 'col-md-offset-2' },
									content: [
										{
											block: 'row',
											content: [
												{
													block: 'col-md-4',
													content: {
														block: 'form',
														elem: 'label',
														content: 'Комментарий для модератора<br>(не публикуется)'
													}
												},
												{
													block: 'col-md-8',
													content: {
														block: 'form-textarea',
														mix: { block: 'offset', mods: { 'margin-bottom': 'extra-large' } },
														placeholder: 'Напишите здесь ваш комментарий, или любую ' +
														'другую информацию для модератора.'
													}
												}
											]
										}
									]
								},
								{
									block: 'col-md-9',
									mix: { block: 'col-md-offset-2' },
									content: [
										{
											block: 'row',
											content: [
												{
													block: 'col-md-12',
													content: [
														{
															block: 'pull-right',
															content: [
																{
																	block: 'link',
																	mix: { block: 'offset', mods: { 'margin-right': 'm' } },
																	mods: {color: 'red'},
																	url: '#',
																	content: 'Отмена'
																},
																/*{
																	block: 'form-pseudoSubmit',
																	mods: { 'cabinet-company-edit': true },
																	js: true,
																	mix: [
																		{ block: 'btn', mods: { size: 'm', color: 'green' } },
																		{ block: 'popup-open', js: { popup: 'attention' } },
																	],
																	attrs: { style: 'display: none;' },
																	content: 'Сохранить'
																},*/
																{
																	block: 'form-submit',
																	mix: [
																		{ block: 'btn', mods: { size: 'm', color: 'green' } },
																		{ block: 'js-submit' },
																		{ block: 'moderator-btn', js: { popup: 'attention' }, }
																	],
																	content: 'Сохранить'
																},
																{
																	block: 'btn',
																	mods: { size: 'm', color: 'red-transparent' },
																	mix: { block: 'js-submit-error' },
																	attrs: { style: 'display: none;' },
																	content: 'Не все обязательные поля заполнены'
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
		/* popup */
		{
			block: 'popup',
			js: { popup: 'attention' },
			attrs: { id: 'attention-pop' },
			content: {
				block: 'row',
				content: [
					{
						block: 'col-md-offset-2',
						mix: [ { block: 'col-md-9' } ],
						content: [
							{
								block: 'content',
								elem: 'title',
								elemMods: { size: 'xs', font: 'light' },
								content: 'Подтверждение'
							},
							{
								block: 'content',
								elem: 'manager',
								content: [
									{
										tag: 'p',
										content: [
											{
												tag: '',
												content: 'Вы отредактировали информацию о партнере.'
											},
											{
												tag: 'br'
											},
											{
												tag: '',
												content: 'После сохранения указанная вами информация будет мгновенно ' +
												'опубликована на сайте под вашу ответственность.'
											},
										]
									}
								]
							},
							{
								block: 'btn',
								mods: { color: 'red-transparent' },
								mix: { block: 'moderator-response-btn' },
								content: 'Cохранить'
							}
						]
					}
				]
			}
		},
	]
});