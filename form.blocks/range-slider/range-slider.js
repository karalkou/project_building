/**
 * Created by andreiGladkov on 13.07.15.
 */
modules.define('range-slider', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* Instance methods */
			onSetMod: {
				'js': {
					'inited': function() {
						/*init protected property*/
						this._target = undefined;
						this._handleCoords = undefined;
						this._shiftX = undefined;
						this._rangeSliderCoords = undefined;
						this._rangeArr = [];
						/*init range to slider*/
						var widthRangeSlider = this.domElem[0].offsetWidth + this.elem('handle')[0].offsetWidth,
							range = Math.ceil(widthRangeSlider / this.params.parts),
							increment = -(this.elem('handle')[0].offsetWidth / 2);

						for (var i = 0; i < this.params.parts; i++) {
							this._rangeArr[i] = increment;
							increment += range;
							if (i == this.params.parts - 1) {
								this._rangeArr[i] = widthRangeSlider - (this.elem('handle')[0].offsetWidth * 3 / 2);
							}
						}
						/*init default value*/
						this.elem('handle')[0].style.left = this._rangeArr[this.params.value - 1] + 'px';
						this.elem('input')[0].value = this.params.range[this.params.value];
						this.setCurrentValue(this.params.value);
						this.bemBlock = 'range-slider-' + this.params.type;
						this._dataAttr = 'data-' + this.params.type;
						this.emit('change');
						/*init events*/
						this.bindTo(this.elem('handle'), 'mousedown', function(e) {
							this._mouseDown(e);
						});

						this.bindTo(this.elem('handle'), 'dragstart', function(e) {
							this._dragStart(e);
						});
					}
				}
			},
			/**
			 * Events mousedown
			 * @param mouse event
			 * @returns {boolean}
			 * @private
			 */
			_mouseDown: function(e) {
				var self = this;
				this._target = e.target || e.srcElement;
				this._handleCoords = this._getCoords(this._target);
				this._shiftX = e.pageX - this._handleCoords.left;
				this._rangeSliderCoords = this._getCoords(this.domElem[0]);
				/*init event change slider*/
				document.onmousemove = function(e) {
					self._mouseMove(e);
				};
				/*init event abort change slider*/
				document.onmouseup = function(e) {
					self._mouseUp(e);
				};
				/*deselect mouse*/
				this._preventSelection(document);

				return false;
			},
			/**
			 * This event stops the slider
			 * @param e
			 * @private
			 */
			_mouseUp: function(e) {
				document.onmousemove = document.onmouseup = null;
			},
			/**
			 * Cancel drag and drop event
			 * @param e
			 * @returns {boolean}
			 * @private
			 */
			_dragStart: function(e) {
				return false;
			},
			/**
			 * Return coords elem
			 * @param elem
			 * @returns {{top: number, left: number}}
			 * @private
			 */
			_getCoords: function(elem) {
				var box = elem.getBoundingClientRect();

				return {
					top: box.top + pageYOffset,
					left: box.left + pageXOffset
				};
			},
			/**
			 * Event change slider
			 * @param e
			 * @private
			 */
			_mouseMove: function(e) {
				var mouseCoordsX = e.pageX - this._shiftX - this._rangeSliderCoords.left,
					rightEdgeCoordsSlider = this._rangeArr[this._rangeArr.length - 1],
					currentVal = this.currentVal;

				if (mouseCoordsX < 0) {
					mouseCoordsX = this._rangeArr[0];
				}

				if (mouseCoordsX > 0) {
					for (var i = 1; i < this._rangeArr.length; i++) {
						if (mouseCoordsX < this._rangeArr[i] && mouseCoordsX > this._rangeArr[i - 1]) {
							mouseCoordsX = this._rangeArr[i - 1];
							this.elem('input')[0].value = this.params.range[i];
							currentVal = i;
						}
					}
				}

				if (mouseCoordsX > rightEdgeCoordsSlider) {
					mouseCoordsX = rightEdgeCoordsSlider;
					this.elem('input')[0].value = this.params.range[this._rangeArr.length];
					currentVal = this._rangeArr.length;
				}

				this._target.style.left = mouseCoordsX + 'px';
				this.setCurrentValue(currentVal);
				this.emit('change');
			},
			/**
			 *  Set changed value
			 * @param value
			 * @private
			 */
			setCurrentValue: function(value) {
				this.currentVal = value;
			},

			/**
			 * Return changed value
			 * @returns {*|currentVal}
			 */
			getCurrentValue: function() {
				return this.currentVal;
			},
			/**
			 * Return data attribute
			 * filter name
			 * @returns {string}
			 */
			getDataAttr: function() {
				return this._dataAttr;
			},

			_preventSelection: function(element) {
				var preventSelection = false;

				function addHandler(element, event, handler) {
					if (element.attachEvent)
						element.attachEvent('on' + event, handler);
					else if (element.addEventListener)
						element.addEventListener(event, handler, false);
				}

				function removeSelection() {
					if (window.getSelection) {
						window.getSelection().removeAllRanges();
					}
					else if (document.selection && document.selection.clear)
						document.selection.clear();
				}

				function killCtrlA(event) {
					var event = event || window.event;

					var key = event.keyCode || event.which;
					if (event.ctrlKey && key == 'A'.charCodeAt(0))  // 'A'.charCodeAt(0) можно заменить на 65
					{
						removeSelection();

						if (event.preventDefault)
							event.preventDefault();
						else
							event.returnValue = false;
					}
				}

				// не даем выделять текст мышкой
				addHandler(element, 'mousemove', function() {
					if (preventSelection)
						removeSelection();
				});
				addHandler(element, 'mousedown', function(event) {
					var event = event || window.event;
					var sender = event.target || event.srcElement;
					preventSelection = sender;
				});

				// борем dblclick
				// если вешать функцию не на событие dblclick, можно избежать
				// временное выделение текста в некоторых браузерах
				addHandler(element, 'mouseup', function() {
					if (preventSelection)
						removeSelection();
					preventSelection = false;
				});
			}
		},
		{
			/* Static methods */
		}));
});