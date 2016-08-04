modules.define('headliner-content', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {

						this.domElem[0].style.marginTop = - this.domElem[0].offsetHeight/2 + 'px';

					}
				}
			}
		},
		{
			/* статические методы */
		}));
});