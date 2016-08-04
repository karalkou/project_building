modules.require(['jquery__carouFredSel'], function($) {
	var currentCount = 1,
		$contentelem = $('.carousel-service__content'),
		$currentCountElem = $('.carousel-service__counter-count'),
		$currentCounterElem = $('.carousel-service__counter-current'),
		$items = $('.carousel-list__item'),
		$prevBtn = $('.carousel-service__btn-prev'),
		$nextBtn = $('.carousel-service__btn-next'),
		countSlides = $items.length;

	$currentCountElem.text(countSlides);
	$currentCounterElem.text(1);

	$('.carousel-list').carouFredSel({
		items: 3,
		auto: {
			play: false
		},
		prev: ".carousel-service__btn-prev",
		next: ".carousel-service__btn-next",
		scroll: {
			items: 1,
			easing: "",
			duration: 200,
			pauseOnHover: true,
			onBefore: function(data) {
				var $currentElem = $(data.items.visible[1]),
					$oldActiveElem = $('.carousel-list__item_active'),
					content = $currentElem.find('.carousel-list__item-content').html();

				$contentelem.hide();
				$oldActiveElem
					.find('img')
					.attr('src', $oldActiveElem.attr('data-img'));
				$oldActiveElem.removeClass('carousel-list__item_active');
				$currentElem.addClass('carousel-list__item_active');
				$currentElem
					.find('img')
					.attr('src', $currentElem.attr('data-active-img'));
				$contentelem.html(content);
				$contentelem.fadeTo('slow', 1);

				if (data.scroll.direction == 'next') {
					if (currentCount == countSlides) {
						currentCount = 0;
					}
					currentCount++;
					$currentCounterElem.html(currentCount);
				} else {
					if (currentCount <= 1) {
						currentCount = countSlides + 1;
					}
					currentCount--;
					$currentCounterElem.html(currentCount);
				}
			}
		},
		onCreate: function(data) {
			var $currentElem = $(data.items[1]),
				content = $currentElem.find('.carousel-list__item-content').html();

			$currentElem.addClass('carousel-list__item_active');
			$currentElem
				.find('img')
				.attr('src', $currentElem.attr('data-active-img'));
			$contentelem.html(content);
			$contentelem.fadeTo('slow', 1);
		},
		height: 83
	});

	$items.click(function() {
		var $self = $(this);
		if (!$self.hasClass('carousel-list__item_active')) {
			if ($self.next().hasClass('carousel-list__item_active')) {
				$prevBtn.click();
			} else {
				$nextBtn.click();
			}
		}
	});
});

