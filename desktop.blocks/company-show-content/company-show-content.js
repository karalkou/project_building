modules.define('company-show-content', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod:{
				'js': {
					'inited': function(){
						var that = this,
							$companyShowContent,
							$companyShowContentInner,
							$companyShowContentFirst,
							$companyShowContentFinal,
							resultHeight = 0;

						that.$innerEl = that.findElem('inner');
						that.firstHeight = that.$innerEl.get(0).offsetHeight;

						that.$innerEl.css({ height: that.firstHeight + 'px' });

						// 'click'
						that.bindTo('click', function(e){
							if(e.target != e.currentTarget){
								$companyShowContent = $(e.target).closest('.company-show-content');
							}else{
								$companyShowContent = $(e.target);
							}

							if( !$companyShowContent.hasClass('company-show-content_done') ){
								$companyShowContentInner = $companyShowContent.find('.company-show-content__inner');
								$companyShowContentFirst = $companyShowContentInner.find('.company-show-content__first-show');
								$companyShowContentFinal = $companyShowContentInner.find('.company-show-content__final-show');
								$companyShowContentFinalItems = $companyShowContentFinal.find('.company-show-content__final-show-item');

								for(var i = 0; i < $companyShowContentFinalItems.length; i++){
									resultHeight += $companyShowContentFinalItems[i].offsetHeight;
								}

								$companyShowContentFirst.css({ opacity: '0' });
								$companyShowContentInner.css({ height: resultHeight + 'px' });
								$companyShowContentFirst.css({ display: 'none' });
								/* В этом месте лучше придумать, как отловить конец css-анимации */
								setTimeout( function(){
									$companyShowContentFinal.css({ opacity: '1', 'z-index': '1' })
								}, 300);

								$companyShowContent.addClass('company-show-content_done')
							}

						});
					}
				}
			}

		},
		{
			/* статические методы */
		}));
});