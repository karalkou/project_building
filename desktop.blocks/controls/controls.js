/**
 * Created by andreiGladkov on 14.07.15.
 */
modules.define('controls', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* Instance methods */

		},
		{
			/* Statics methods */
		}));
});

modules.define('controls', ['i-bem__dom', 'BEMHTML', 'tabs', 'select-autocomplite', 'list', 'jquery'], function(provide, BEMDOM, BEMHTML, tabs, formSelect, listMonth, $, controls) {
	provide(controls.decl({modName: 'events', modValue: true}, {
		/* Instance methods */
		onSetMod: {
			'js': {
				'inited': function() {
					var date = new Date(),
						currentCityTab = this.findBlockOutside('page').findBlockInside('tabs').elem('btn')[1],
						currentCity = currentCityTab.href;

					/*----------------------------------- Список начальных свойств -----------------------------------*/

					/*Init private properties*/
					/*es5shim not fix it:(*/
					//Object.defineProperty(this, 'ALL_CITY', { value: 'ALL_CITY', writable: false, configurable: false } );
					//Object.defineProperty(this, 'ALL_CITY_VALUE', { value: '0', writable: false, configurable: false } );
					this.ALL_CITY = 'ALL_CITY';
					this.ALL_CITY_VALUE = '0';
					this._blockList = this.findBlockOutside('page').findBlockInside('abstract-section-list');  // внешние блоки, управление контентом которых передано в этот
					this._isRemoveFirstUpload = false;
					this._isMountYearChange = false;
					this._messageBlock = this.findBlockOutside('page').findBlockInside('message');
					this._monthBlock = this.findBlockInside('list').findBlocksInside('link');
					this._mountTitle = this.findBlockOutside('page').findBlockInside('content').elem('title'); // внешние блоки, управление контентом которых передано в этот
					this._selectCity = {};
					this._selectYear = {};
					this._selectCity.currentValue = this.findBlockOutside('page')
						.findBlockInside('tabs').getCurrentValue(); 										  // внешние блоки, управление контентом которых передано в этот
					this._selectYear.currentValue = date.getFullYear();
					this._selectMonth = {};
					this._selectMonth.currentValue = date.getMonth() + 1;
					this._uploadInfo = {};
					this._currentCity = currentCity.slice(currentCity.indexOf('#') + 1);
					this._currentCityName = currentCityTab.innerHTML;
					this._firstUpload = true;
					this._monthArr = [
						'Январь',
						'Февраль',
						'Март',
						'Апрель',
						'Май',
						'Июнь',
						'Июль',
						'Август',
						'Сентябрь',
						'Октябрь',
						'Ноябрь',
						'Декабрь'
					];
					/*--------------------------------------- Список слушателей ---------------------------------------*/
					tabs.on('change', this.cityChange, this);       /* controls слушает значения */
					formSelect.on('change', this.yearChange, this); /* controls слушает значения */
					listMonth.on('change', this.monthChange, this); /* controls слушает значения */
					this._monthOff(this._selectYear.currentValue, this.ALL_CITY);
					this.monthChange(false, true);
					this.filter(false, this._selectMonth.currentValue);

				}
			}
		},
		/**
		 * Change controls
		 * @private
		 */
		_changeControls: function() { /* добавление полученного через аджакс контента */
			var self = this;

			if (this._bemJSON) {
				BEMDOM.append(this._blockList.domElem[0], BEMHTML.apply(this._bemJSON)); /* добавляет абстрактный лист. append используется для того, чтобы по 10 раз не посылать запросы серверу (кэширование) */
				this.filter(false, this._selectMonth.currentValue);
				this.setUpload(this._bemJSON);
			}

			setTimeout(function() {
				self._bemJSON = false;
				self.delMod('change');
			}, 0);
		},
		/**
		 * Event change city
		 * @param e
		 */
		cityChange: function(e) {
			this.filter(e, this._selectMonth.currentValue);
			this._monthOff(this._selectYear.currentValue, this._selectCity.currentValue);
		},
		/**
		 * Event change year
		 * @param e
		 */
		yearChange: function(e) {
			var MONTH_NEW_YEAR = 1, i,
				date = new Date(),
				monthLength = this._monthBlock.length;

			this._selectYear = this._getCurrentValueFilter(e);

			if (this._isNowYear()) {
				this._selectMonth.currentValue = date.getMonth() + 1;
			}

			for (i = 0; i < monthLength; i++) {
				this._monthBlock[i].delMod('selected');
			}

			/*Default new year month = 1
			 * If one month there is no event,
			 * select the month in which it is
			 * */
			try {
				for (i = 0; i < monthLength; i++) {

					if (this._blockList.params[this._selectCity.currentValue].years[this._selectYear.currentValue][i]) {
						this._selectMonth.currentValue = i + 1;
						break;
					}

				}
			} catch (e) {
				console.log(this._selectCity.currentValue + ' or ' + this._selectYear.currentValue + ' does not exist');
			}

			this._isMountYearChange = true;
			this.monthChange();
			this._monthOff(this._selectYear.currentValue, this._selectCity.currentValue);
			this.getEvents(this._selectYear.currentValue, this._selectMonth.currentValue);
		},
		/**
		 * Event change month
		 * @param e
		 */
		monthChange: function(e) {
			var CURRENT_EVENT = ', ближайшие';

			if (e && this._getCurrentValueFilter(e).currentValue) {
				this._selectMonth = this._getCurrentValueFilter(e);
				this._mountTitle.text(this._monthArr[this._selectMonth.currentValue - 1]);
				this._isMountYearChange = true;
				this.getEvents(this._selectYear.currentValue, this._selectMonth.currentValue);
			} else {
				this._monthBlock[this._selectMonth.currentValue - 1].setMod('selected');

				if (this._isNowYear()) {
					this._mountTitle.text(this._monthArr[this._selectMonth.currentValue - 1] + CURRENT_EVENT);
				} else {
					this._mountTitle.text(this._monthArr[this._selectMonth.currentValue - 1]);
				}

			}
		},
		/**
		 * Check current year with selected
		 * @returns {boolean}
		 * @private
		 */
		_isNowYear: function() {
			var date = new Date(),
				year = date.getFullYear();

			if (year == this._selectYear.currentValue) {
				return true;
			} else {
				return false;
			}
		},
		/**
		 * Check uploading event
		 * @param year
		 * @param month
		 * @returns {boolean}
		 */
		isUpload: function(year, month, city) { /* проверка на текущие загруженные данные */
			if (this._uploadInfo[city] && this._uploadInfo[city][year] && this._uploadInfo[city][year][month]) {
				return true;
			}

			return false;
		},
		/**
		 * Set in private property
		 * uploading events
		 * @param bemJSON
		 */
		setUpload: function(bemJSON) { /* установка данных из bemjson */
			var i,
				collectionLength = bemJSON.items.length;

			for (i = 0; i < collectionLength; i++) {

				if (bemJSON.items[i].city != this._currentCity) {
					bemJSON.items[i].city = this.ALL_CITY;
				}

				if (!this._uploadInfo[bemJSON.items[i].city]) {
					this._uploadInfo[bemJSON.items[i].city] = {};
				}

				if (!this._uploadInfo[this.ALL_CITY]) {
					this._uploadInfo[this.ALL_CITY] = {};
				}

				if (!this._uploadInfo[this.ALL_CITY][bemJSON.items[i]['year']]) {
					this._uploadInfo[this.ALL_CITY][bemJSON.items[i]['year']] = {};
				}

				if (!this._uploadInfo[bemJSON.items[i].city][bemJSON.items[i]['year']]) {
					this._uploadInfo[bemJSON.items[i].city][bemJSON.items[i]['year']] = {};
				}

				if (bemJSON.items[i].city == this._currentCity) {
					this._uploadInfo[this.ALL_CITY][bemJSON.items[i]['year']][bemJSON.items[i]['month']] = true;
				}

				this._uploadInfo[bemJSON.items[i].city][bemJSON.items[i]['year']][bemJSON.items[i]['month']] = true;
			}
		},
		/**
		 * AJAX download events
		 * Method write in private property
		 * BEMJSON response on server.
		 */
		getEvents: function(year, month) { /* аджакс запрос событий */
			var self = this;

			if (this.isUpload(year, month, this._selectCity.currentValue)) {
				this.filter(false, month);
				return true;
			}

			/*--- ajax request ---*/
			/*
			 $.ajax({
			 type: 'POST',
			 url: '',                                            // пустая строка, т.к. та же страница
			 data: {type: 'request', year: year, month: month},  // передаваемые данные, в данном случает объект с тремя ключами-значениями
			 dataType: 'json',                                   // тип данных возвращаемых в callback функцию
			 success: function(ajaxRequest) {
				 var bemJSON = {
					 block: 'abstract-section-list',
					 mods: {wrapper: 'none'},
					 items: ajaxRequest
				 };
				 self._bemJSON = bemJSON;
				 self._changeControls();
				 }
			 });*/
			/*--- /ajax request ---*/

			//TODO здесь нужен ajax запрос для получения событий

			/* эмуляция возврата объекта ajaxRequest от сервера после AJAX-запроса */
			var ajaxRequest =
					[
						{
							title: 'Встреча Клуба Клиентов',
							tdFirst: [
								{
									block: 'events',
									elem: 'item-city',
									content: 'Москва'
								},
								{
									block: 'events',
									elem: 'item-date',
									content: '10 июня, 16:00'
								}
							],
							sign: {
								block: 'events',
								elem: 'item-type',
								content: 'Семинар'
							},
							date: '26',
							month: '12',
							year: '2015',
							url: 'sdadasd',
							city: 'CURRENT_CITY'
						},
						{
							title: 'Как найти и удержать клиентов в социальных сетях',
							tdFirst: [
								{
									block: 'events',
									elem: 'item-city',
									content: 'Комсомольск-на-Амуре'
								},
								{
									block: 'events',
									elem: 'item-date',
									content: '10 июня, 16:00'
								}
							],
							content: 'Вы узнаете о том, как наилучшим образом представить свой бизнес в цифровой среде и правильно использовать онлайн-каналы',
							sign: {
								block: 'events',
								elem: 'item-type',
								content: 'Семинар'
							},
							btnContent: 'Регистрация',
							date: '1',
							month: '2',
							year: '2014',
							url: 'sdadasd',
							city: '2'
						},
						{
							title: 'Семинар "Тенденции современного СЕО"',
							tdFirst: [
								{
									block: 'events',
									elem: 'item-city',
									content: 'Вебинар'
								},
								{
									block: 'events',
									elem: 'item-date',
									content: '10 июня, 16:00'
								}
							],
							img: '/img/events/logo/event-logo.jpg',
							sign: {
								block: 'events',
								elem: 'item-type',
								content: 'Вебинар'
							},
							btnContent: 'Регистрация',
							date: '1',
							month: '3',
							year: '2014',
							url: 'sdadasd',
							city: '0'
						},
						{
							title: 'Встреча Клуба Клиентов',
							tdFirst: [
								{
									block: 'events',
									elem: 'item-city',
									content: 'Москва'
								},
								{
									block: 'events',
									elem: 'item-date',
									content: '10 июня, 16:00'
								}
							],
							sign: {
								block: 'events',
								elem: 'item-type',
								content: 'Семинар'
							},
							date: '1',
							month: '4',
							year: '2014',
							url: 'sdadasd',
							city: 'CURRENT_CITY'
						},
						{
							title: 'Как найти и удержать клиентов в социальных сетях',
							tdFirst: [
								{
									block: 'events',
									elem: 'item-city',
									content: 'Комсомольск-на-Амуре'
								},
								{
									block: 'events',
									elem: 'item-date',
									content: '10 июня, 16:00'
								}
							],
							content: 'Вы узнаете о том, как наилучшим образом представить свой бизнес в цифровой среде и правильно использовать онлайн-каналы',
							sign: {
								block: 'events',
								elem: 'item-type',
								content: 'Семинар'
							},
							btnContent: 'Регистрация',
							date: '1',
							month: '5',
							year: '2014',
							url: 'sdadasd',
							city: '2'
						},
						{
							title: 'Семинар "Тенденции современного СЕО"',
							tdFirst: [
								{
									block: 'events',
									elem: 'item-city',
									content: 'Вебинар'
								},
								{
									block: 'events',
									elem: 'item-date',
									content: '10 июня, 16:00'
								}
							],
							img: '/img/events/logo/event-logo.jpg',
							sign: {
								block: 'events',
								elem: 'item-type',
								content: 'Вебинар'
							},
							btnContent: 'Регистрация',
							date: '1',
							month: '1',
							year: '2014',
							url: 'sdadasd',
							city: '0'
						}
					]
				,
				self = this,
				data = JSON.stringify(ajaxRequest),
				bemJSON = {
					block: 'abstract-section-list',
					mods: { wrapper: 'none'},
					items : JSON.parse(data)
				};

			this._bemJSON = bemJSON;
			/*Эмуляция задержки работы сервера^)*/
			setTimeout(function(){self._changeControls();}, 300);

			/* конец эмуляции работы с AJAX */
		},

		_monthOff: function(year, city) { /* если нет мероприятий то дисэйблиться месяц */
			var i, monthLength = this._monthBlock.length;

			try {

				for (i = 0; i < monthLength; i++) {

					if (this._blockList.params[city].years[year][i]) {
						this._monthBlock[i].delMod('disabled');
					} else {
						this._monthBlock[i].setMod('disabled');
					}

				}

			} catch (e) {
				console.log(year + ' or ' + city + ' does not exist');
			}

		},
		/**
		 * search elements
		 * by month, year and city
		 * @param month
		 * @returns {*}
		 * @private
		 */
		_search: function(month) { /* вспомогательный метод */
			var search,
				self = this,
				date = new Date(),
				currentMonth = date.getMonth() + 1,
				currentYear = date.getFullYear();

			if (this._selectCity && this._selectYear && !month) {

				if (this._selectCity.currentValue === this.ALL_CITY) {
					/*Filtering elements by data attribute*/
					search = this._blockList.findElem('item').filter(function() {
						if (currentYear == $(this).attr('data-year')) {
							return (
								$(this).attr('data-year') == self._selectYear.currentValue
								&& $(this).attr('data-month') == currentMonth
							);
						} else {
							return (
								$(this).attr('data-year') == self._selectYear.currentValue
							);
						}
					});
				} else {
					search = this._blockList.findElem('item').filter(function() {
						if (currentYear == $(this).attr('data-year')) {
							return (
								$(this).attr('data-year') == self._selectYear.currentValue
								&& $(this).attr('data-month') == currentMonth
								&& ($(this).attr('data-city') == self._selectCity.currentValue
								|| $(this).attr('data-city') == this.ALL_CITY_VALUE)
							);
						} else {
							return (
								$(this).attr('data-year') == self._selectYear.currentValue
								&& ($(this).attr('data-city') == self._selectCity.currentValue
								|| $(this).attr('data-city') == this.ALL_CITY_VALUE)
							);
						}
					});
				}

			} else if (this._selectCity && this._selectYear && month) {
				/*Filtering elements by data attribute*/
				if (this._selectCity.currentValue === this.ALL_CITY) {
					/*Filtering elements by data attribute*/
					search = this._blockList.findElem('item').filter(function() {
						return (
							$(this).attr('data-year') == self._selectYear.currentValue
							&& $(this).attr('data-month') == month
						);
					});
				} else {
					search = this._blockList.findElem('item').filter(function() {
						return (
							$(this).attr('data-year') == self._selectYear.currentValue
							&& $(this).attr('data-month') == month
							&& ($(this).attr('data-city') == self._selectCity.currentValue
							|| $(this).attr('data-city') == this.ALL_CITY_VALUE)
						);
					});
				}
			}
			/*To use the filter by city to work AJAX*/
			if (!this._firstUpload && !this._isRemoveFirstUpload && !this._isMountYearChange) {

				if (this._selectCity.currentValue === this.ALL_CITY) {
					search = this._blockList.findElem('item');
				} else {
					search = this._blockList.findElem('item').filter(function() {
						return ($(this).attr('data-city') == self._selectCity.currentValue);
					});
				}
			}

			return search;
		},
		/**
		 * filtring list
		 * @param e
		 * @param month
		 */
		filter: function(e, month) { /* сортирует список */
			var target,
				search,
				bollCity = false;

			if (e) {
				target = e.target;

				switch (target.bemBlock) {
					case 'tabs-cities':
						this._selectCity = this._getCurrentValueFilter(e);
						bollCity = true;
						break;
				}

			} else {
				this._selectCity.currentValue = this._selectCity.currentValue || this.ALL_CITY;
			}

			/*Clean the debris after the first download at the date of change*/
			if (!this._firstUpload && !this._isRemoveFirstUpload && this._isMountYearChange) {
				$('.abstract-section-list__item_first-upload').remove();
				this._isRemoveFirstUpload = true;
				this._isMountYearChange = true;
			}

			//Search
			search = this._search(month);
			this._highlightCurrentCity(search, month);


			if (!this._firstUpload) {
				this._blockList.delMod(this._blockList.findElem('item'), 'visible');
				this._blockList.setMod(this._blockList.findElem('item'), 'hidden', true);
				this._blockList.delMod(search, 'hidden');
				this._blockList.setMod(search, 'visible', true);
			}

			this._firstUpload = false;
		},
		/**
		 * Shows tab current city or hides it.
		 * @param elements
		 * @param month
		 * @private
		 */
		_highlightCurrentCity: function(elements, month) {
			var currentCity,
				self = this;

			currentCity = elements.filter(function() {
				return (
					$(this).attr('data-city') == self._currentCity ||
					$(this).attr('data-city') == this.ALL_CITY_VALUE
				);
			});

			if (!currentCity.length) {
				this.findBlockOutside('page').findBlockInside('tabs').setMod('hidden', 'last');
				/*Message show current city - all city*/
				if (this._selectCity.currentValue != this.ALL_CITY) {
					this._mountTitle.html(this._monthArr[month - 1] + '<span class="events__message">' + this._currentCityName + ' событий нет' + '</span>');
				}
			} else {
				this.findBlockOutside('page').findBlockInside('tabs').delMod('hidden');
			}
		},

		/**
		 * Return value and filter name by BEM Event
		 * @param e
		 * @returns {{currentValue: (*|_currentValue|*|currentVal), data-attr: string}}
		 * @private
		 */
		_getCurrentValueFilter: function(e) {
			return {
				currentValue: e.target.getCurrentValue(),
				'data-attr': e.target.getDataAttr()
			}
		}
	}));
});
