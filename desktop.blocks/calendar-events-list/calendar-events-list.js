/**
 * Created by andreiGladkov on 08.07.15.
 */
modules.define('calendar-events-list', ['i-bem__dom', 'BEMHTML', 'jquery', 'calendar-events'], function(provide, BEMDOM, BEMHTML, $, eventsList) {
	provide(BEMDOM.decl(this.name, {
		//методы экземпляра блока
		onSetMod: {
			'js': {
				'inited': function() {
					var content = this.findBlockOutside('content');

					this._calendarEvents = content.findBlockInside('calendar-events');
					this._calendarEventsSlides = this._calendarEvents.elem('slide');
					this._$slide = $('.calendar-events__slide').not('.calendar-events__slide_hidden');
					this._$nextSlide = this._$slide.next();
					this._$prevSlide = this._$slide.prev();
					this._animateTopVal = this._$slide.height();
					this._calendarSlider = this.elem('slider');
					this._calendarSlides = this.elem('slide');
					this._$calendarElemSlide = this._calendarSlides.not('.calendar-events-list__slide_hidden');
					this._$calendarAnimateTopVal = this._$calendarElemSlide.height();
					this._$calendarPrevElemSlide = this._$calendarElemSlide.prev();
					this._$calendarNextElemSlide = this._$calendarElemSlide.next();

					if (!this._$slide.hasClass('.calendar-events__slide_active')) {
						this._$slide.addClass('calendar-events__slide_active');
					}

					if (!this._$calendarElemSlide.hasClass('.calendar-events-list__slide_active')) {
						this._$calendarElemSlide.addClass('calendar-events-list__slide_active');
					}

					this.bindTo(this.findElem('next'), 'click', function(e) {
						this._onClickNext(e)
					});

					this.bindTo(this.findElem('prev'), 'click', function(e) {
						this._onClickPrev(e)
					});
				}
			}
		},
		_onClickNext: function() {

			var self = this;
			self._$nextSlide.removeClass('calendar-events__slide_hidden');
			self._$calendarNextElemSlide.removeClass('calendar-events-list__slide_hidden');

			self._$prevSlide.css('position', 'static');
			self._$calendarPrevElemSlide.css('position', 'static');

			self._$slide.stop().animate({
				marginTop: -self._animateTopVal
			}, 500, function() {
				self._$slide.css('position', 'absolute');
				self._$slide.removeClass('calendar-events__slide_active');
				self._$slide.addClass('calendar-events__slide_hidden');
				self._$prevSlide = self._$slide;
				self._$slide = self._$nextSlide;
				self._$nextSlide = self._$slide.next();
				if (!self._$slide.hasClass('.calendar-events__slide_active')) {
					self._$slide.addClass('calendar-events__slide_active');
				}
				self._animateTopVal = self._$slide.height();
			});

			self._$calendarElemSlide.stop().animate({
				marginTop: -self._$calendarAnimateTopVal
			}, 500, function() {
				self._$calendarElemSlide.css('position', 'absolute');
				self._$calendarElemSlide.removeClass('calendar-events-list__slide_active');
				self._$calendarElemSlide.addClass('calendar-events-list__slide_hidden');
				self._$calendarPrevElemSlide = self._$calendarElemSlide;
				self._$calendarElemSlide = self._$calendarNextElemSlide;
				self._$calendarNextElemSlide = self._$calendarElemSlide.next();
				if (!self._$calendarElemSlide.hasClass('.calendar-events-list__slide_active')) {
					self._$calendarElemSlide.addClass('calendar-events-list__slide_active');
				}
				self._$calendarAnimateTopVal = self._$calendarElemSlide.height();
			});


			var ajaxRequest = {
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
				eventsList = {
					block: 'calendar-events',
					elem: 'slide',
					mods: {hidden: true},
					items: ajaxRequest.items

				},
				claendarEventsListSlide = {
					block: 'calendar-events-list',
					elem: 'slide',
					mods: {hidden: true},
					items: ajaxRequest.items
				};

			BEMDOM.append(this._calendarEvents.domElem[0], BEMHTML.apply(eventsList));
			BEMDOM.append(this._calendarSlider[0], BEMHTML.apply(claendarEventsListSlide));
		},
		_onClickPrev: function() {

			var self = this;

			self._$prevSlide.css('margin-top', -self._animateTopVal);
			self._$calendarPrevElemSlide.css('margin-top', -self._$calendarAnimateTopVal);
			self._$prevSlide.removeClass('calendar-events__slide_hidden');
			self._$calendarPrevElemSlide.removeClass('calendar-events-list__slide_hidden');

			self._$nextSlide.css('position', 'static');
			self._$calendarNextElemSlide.css('position', 'static');


			self._$prevSlide.stop().animate({
				marginTop: 0
			}, 500, function() {
				self._$slide.css('position', 'absolute');
				self._$slide.removeClass('calendar-events__slide_active');
				self._$slide.addClass('calendar-events__slide_hidden');
				self._$nextSlide = self._$slide;
				self._$slide = self._$prevSlide;
				self._$prevSlide = self._$slide.prev();
				if (!self._$slide.hasClass('.calendar-events__slide_active')) {
					self._$slide.addClass('calendar-events__slide_active');
				}
				self._animateTopVal = self._$slide.height();
			});


			self._$calendarPrevElemSlide.stop().animate({
				marginTop: 0
			}, 500, function() {
				self._$calendarElemSlide.css('position', 'absolute');
				self._$calendarElemSlide.removeClass('calendar-events-list__slide_active');
				self._$calendarElemSlide.addClass('calendar-events-list__slide_hidden');
				self._$calendarNextElemSlide = self._$calendarElemSlide;
				self._$calendarElemSlide = self._$calendarPrevElemSlide;
				self._$calendarPrevElemSlide = self._$calendarElemSlide.prev();
				if (!self._$calendarElemSlide.hasClass('.calendar-events-list__slide_active')) {
					self._$calendarElemSlide.addClass('calendar-events-list__slide_active');
				}
				self._$calendarAnimateTopVal = self._$calendarElemSlide.height();
			});


			var ajaxRequest = {
					items: [
						{
							title: 'Санкт-Петербург',
							subtitle: '16 июля 2015, 15:30',
							content: 'Метод Мариновича. История на миллиард',
							count: '98',
							img: '/img/events/logo/event-logo.jpg',
							date: '20',
							month: '5'
						},
						{
							title: 'Санкт-Петербург',
							subtitle: '16 июля 2015, 15:30',
							content: 'Метод Мариновича. История на миллиард',
							count: '98',
							img: '/img/events/logo/event-logo.jpg',
							date: '20',
							month: '5'
						},
						{
							title: 'Санкт-Петербург',
							subtitle: '16 июля 2015, 15:30',
							content: 'Метод Мариновича. История на миллиард',
							count: '98',
							img: '/img/events/logo/event-logo.jpg',
							date: '20',
							month: '5'
						}
					]
				},
				eventsList = {
					block: 'calendar-events',
					elem: 'slide',
					mods: {hidden: true},
					items: ajaxRequest.items

				},
				claendarEventsListSlide = {
					block: 'calendar-events-list',
					elem: 'slide',
					mods: {hidden: true},
					items: ajaxRequest.items
				};

			BEMDOM.prepend(this._calendarEvents.domElem[0], BEMHTML.apply(eventsList));
			BEMDOM.prepend(this._calendarSlider[0], BEMHTML.apply(claendarEventsListSlide));
		}
	}))
});

modules.require(['jquery'], function($) {
	function pageScroll() {
		var top = window.pageYOffset || document.documentElement.scrollTop;
		if (top > 190) {
			$('.calendar-events-list').css('top', '86px');
		} else {
			$('.calendar-events-list').css('top', 276 - top + 'px');
		}
	};

	$(window).scroll(function() {
		pageScroll();
	});

	pageScroll();
});