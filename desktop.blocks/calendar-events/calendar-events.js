/**
 * Created by andreiGladkov on 10.07.15.
 */
modules.define('calendar-events', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {
	provide(BEMDOM.decl(this.name, {
		//методы экземпляра блока
		onSetMod: {
			'js': {
				'inited': function() {
					this._slides = this.findElem('slide');
				}
			}
		},

		_animateNext: function() {
			console.log(this.findElem('slide'));
		}
	}, {
		animateNext: function() {
			//this._animateNext();
			console.log(this.findElem('slide'));
		}
	}))
});