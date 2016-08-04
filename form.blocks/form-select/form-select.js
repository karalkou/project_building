/**
 * Created by andreiGladkov on 15.07.15.
 */

modules.define('form-select', ['i-bem__dom', 'BEMHTML', 'jquery__jQueryFormStyler'], function(provide, BEMDOM, BEMHTML, $) {
	provide(BEMDOM.decl(this.name,
		{
			/* Instance methods */
			onSetMod: {
				'js': {
					'inited': function() {
						/*Init custom styles for select */
						//if set select on current instance use $(this.domElem[0]).styler();
						if (!this.__self.init) {
							//Set select styler on all select
							$('select').styler();
							this.__self.init = true;
						}

						/*Init private properties*/
						this._currentValue = false;
						this._dataAttr = 'data-' + this.params.type;
						/*Init public properties*/
						this.bemBlock = 'form-select-' + this.params.type;
						/*Init BEM events*/
						this.setCurrentValue(this.domElem[0].value);

						this.bindTo('change', function(e) {
							this.onChange(e);
						});
						//this.emit('change');
					}
				}
			},
			onChange: function(e) {
				var target = e.target || e.srcElement,
					value = target.value;

				this.setCurrentValue(value);
				this.emit('change');
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
			}
		},
		{
			init: false
		}));
});

modules.define('form-select', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $, formSelect) {
	provide(formSelect.decl({modName: 'autocomplete', modValue: true},
		{
			/* Instance methods */
			onSetMod: {
				'js': {
					'inited': function() {
						/*Init custom styles for select */
						var htmlSelect = BEMHTML.apply(this.params.bemJSON);
						BEMDOM.append(this.domElem[0].parentNode, htmlSelect);
						this.domElem[0].parentNode.removeChild(this.domElem[0]);
					}
				}
			}
		},
		{}));
});