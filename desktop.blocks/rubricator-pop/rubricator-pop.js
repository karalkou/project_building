modules.define('rubricator-pop', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name,
		{
			/*--- Instance methods ---*/
			onSetMod: {
				'js': {
					'inited': function () {

						var that = this;
						this.BLOCK_CLASS_NAME = '.rubricator-pop';
						this.RUBRICATOR_OUTER_WRAP = '.rubricator-outer-wrap';
						this.RUBRICATOR_BTN_CLASS = '.rubricator-btn';

						this.bindTo(this.elem('close'), 'click', function (e) {
							this._onClose(e);
						});

						// close rubricator-pop if click was not on this block or its children
						var target;
						this.findBlockOutside('page').bindTo('click', function (e) {

							if (e.target !== that.domElem[0]) {

								if ((!$(e.target).closest(that.BLOCK_CLASS_NAME).length)
									&&
									(!$(e.target).closest(that.RUBRICATOR_OUTER_WRAP).find(that.RUBRICATOR_BTN_CLASS).length)
									&&
									(!$(e.target).hasClass('rubricator__link'))
									&&
									(!$(e.target).hasClass('rubricator__header-text')) )
								{

									that._onClose();
								}
							}
						});
					}
				}
			},
			/**
			 * Event close button
			 * @private
			 */
			_onClose: function(e) {
				this.__self.close(this);
			}
		},
		{
			/*--- Static methods ---*/

			/**
			 * Open rubricator-popup
			 * @param self - popup for opening
			 */
			open: function(self) {
				self.setMod('visible');
			},

			/**
			 * Close rubricator-popup
			 * @param self - popup for closing
			 */
			close: function(self) {
				self.delMod('visible');

			}//,

			/*isItemInsideRubricator: function(POP){

				console.log(POP);

				//POP.findBlockOutside('page').bindTo('click', function(e){
				//
				//	var BLOCK_CLASS_NAME = '.rubricator-pop',
				//		RUBRICATOR_OUTER_WRAP = '.rubricator-outer-wrap',
				//		RUBRICATOR_BTN_CLASS = '.rubricator-btn';
				//
				//	if(e.target !== POP.domElem[0] ){
                //
				//		if( (!$(e.target).closest(BLOCK_CLASS_NAME).length)
				//			&&
				//			(!$(e.target).closest(RUBRICATOR_OUTER_WRAP).find(RUBRICATOR_BTN_CLASS).length) ){
                //
				//			POP.close();
				//			console.log('клик не внутри области');
				//		}
                //
				//	}
                //
				//});

			}*/

		}
	));
});
