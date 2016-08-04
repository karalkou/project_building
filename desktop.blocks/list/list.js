modules.define('list', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */

		},
		{
			/* статические методы */
		}));
});

/**
 * modName : 'link', modValue: 'pseudo'
 */
modules.define('list', ['jquery'], function(provide, $, list){
	provide(list.decl({ modName : 'link', modValue: 'pseudo' },{
		//методы экземпляра блока
		onSetMod:{
			'js': {
				'inited': function(){
					this._currentValue = '';
					this.bemBlock = 'list-' + this.params.type;
					this._dataAttr = 'data-' + this.params.type;
					this.emit('change');

					if($(this.elem('link', 'selected')[0]).length){
						this.setCurrentValue($(this.elem('link', 'selected')[0]).attr('href'));
					}

					this.bindTo(this.elem('link'), 'click', function(e){
						var eventTarget = e.target || e.srcElement;
						if($(eventTarget).hasClass('link_disabled')){
							e.preventDefault();
							return false;
						}
						this.itemOnclick(e);
					});

				}
			}
		},


		/**
		 * Onclick event
		 * @param e
		 */
		itemOnclick: function(e){
			var eventTarget = e.target || e.srcElement,
				href = $(eventTarget).attr('href'),
				i, linkLength = this.findBlocksInside('link').length;

			for(i = 0; i < linkLength; i++){
				this.findBlocksInside('link')[i].delMod('selected');
				if(eventTarget == this.findBlocksInside('link')[i].domElem[0]){
					this.findBlocksInside('link')[i].setMod('selected');
				}
			}

			this.setCurrentValue(href);
			this.emit('change');
		},

		/**
		 * Set current value list item
		 * in private property
		 * @param value
		 */
		setCurrentValue: function(value){
			this._currentValue = value.slice(1);
		},
		/**
		 * Return current value tabs
		 * in private property
		 * @returns {*|_currentValue}
		 */
		getCurrentValue: function(){
			return this._currentValue;
		},
		/**
		 * Return data attribute
		 * filter name
		 * @returns {string}
		 */
		getDataAttr: function(){
			return this._dataAttr;
		}
	}))
});

/**
 * modName : 'type', modValue: 'nav'
 */
modules.define('list', ['jquery'], function(provide, $, list){
	provide(list.decl({ modName : 'type', modValue: 'nav' },{
		//методы экземпляра блока
		onSetMod:{
			'js': {
				'inited': function(){
					if(this.params.nav === 'filter'){
						var self = this;

						/* this loop is made to add functionality and not to break old behavior */
						if(this.params['listed-name'] ){
							this._listedElems = this.findBlockOutside('page').findBlockInside(this.params['listed-name']);
						}else{
							this._listedElems = this.findBlockOutside('page').findBlockInside('products');
						}

						//console.log( this._listedElems.domElem );

						window.onhashchange = function(){
							self._hashChange();
						};

						this._hashChange();
					}
				}
			}
		},

		/**
		 * Highlight item menu
		 * @param hash
		 * @private
		 */
		_highlightMenu: function(hash){
			var i, elemLength = this.elem('item').length,
				$link = this.findBlocksInside('link');

			for(i = 0; i < elemLength; i++){
				var link = $link[i].domElem[0].href,
					href = link.slice(link.indexOf('#')),
					reg = new RegExp(hash);

				if(hash && reg.test(href)){
					$link[i].setMod('selected');
				}else{
					$link[i].delMod('selected');
				}
			}
		},
		/**
		 * Filtering elements
		 * @param filterId
		 */
		filtering : function(filterId){
			var $listElem = this._listedElems.elem('item'),
				duration = 400, arrAttr, stateShow, reg,
				lengthList = $listElem.length;

			if(filterId === 'all'){
				filterId = '';
			}

			for(var i = 0; i < lengthList; i++ ){
				arrAttr = $($listElem[i]).attr('data-filter').split(',');
				reg = new RegExp(filterId);
				stateShow = false;


				for(var j = 0; j <= arrAttr.length; j++){
					if(reg.test(arrAttr[j])){
						$($listElem[i]).slideDown(duration);
						$($listElem[i]).fadeTo(duration, 1);
						stateShow = true;
						break;
					}
				}

				if(!stateShow){
					if($($listElem[i]).css('display') != 'none'){
						$($listElem[i]).fadeTo(duration, 0);
						$($listElem[i]).slideUp(duration);
					}
				}
			}
		},
		/**
		 * Event hachchange
		 * @private
		 */
		_hashChange: function(){
			var hash = window.location.hash.replace(/[^.0-9]/g,''); /* take every sign, but not numeral and replace it with empty space */

			if(!hash){
				hash = window.location.hash;
				hash = hash.slice(hash.indexOf('#')+1);
			}

			if(hash){
				this.filtering(hash);
				this._highlightMenu(hash);
			}
		}
	}))
});