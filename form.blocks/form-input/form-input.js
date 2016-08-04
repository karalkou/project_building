modules.define('form-input', ['i-bem__dom', 'jquery'], function(provide, BEMDOM) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
		},
		{
			/* статические методы */
		}));
});

modules.define('form-input', function(provide, formInput) {
	// Доопределяем базовый блок с модификтором _type_tel
	provide(formInput.decl({modName: 'type', modVal: 'tel'}, {
		/*Методы экземпляра*/
		onSetMod: {
			'js': {
				'inited': function() {
					/*Событие нажатия клавиши*/
					this.bindTo('keydown', function(e) {
						this._onKeyDown(e);
					});
					/*Событие отжатия клавиши*/
					this.bindTo('keyup', function(e) {
						this._onKeyUp(e);
					});
					/*Значение input поля*/
					this._value = '';
					/*Логическое значение если текст вставили*/
					this._isPaste = false;
					/*Логическое значение если текст выделили*/
					this._isCtrA = false;
					/*Логическое значение если текст удален*/
					this._isDel = false;
				}
			}
		},
		/**
		 * Телефонная маска для телефонов состоящих из
		 * 10 символов
		 * @param value
		 * @private
		 */
		_maskTel10sign: function(value) {
			var arrValue = value.split(''),
				arrNewValue = [],
				filterArr = [];

			for (var j = 0; j <= arrValue.length - 1; j++) {
				if (arrValue[j] != ' ' && arrValue[j] != '-') {
					filterArr.push(arrValue[j]);
				}
			}

			if (filterArr.length > 10) {
				filterArr.length = 10;
			}

			for (var i = 0; i <= filterArr.length - 1; i++) {
				arrNewValue.push(filterArr[i]);
				switch (i) {
					case 2:
						if (filterArr[i + 1] == ' ') {

						} else if (filterArr.length > 1) {
							arrNewValue.push(' ');
						}
						break;
					case 5:
						if (filterArr[i + 2] == '-') {
						} else if (filterArr.length > 1 && filterArr[i + 2] != '-') {
							arrNewValue.push('-');
						}
						break;
					case 7:
						if (filterArr[i + 3] == '-') {
						} else if (filterArr.length > 1 && filterArr[i + 3] != '-') {
							arrNewValue.push('-');
						}
						break;
				}
			}
			this.domElem[0].value = (arrNewValue.join(''));
		},
		/**
		 * Телефонная маска для телефонов состоящих из
		 * 7 символов
		 * @param value
		 * @private
		 */
		_maskTel7sign: function(value) {
			var arrValue = value.split(''),
				arrNewValue = [],
				filterArr = [];

			for (var j = 0; j <= arrValue.length - 1; j++) {
				if (arrValue[j] != ' ' && arrValue[j] != '-') {
					filterArr.push(arrValue[j]);
				}
			}

			if (filterArr.length > 7) {
				filterArr.length = 7;
			}

			for (var i = 0; i <= filterArr.length - 1; i++) {
				arrNewValue.push(filterArr[i]);
				switch (i) {
					case 2:
						if (filterArr[i + 1] == ' ') {

						} else if (filterArr.length > 1) {
							arrNewValue.push(' ');
						}
						break;
					case 4:
						if (filterArr[i + 2] == '-') {
						} else if (filterArr.length > 1 && filterArr[i + 2] != '-') {
							arrNewValue.push('-');
						}
						break;
					case 7:
						if (filterArr[i + 3] == '-') {
						} else if (filterArr.length > 1 && filterArr[i + 3] != '-') {
							arrNewValue.push('-');
						}
						break;
				}
			}
			this.domElem[0].value = (arrNewValue.join(''));
		},
		_onKeyDown: function(event) {
			var check = (/^[0-9\s-]*$/);

			if (check.test(this.domElem[0].value)) {
				this._value = this.domElem[0].value;
			}

			//PASTE EVENT
			if ((event.ctrlKey && event.keyCode == 86) || (event.metaKey && event.keyCode == 86)) {
				this._isPaste = true;
			} else {
				this._isPaste = false;
			}
			//PICK OUT EVENT
			if ((event.ctrlKey && event.keyCode == 65) || (event.metaKey && event.keyCode == 65)) {
				this._isCtrA = true;
			} else {
				this._isCtrA = false;
			}
			//DEL EVENT
			if (event.keyCode == 8) {
				this._isDel = true;
			} else {
				this._isDel = false;
			}

		},
		_onKeyUp: function(event) {
			var check = (/^[0-9\s-]*$/),
				value = this.domElem[0].value,
				maxLength = this.domElem[0].getAttribute('maxlength');

			if (!check.test(value)) {
				this.domElem[0].value = this._value;
				return false;
			} else if (this._isPaste && !this._isCtrA && !this._isDel) {
				if (maxLength == 9) {
					this._maskTel7sign(value, this.domElem[0]);
				} else {
					this._maskTel10sign(value, this.domElem[0]);
				}
			}

			if (!this._isPaste && !this._isCtrA && !this._isDel) {
				this._value = value;
				if (maxLength == 9) {
					this._maskTel7sign(value, this.domElem[0]);
				} else {
					this._maskTel10sign(value, this.domElem[0]);
				}
			}
		}
	}));
});