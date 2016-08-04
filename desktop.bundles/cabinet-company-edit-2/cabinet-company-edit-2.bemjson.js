({
	block: 'page',
	mods: { 'sticky-push': 'none'},
	title: 'Редактирование компании 2',
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
										content: 'Настройки для привлечения клиентов'
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
							mods: {size: 'base',  validate: 'company-edit-2', width: 'auto' },
							mix:  { block: 'row' },
							content: [
								{
									block: 'col-md-9',
									mix: { block: 'col-md-offset-2' },
									content: [
										/* next input is for backend */
										{
											block: 'input',
											mix : { block: 'ignore' },
											type: 'hidden',
											name: 'sessid',
											val: '555',
											attrs: { id: 'sessid' }
										},
										/* 1. */
										{
											block: 'content',
											elem: 'title',
											elemMods: { size: 'xs', countable: true },
											mix: { block: 'offset', mods: { 'margin-top': 'medium-plus' } },
											count: '1.',
											content: 'Укажите, чем занимается ваша организация'
										},
										{
											block: 'form-item-v2',
											mix: { block: 'row' },
											content: [
												{
													block: 'col-md-4',
													content: [
														{
															block: 'form',
															elem: 'label',
															content: 'Виды деятельности'
														},
														{
															block: 'form',
															elem: 'label-hint',
															content: 'Не более трёх видов'
														}
													]
												},
												{
													block: 'col-md-4',
													content: {
														block: 'rubricator-outer-wrap',
														content: [
															{
																block: 'chosen-type',
																js: { limit: '3', action: 'search-activity', inputName: 'business' },
																content: [
																	{
																		block: 'input',
																		mix: [ { block: 'chosen-type', elem: 'auxiliary'}, { block: 'ignore' }],
																		type: 'hidden',
																		val: 'business'
																	},
																	{
																		block: 'form-input',
																		mods: { offset: true },
																		mix: [ { block: 'chosen-type', elem: 'field' }, { block: 'ignore' } ],
																		placeholder: 'Автомобили'
																	},
																	{
																		elem: 'items-wrap',
																		content: [
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			},
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			},
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			}
																		]
																	}
																]
															},
															{
																block: 'btn',
																mods: { size: 'm', 'full-width': true, color: 'green-transparent', disabled: true },
																mix: { block: 'rubricator-btn', js: true },
																content: [
																	{
																		tag: '',
																		content: 'Выбрать из рубрикатора'
																	}
																]
															},
															{
																block: 'rubricator-pop',
																content: {
																	block: 'rubricator',
																	mods: { 'first-load': true },
																	js: { action: 'children-activity' },
																	headerContent: [
																		{
																			text: 'Рубрикатор видов деятельности',
																			textMods: { 'is-link': 'no' }
																		}
																	],
																	error: 'При загрузке рубрик возникла ошибка',
																	columns: [
																		{
																			content: {
																				elem: 'list',
																				list: [
																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '0123' }, content: 'Автомобили' },
																						{ elem: 'count', content: '42' } ] },

																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '124' }, content: 'Безопасность' },
																						{ elem: 'count', content: '23' } ] },

																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'yes', selected: true }, attrs: { id: '125' }, content: 'Бизнес' },
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
																						{ elem: 'count', content: '28' } ] },

																					//{ content: [
																					//	{ elem: 'link' , elemMods: { 'is-leaf': 'yes', selected: true }, attrs: { id: 'all' }, content: 'Все города' },
																					//	{ elem: 'count', content: '' } ] }
																				]
																			}
																		}
																	],
																	specialBtn: {
																		content: 'Все категории',
																		type: 'all'
																	}
																}
															}
														]
													}
												},
                                                {
                                                    block: 'col-md-4',
                                                    content: {
                                                        block: 'chosen-wrap',
                                                        content: {
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
																			content: 'Все города'
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
																		name     : 'temp[]',
																		value    : 'all',
																		'data-id': 'all'
																	}
																}
															]
														}
                                                    }
                                                }
											]
										},
										/* 2. */
										{
											block: 'content',
											elem: 'title',
											elemMods: { size: 'xs', countable: true },
											count: '2.',
											content: 'Выберите города, в которых вы работаете'
										},
										{
											block: 'form-item-v2',
											mix: { block: 'row' },
											content: [
												{
													block: 'col-md-4',
													content: [
														{
															block: 'form',
															elem: 'label',
															content: 'Города'
														},
														{
															block: 'form',
															elem: 'label-hint',
															content: ''
														}
													]
												},
												{
													block: 'col-md-4',
													content: {
														block: 'rubricator-outer-wrap',
														content: [
															{
																block: 'chosen-type',
																js: { limit: '3', action: 'search-activity', inputName: 'cities' },
																content: [
																	{
																		block: 'input',
																		mix: [{ block: 'chosen-type', elem: 'auxiliary'}, { block: 'ignore' }],
																		type: 'hidden',
																		val: 'business'
																	},
																	{
																		block: 'form-input',
																		mods: { offset: true },
																		mix: [{ block: 'chosen-type', elem: 'field' }, { block: 'ignore' }],
																		placeholder: 'Грозный'
																	},
																	{
																		elem: 'items-wrap',
																		content: [
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			},
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			},
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			}
																		]
																	}
																]
															},
															{
																block: 'btn',
																mods: { size: 'm', 'full-width': true, color: 'green-transparent' },
																mix: { block: 'rubricator-btn', js: true },
																content: [
																	{
																		tag: '',
																		content: 'Выбрать из рубрикатора'
																	}
																]
															},
															{
																block: 'rubricator-pop',
																content: {
																	block: 'rubricator',
																	js: { action: 'children-activity' },
																	headerContent: [
																		{
																			text: 'Рубрикатор видов деятельности',
																			id: '0505',
																			textMods: { 'is-link': 'yes' }
																		}
																	],
																	error: 'При загрузке рубрик возникла ошибка',
																	columns: [
																		{
																			content: {
																				elem: 'list',
																				list: [
																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '123' }, content: 'Автомобили' },
																						{ elem: 'count', content: '42' } ] },

																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'yes' }, attrs: { id: '124' }, content: 'Безопасность' },
																						{ elem: 'count', content: '23' } ] },

																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'yes', selected: true }, attrs: { id: '125' }, content: 'Бизнес' },
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
																						{ elem: 'count', content: '87' } ] }
																				]
																			}
																		}
																	],

																	specialBtn: {
																		content: 'Все категории',
																		type: 'all'
																	}
																}
															}
														]
													}
												},
												{
													block: 'col-md-4',
													content: {
														block: 'chosen-wrap',
														content: ''
													}
												}
											]
										},
										/* 3. */
										{
											block: 'address-wrap',
											js: true,
											mods: { main: true },
											content: [
												{
													block: 'content',
													elem: 'title',
													elemMods: { size: 'xs', countable: true },
													count: '3.',
													content: 'Укажите адрес вашего офиса'
												},
												{
													block: 'form-item-v2',
													mix: { block: 'row' },
													content: [
														{
															block: 'col-md-4',
															content: {
																block: 'form',
																elem: 'label',
																content: 'Город'
															}
														},
														{
															block: 'col-md-4',
															content: {
																block: 'form-input',
																mix: [ { block: 'ignore' } ],
																name: 'region[]'
															}
														}
													]
												},
												{
													block: 'form-item-v2',
													mods: { unerrored: true },
													mix: { block: 'row' },
													content: [
														{
															block: 'col-md-4',
															content: {
																block: 'form',
																elem: 'label',
																content: 'Улица'
															}
														},
														{
															block: 'col-md-4',
															content: {
																block: 'form-input',
																mix: [ { block: 'ignore' } ],
																name: 'street[]'
															}
														}
													]
												},
												{
													block: 'form-item-v2',
													mods: { unerrored: true },
													mix: { block: 'row' },
													content: [
														{
															block: 'col-md-4',
															content: {
																block: 'form',
																elem: 'label',
																content: 'Дом/Корпус'
															}
														},
														{
															block: 'col-md-4',
															content: {
																block: 'form-input',
																mix: [ { block: 'ignore' } ],
																name: 'building[]'
															}
														}
													]
												},
												{
													block: 'form-item-v2',
													mods: { unerrored: true },
													mix: { block: 'row' },
													content: [
														{
															block: 'col-md-4',
															content: {
																block: 'form',
																elem: 'label',
																content: 'Офис'
															}
														},
														{
															block: 'col-md-4',
															content: {
																block: 'form-input',
																mix: [ { block: 'ignore' } ],
																name: 'office[]'
															}
														}
													]
												},
												{
													block: 'form-item-v2',
													mods: { unerrored: true },
													mix: { block: 'row' },
													content: [
														{
															block: 'col-md-1',
															mix: { block: 'col-md-offset-3' },
															content: {
																block: 'address-wrap',
																elem: 'btnDel',
																elemMods: { hidden: true },
																mix: [
																	{ block: 'link', mods: { color: 'red' } },
																	{ block: 'pull-right' }
																],
																content: 'Удалить'
															}
														},
														{
															block: 'col-md-4',
															content: {
																block: 'btn',
																mods: { size: 'm', 'full-width': true, color: 'green-transparent' },
																mix: { block: 'address-wrap', elem: 'btnAdd' },
																content: 'Добавить ещё один адрес'
															}
														}
													]
												}
											]
										},
										/* place for additional form append */
										{
											block: 'address-wrap-add',
											content: ''
										},
										/* 4. */
										{
											block: 'content',
											elem: 'title',
											elemMods: { size: 'xs', countable: true },
											count: '4.',
											content: 'Кто ваши клиенты и чем они занимаются'
										},
										{
											block: 'form-item-v2',
											mix: { block: 'row' },
											content: [
												{
													block: 'col-md-4',
													content: [
														{
															block: 'form',
															elem: 'label',
															content: 'Компании'
														},
														{
															block: 'form',
															elem: 'label-hint',
															content: 'Не более десяти видов'
														}
													]
												},
												{
													block: 'col-md-4',
													content: {
														block: 'rubricator-outer-wrap',
														content: [
															{
																block: 'chosen-type',
																js: { limit: '3', action: 'search-activity', inputName: 'cities' },
																content: [
																	{
																		block: 'input',
																		mix: [{ block: 'chosen-type', elem: 'auxiliary'}, { block: 'ignore' }],
																		type: 'hidden',
																		val: 'business'
																	},
																	{
																		block: 'form-input',
																		mods: { offset: true },
																		mix: [{ block: 'chosen-type', elem: 'field' }, { block: 'ignore' }],
																		placeholder: 'Грозный'
																	},
																	{
																		elem: 'items-wrap',
																		content: [
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			},
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			},
																			{
																				elem: 'item',
																				content: {
																					block: 'link',
																					js: false,
																					mods: { pseudo: true, color: 'black-red' },
																					url: '#',
																					content: 'trololo'
																				}
																			}
																		]
																	}
																]
															},
															{
																block: 'btn',
																mods: { size: 'm', 'full-width': true, color: 'green-transparent' },
																mix: { block: 'rubricator-btn', js: true },
																content: [
																	{
																		tag: '',
																		content: 'Выбрать из рубрикатора'
																	}
																]
															},
															{
																block: 'rubricator-pop',
																content: {
																	block: 'rubricator',
																	js: { action: 'children-activity' },
																	headerContent: [
																		{
																			text: 'Рубрикатор видов деятельности',
																			id: '0505',
																			textMods: { 'is-link': 'yes' }
																		}
																	],
																	error: 'При загрузке рубрик возникла ошибка',
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
																						{ elem: 'count', content: '87' } ] },

																					{ content: [
																						{ elem: 'link' , elemMods: { 'is-leaf': 'no' }, attrs: { id: 'all' }, content: 'All' },
																						{ elem: 'count', content: '' } ] }
																				]
																			}
																		}
																	]/*,

																	specialBtn: {
																		content: 'Все категории',
																		type: 'current'
																	}*/
																}
															}
														]
													}
												},
												{
													block: 'col-md-4',
													content: {
														block: 'chosen-wrap',
														content: ''
													}
												}
											]
										},
										{
											block: 'form-item-v2',
											mods: { unerrored: true },
											mix: { block: 'row' },
											content: [
												{
													block: 'col-md-4',
													content: {
														block: 'form',
														elem: 'label',
														content: 'Физические лица'
													}
												},
												{
													block: 'col-md-4',
													content: {
														block: 'checkbox',
														js: true,
														content: 'Да'
													}
												}
											]
										},
										/* 5. */
										{
											block: 'content',
											elem: 'title',
											elemMods: { size: 'xs', countable: true },
											count: '5.',
											content: 'Уведомления о заказах'
										},
										{
											block: 'form-item-v2',
											mods: { unerrored: true },
											mix: { block: 'row' },
											content: [
												{
													block: 'col-md-4',
													content: {
														block: 'form',
														elem: 'label',
														content: 'Получать заказы с сайта на email'
													}
												},
												{
													block: 'col-md-4',
													content: {
														block: 'checkbox',
														js: true,
														mix: { block: 'ue-mail-receive' },
														content: 'Да'
													}
												}
											]
										},
										{
											block: 'form-item-v2',
											mods: { templated: true },
											required: false,
											item: {
												label: 'Email для сообщений о заказах',
												field: {
													block: 'form-input',
													disabled: { disabled: true },
													mix: { block: 'ignore' },
													name: 'mail',
												},
												error: 'Формат example@mail.ru',
											}
										},
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
											block: 'form-item-v2',
											mods: { unerrored: true },
											mix: { block: 'row' },
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
																	mods: { color: 'red' },
																	url: '#',
																	content: 'Отмена'
																},
																{
																	block: 'form-submit',
																	mix: [
																		{ block: 'btn', mods: { size: 'm', color: 'green' } },
																		{ block: 'js-submit' }
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
		}
	]
});