/**
 * Created by andreiGladkov on 25.08.15.
 */
modules.define('select-autocomplite', ['i-bem__dom', 'BEMHTML', 'form-select', 'jquery'], function(provide, BEMDOM, BEMHTML, formSelect, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* Instance methods */
			onSetMod: {
				'js': {
					/**
					 * Don't create this.emit('change');
					 * on init block;
					 * First upload events don't change!
					 */
					'inited': function() {

						/*Init custom styles for select */
						var self = this;
						/*Init private properties*/
						this._virtualSelect = this.findBlockInside('select-autocomplite-list');
						this._documentClick = documentClick;
						this._documentKeyDown = documentKeyDown;

						this.bindTo('click', function(e) {
							this._onClick(e);
						});

						this.bindTo(this._virtualSelect.elem('item'), 'click', function(e) {
							this._pseudoOptionSelect(e);
						});

						this._changeSelect(false, true);
						this._tempVal = this.getCurrentValue();

						/**
						 * Function for keyDown event on document
						 * @param e
						 */
						function documentKeyDown(e) {
							switch (e.keyCode) {
								case 38:
									currentCheck('up');
									break;
								case 40:
									currentCheck('down');
									break;
								case 13:
									self._changeSelect(self._tempVal);
									break;
							}


							if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13) {
								if (event.preventDefault) {
									event.preventDefault();
								}
								event.returnValue = false;
							}
						}

						/**
						 * Additional function for keyDown
						 * @param direction
						 */
						function currentCheck(direction) {
							var option = self._virtualSelect.elem('item'),
								optionLength = option.length;

							$('.select-autocomplite-list__item_selected_hover').removeClass('select-autocomplite-list__item_selected_hover');

							for (var i = 0; i < optionLength; i++) {

								if (option[i].getAttribute('data-val') == self._tempVal) {
									try {

										if (direction === 'up') {
											self._tempVal = option[i].previousSibling.getAttribute('data-val');
											$(option[i].previousSibling).addClass('select-autocomplite-list__item_selected_hover');
										} else if (direction === 'down') {
											self._tempVal = option[i].nextSibling.getAttribute('data-val');
											$(option[i].nextSibling).addClass('select-autocomplite-list__item_selected_hover');
										}

									} catch (e) {

										if (direction === 'up') {
											self._tempVal = option[optionLength - 1].getAttribute('data-val');
											$('[data-val=' + self._tempVal + ']').addClass('select-autocomplite-list__item_selected_hover');
										} else if (direction === 'down') {
											self._tempVal = option[0].getAttribute('data-val');
											$(option[0]).addClass('select-autocomplite-list__item_selected_hover');
										}

									}

									break;
								}
							}
						}

						/**
						 * Function for event click in document
						 * @param e
						 */
						function documentClick(e) {
							var target = e.target || e.srcElement; /* e.srcElement - is target for IE */

							while (target !== self.domElem[0]) {
								target = target.parentNode;
								if (target === document.body) {
									break;
								}
							}

							if (target !== self.domElem[0]) {
								self._closePseudoSelect();
							}
						}
					}
				}
			},
			/**
			 * Close pseudo select
			 * @private
			 */
			_closePseudoSelect: function() {
				this._virtualSelect.setMod('hidden', true);
				document.body.removeEventListener('click', this._documentClick);
				document.body.removeEventListener('keydown', this._documentKeyDown);
			},
			/**
			 * Opening pseudo select
			 * @private
			 */
			_openPseudoSelect: function() {
				this._positionCalc();
				$('.select-autocomplite-list__item_selected_hover').removeClass('select-autocomplite-list__item_selected_hover');
				document.body.addEventListener('click', this._documentClick);
				document.body.addEventListener('keydown', this._documentKeyDown);
				this._tempVal = this.getCurrentValue();
				this._virtualSelect.delMod('hidden');

			},
			/**
			 * Calculate position option
			 * @private
			 */
			_positionCalc: function() {
				var option = this._virtualSelect.elem('item'), i,
					HEIGHT_OPTION_ITEM = 36, bottom,
					BORDER_INPUT = 1,
					optionLength = option.length;

				for (i = 0; i < optionLength; i++) {

					if (option[i].getAttribute('data-val') == this.getCurrentValue()) {
						switch (i + 1) {
							case optionLength:
								bottom = 0;
								break;
							default:
								bottom = optionLength - (i + 1);
								break;
						}
						this._virtualSelect.domElem[0].style.bottom = -HEIGHT_OPTION_ITEM * (bottom) - BORDER_INPUT + 'px';
						break;
					}

				}
			},
			/**
			 * Event click on change select
			 * @param e - event
			 * @private
			 */
			_onClick: function(e) {
				var target = e.target || e.srcElement;

				while (target !== this.domElem[0]) {

					target = target.parentNode;

					if (target == this._virtualSelect.domElem[0]) {


						break;
					}
				}

				if (target === this.domElem[0]) {
					this._openPseudoSelect();
				}
			},
			/**
			 * Event select pseudo option
			 * @param e- event
			 * @private
			 */
			_pseudoOptionSelect: function(e) {
				var target = e.target || e.srcElement,
					value = target.getAttribute('data-val');

				this._changeSelect(value);
			},
			/**
			 * Change select by value or selected elements
			 * @param value
			 * @private
			 */
			_changeSelect: function(value, init) {
				var select = this.findBlockInside('select-autocomplite-real'), // реальный селект
					lengthSelect = select.elem('item').length, i;			   // кол-во элементов внутри реального селекта

				this._virtualSelect.delMod(this._virtualSelect.elem('item'), 'selected'); /* удаление класса .select-autocomplite-list__item_selected
																							 у элемента из показывающегося списка */

				for (i = 0; i < lengthSelect; i++) {

					if (select.elem('item')[i].getAttribute('selected')) {                // если у реального элемента есть атрибут selected
						value = value || select.elem('item')[i].value;					  // то value равно value этого элемента
						//console.log('value: ', value);
						select.elem('item')[i].removeAttribute('selected');               // и удаляем у данного элемента атрибут selected
					}

					if (select.elem('item')[i].value == value) {
						select.elem('item')[i].setAttribute('selected', 'selected');

						//console.log("наш реальный элемент    - select.elem('item')[i]             ", (select.elem('item')[i]));
						//console.log("наш виртуальный элемент - this._virtualSelect.elem('item')[i]", (this._virtualSelect.elem('item')[i]));

						$(this._virtualSelect.elem('item')[i]).addClass('select-autocomplite-list__item_selected'); /* ставим selected у соответствующего
																													   элемента показываемого списка */


						this.findBlockInside('select-autocomplite-input').elem('value').text(select.elem('item')[i].innerHTML); /* записываем в элемент input
																																   //значение из реального элемента */
					}

				}

				this._closePseudoSelect();

				this.setCurrentValue(value);
				if (!init) { 			// этот if всегда работает, т.к. init здесь = undefined !!! ?????
					this.emit('change');
					console.log( 'change' );
					console.log('this: ', this.domElem);
					// временная мера для страницы плиток с перезагрузкой
					// проверка на наличие модификатора select-autocomplite_tiles
					if(this.hasMod('tiles', true)){
						this.setWindowLocation(value);
					}
				}
			},
			/**
			 * Set current value tabs
			 * in private property
			 * @param value
			 */
			setCurrentValue: function(value) {
				this._currentValue = value;
			},
			/**
			 * Return current value tabs
			 * in private property
			 * @returns {*|_currentValue}
			 */
			getCurrentValue: function() {
				return this._currentValue;
			},
			/**
			 * Return data attribute
			 * filter name
			 * @returns {string}
			 */
			getDataAttr: function() {
				return this._dataAttr;
			},
			/**
			 * Replace current location
			 * with location with company id
			 * on page with certificates
			 */
			setWindowLocation: function(value){
				window.location.pathname = value;
			}
		},
		{}));
});