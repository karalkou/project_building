/**
 * Created by andreiGladkov on 20.08.15.
 */
modules.define('popup-open', ['i-bem__dom', 'jquery', 'popup'], function(provide, BEMDOM, $, popup) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			/**
			 * Init popup-open
			 * @param e - event from click (see static method 'live')
			 */
			init: function(e){
				var i, lengthPopup;

				this._popups = this.findBlockOutside('page').findBlocksInside('popup');
				lengthPopup = this._popups.length;

				for (i = 0; i < lengthPopup; i++) {
					if (this._popups[i].params.popup === this.params.popup) {
						this._currentPopup = this._popups[i];
						break;
					}
				}
				this._onClick(e);
			},

			/**
			 * Open popup in i-bem params
			 * this.params.popup - current popup to open
			 * @param e
			 * @private
			 */
			_onClick: function(e) {
				var self = this;

				popup.open(this._currentPopup);

				/**
				 * Closing Event popup by clicking on background.
				 * It is common for all the popup.
				 */
				$('.popup__background').on('click', function() {

					popup.close(self._currentPopup);
					$('.popup__background').off('click');
				});

				/**
				 * get data from data-id if our block hasMod 'start-yb'
				 */
				if(self.hasMod('start-yb', true)){
					var $selfDom = $(self.domElem),
						companyId = $selfDom.attr('data-Id'),
						$hiddenInput = $selfDom.closest('.page').find('.form_validate_start-your-business').find('input[name="companyId"]');
					if($hiddenInput.length){
						$hiddenInput.attr('value', companyId);
					}else{
						console.log('there is no input[type="hidden"] in the form')
					}
				}
			}
		},
		{
			/* Static methods */
			live: function() {
				this.liveBindTo('click', function(e) {
					e.preventDefault();
					this.init(e);
				});
			}
		}))
});

