/**
 * Created by andreiGladkov on 08.07.15.
 */
modules.define('events-list', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $){
	provide(BEMDOM.decl({
		//методы экземпляра блока
		onSetMod:{
			'js': {
				'inited': function(){

					this.bindTo( this.findElem('calendar-next'), 'click', function(e){
						this._onClick(e)
					});

					this.bindTo( this.findElem('calendar-prev'), 'click', function(e){
						this._onClick(e)
					});
				}
			}
		},

		_onClick: function(e){

		}
	}))
});
modules.define('events-list', function(provide, eventsList){
	provide(eventsList.decl({ modName : 'container', modVal : true },{
		//методы экземпляра блока
		onSetMod:{
			'js': {
				'inited': function(){
					var request =
						{
							block: 'events-list',
							items: [
								{
									title: 'Санкт-Петербург',
									subtitle: '16 июля 2015, 15:30',
									content: 'Метод Мариновича. История на миллиард',
									count: '98',
									img: '/img/events/logo/event-logo.jpg',
									date: '20',
									month: '8'
								},
								{
									title: 'Санкт-Петербург',
									subtitle: '16 июля 2015, 15:30',
									content: 'Метод Мариновича. История на миллиард',
									count: '98',
									img: '/img/events/logo/event-logo.jpg',
									date: '20',
									month: '8'
								},
								{
									title: 'Санкт-Петербург',
									subtitle: '16 июля 2015, 15:30',
									content: 'Метод Мариновича. История на миллиард',
									count: '98',
									img: '/img/events/logo/event-logo.jpg',
									date: '20',
									month: '8'
								}
							]
						},

						eventsList = this.domElem;

					//BEMDOM.update(eventsList, BEMHTML.apply(request));

					console.log(BEMHTML.apply(request));
				}
			}
		},

		_onClick: function(e){

		}
	}))
});

