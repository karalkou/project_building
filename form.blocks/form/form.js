modules.define('jquery', function(provide, jQuery) {
	/*borschik:include:../../js/jquery.validate.min.js*/
	provide(jQuery);

});

modules.define('form', ['i-bem__dom', 'jquery'], function(provide, BEMDOM) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {
					}
				}
			}
		},
		{
			/* статические методы */
		}));
});

modules.require(['jquery', 'form'], function($, form) {

	$.validator.addMethod("mail", function(value, element) {
		var regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
		return regex.test(value) || value == '';
	});

	$.validator.addMethod("valueNotEquals", function(t, n, r) {
		return t != r
	}, $.validator.format("Invalid val is supplied."));

	// methods by KYS
	$.validator.addMethod("minlengthphone10_1", function (value, element) {
		var returnedBoolean = (value.replace(/\D+/g, '').length >= 11)  || value == '+7 (___) ___-__-__' || value == '';
			return returnedBoolean;
		}, $.validator.format("Phone number is too short."));

	$.validator.addMethod("minlengthphone10_2", function (value, element) {
		var returnedBoolean = (value.replace(/\D+/g, '').length >= 11)  || value == '8800 ___-__-__' || value == '';
			return returnedBoolean;
		}, $.validator.format("Phone number is too short."));

	$.validator.addMethod("requiredphone", function (value, element) {
			return value.replace(/\D+/g, '').length >= 0 || value == '+7 (___) ___-__-__';
		}, $.validator.format("Fill this field."));

	/**
	 * Валидация формы
	 * Заявки на включение компании в каталог спец.предложений
	 */
	if ($('.js-valiadate-request-special-offer').length) {
		$('.js-valiadate-request-special-offer').validate(
			{
				debug: false,
				errorPlacement: function(error, element) {
					$('.form-item').has(element).find('.form__error').html(error);
					$('.form-item').has(element).find('.form__error').show();
					$('.form-item').has(element).find('.form__hint').hide();
					$('.form-item').has(element).removeClass('valid');
				},
				success: function(element) {
					element.parent().hide();
					$('.form-item').has(element).addClass('valid');
					$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
				},
				onfocusout: function(element) {
					this.element(element);
					var errorElem = $('input.error', this.currentForm);

					for (var i = 0; i < errorElem.length; i++) {
						if ($(errorElem[i]).attr('aria-invalid') == 'true'
							|| $(errorElem[i]).attr('aria-invalid') == undefined) {
							$('.form-item').has(errorElem[i]).find('.form__error').show();
							$('.form-item').has(errorElem[i]).find('.form__hint').hide();
							$('.form-item').has(errorElem[i]).removeClass('valid');
						}
						else {
							$('.form-item').has(errorElem[i]).find('.form__error').hide();
							$('.form-item').has(errorElem[i]).addClass('valid');
						}
					}
				},
				highlight: function(element, errorClass, validClass) {
					$(element).addClass(errorClass).removeClass(validClass);
					$('.form-item').has($(element)).find('.form__error').show();
					if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
						$(element).parent().addClass('error');
					}
				},
				unhighlight: function(element, errorClass, validClass) {
					$(element).removeClass(errorClass).addClass(validClass);
					$('.form-item').has($(element)).find('.form__error').hide();
					if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
						$(element).parent().removeClass('error');
					}
				},
				ignore: ".ignore",
				focusCleanup: true,
				//TODO указать реальные имена полей
				rules: {
					city: {
						required: true
					},
					category: {
						required: true
					},
					company: {
						required: true
					},
					career: {
						required: true
					},
					'year-of-incorporation': {
						required: true
					},
					'year-of-alfabank': {
						required: true
					},
					user: {
						required: true
					},
					tel: {
						required: true,
						minlength: 13,
						maxlength: 13,
						keydown: false
					},
					mail: {
						required: true,
						mail: true
					},
					site: {
						required: true,
						url: true
					},
					'description': {
						required: true
					},
					inn: {
						required: true,
						minlength: 9,
						maxlength: 12,
						number: true
					}
				},
				messages: {
					city: {
						required: "Выберите город"
					},
					category: {
						required: "Укажите отрасль."
					},
					company: {
						required: 'Укажите название компании'
					},
					career: {
						required: 'Укажите род деятельности'
					},
					'year-of-incorporation': {
						required: 'Укажите год основания компании'
					},
					'year-of-alfabank': {
						required: 'Укажите год открытия счета в Альфа-Банке'
					},
					user: {
						required: 'Укажите контактное лицо'
					},
					tel: {
						required: "Должно быть 10 цифр, например: 901 123-45-67",
						minlength: "Телефон указан неверно, слишком короткий",
						maxlength: "Телефон указан неверно, слишком длинный "
					},
					mail: {
						required: "Формат example@mail.ru",
						mail: "Указан недопустимый email"
					},
					site: {
						required: "Например http://example.ru",
						url: 'Формат http://example.ru или https://example.ru '
					},
					'description': {
						required: 'Укажите описание спец.предложения для клиентов Альфа-Банка (скидка не менее 10%)'
					},
					'inn': {
						required: "Укажите ИНН.",
						number: "ИНН не может содержать буквы",
						minlength: "Вы указали слишком мало символов",
						maxlength: "ИНН не может превышать 12 цифр"
					}
				}
			}
		);
	}

	/**
	 * Валидация формы стать клиентом Альфа-Банка
	 * страница сервисов
	 */
	if ($('.form_validate_feedback-free').length) {
		$(".form_validate_feedback-free").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						}
					}
				}
			)
		})
	}

	if ($('.js-knopka-form').length) {
		(function(window, document, script) {

			var knopkaHost = "knopka.com";

			window._knaq = window._knaq || [];
			_knaq.push(["setKnopkaHost", knopkaHost]);
			_knaq.push(["trackPageView"]);
			_knaq.push(["loadLanding"]);

			var firstScriptElem = document.getElementsByTagName(script)[0];
			var scriptElem = document.createElement(script);
			scriptElem.type = "text/javascript";
			scriptElem.async = true;
			scriptElem.src = "//" + knopkaHost + "/external/tracker/tracker.js";
			firstScriptElem.parentNode.insertBefore(scriptElem, firstScriptElem);

		})(window, document, "script");

		$(document).ready(function() {

			var form = $('.js-knopka-form').first();
			var successCont = form.find('.knopkasuccess');
			var errorCont = form.find('.knopkaerror');

			function KnopkaShowSuccess(message) {
				errorCont.hide();
				successCont.html(message).show();
			}

			function KnopkaShowError(message) {
				successCont.hide();
				errorCont.html(message).show();
			}

			form.submit(function(e) {
				e.preventDefault();

				if (!window.knopka || !window.knopka.saveLead) {
					KnopkaShowError("Что-то пошло не так. Попробуйте позже.");
					return;
				}

				var phone = $(this).find('input[name=phone]').val();

				window.knopka.saveLead({'phone': phone}, function(error, result) {
					if (error) {
						if (error.reason === "phone") {
							KnopkaShowError("Неправильный телефон");
						}
						else {
							KnopkaShowError("Что-то пошло не так. Попробуйте позже.");
						}
					}
					else {
						KnopkaShowSuccess("Все хорошо.");
					}
				});

			});
		});
	}

	/* added on 25.11.2015 */
	/**
	 * Валидация формы на странице сервиса hh
	 */
	if($('.form_validate_hh-free').length){
		$(".form_validate_hh-free").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element){
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var  errorElem = $('input.error, div.error', this.currentForm);
						for(var i = 0; i < errorElem.length; i++){
							if($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined){
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else{
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}

					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if($(element).prop("tagName").toUpperCase() == 'SELECT'){
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if($(element).prop("tagName").toUpperCase() == 'SELECT'){
							$(element).parent().removeClass('error');
						}
					},

					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name : {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail : {
							required: true,
							mail: true
						},
						company : {
							required: true
						},
						inn : {
							required: true,
							minlength: 9,
							maxlength: 12,
							number: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name : {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий" ,
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail : {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						company : {
							required: "Укажите компанию"
						},
						inn : {
							required: "Укажите ИНН.",
							number: "ИНН не может содержать буквы",
							minlength: "Вы указали слишком мало символов",
							maxlength: "ИНН не может превышать 12 цифр"
						}
					}
				}
			)
		});

		$('select[name="region"]').change(function(){
			if(this.value.length > 0){
				$('.form-item').has(this).find('.form__error').hide();
				$('.form-item').has(this).find('.jq-selectbox').removeClass('error');
				$('.form-item').has(this).find('.form__hint').hide();
			}
		});
	}

	/**
	 * Валидация формы Nethouse
	 * страница сертификатов 26.11.2015
	 */
	if ($('.form_validate_nethouse-discount').length) {
		$(".form_validate_nethouse-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						promo:{
							required: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						promo: {
							required: 'Укажите промо-код'
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы HeadHunters
	 * страница сертификатов 26.11.2015
	 */
	if ($('.form_validate_hh-discount').length) {
		$(".form_validate_hh-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы AmoCRM
	 * страница сертификатов 26.11.2015
	 */
	if ($('.form_validate_amocrm-discount').length) {
		$(".form_validate_amocrm-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						password: {
							required: true,
							minlength: 8
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						password: {
							required: "Вы не указали пароль",
							minlength: "Минимальная длина - 8 символов"
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы 1C-BO
	 * страница сертификатов 28.01.2016
	 */
	if ($('.form_validate_1C-BO-discount').length) {
		$(".form_validate_1C-BO-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						bonus: {
							required: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						bonus: {
							required: "Выберите бонус-пакет"
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы Mango office
	 * страница сертификатов 28.01.2016
	 */
	if ($('.form_validate_mango-discount').length) {
		$(".form_validate_mango-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						bonus: {
							required: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						bonus: {
							required: "Выберите бонус-пакет"
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы стать клиентом Альфа-Банка
	 * страница сервисов
	 */
	if ($('.form_validate_start-your-business').length) {
		$(".form_validate_start-your-business").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						}
					},
					messages: {
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы Microsoft office
	 * страница сертификатов 28.06.2016
	 */
	if ($('.form_validate_microsoft-discount').length) {
		$(".form_validate_microsoft-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item-v2').has(element).find('.form__error').html(error);
						$('.form-item-v2').has(element).find('.form__error').show();
						$('.form-item-v2').has(element).find('.form__hint').hide();
						$('.form-item-v2').has(element).removeClass('valid');
					},
					success: function(label, element) {
						label.parent().hide();
						stateValid = false;

						var fields = $('input[type=text].form-input, select', ".form_validate_microsoft-discount"),
							state = true;

						for(var i = 0; i < fields.length; i++){
							if(fields[i].value == '' &&
								fields[i].name != 'tel' &&
								fields[i].className != "ignore"){
								state = false;
							}
						}
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {

								var name = $(errorElem[i]).attr('name');
								console.log(name);

								switch(name){
									case 'tel':
										$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
										$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
										break;

									default :
										$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
										$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
										$('.form-item-v2').has(errorElem[i]).removeClass('valid');
										break;
								}

							}else {
								$('.form-item-v2').has(errorElem[i]).find('.form__error').hide();
								$('.form-item-v2').has(errorElem[i]).addClass('valid');
							}
						}
						/**/
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlengthphone10_1: true,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						'zip-code': {
							required: true
						},
						'fact-address': {
							required: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Вы не указали телефон",
							minlengthphone10_1: "Телефон указан неверно, слишком короткий"
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						'zip-code': {
							required: 'Вы не указали почтовый индекс'
						},
						'fact-address': {
							required: 'Вы не указали почтовый индекс'
						}
					}
				}
			)
		});

		$('select[name="city"]').change(function(){
			if(this.value.length > 0){
				$('.form-item-v2').has(this).find('.form__error').hide();
				$('.form-item-v2').has(this).find('.jq-selectbox').removeClass('error');
				$('.form-item-v2').has(this).find('.form__hint').hide();
			}
		});

		$('input').each(function(){
			$(this).blur(function(){
				$(this).closest('form').validate().element($(this));
			});
		});
	}

	/**
	 * Валидация формы сертификата Beeline office
	 * страница сертификатов 29.06.2016
	 */
	if ($('.form_validate_beeline-discount').length) {
		$(".form_validate_beeline-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item-v2').has(element).find('.form__error').html(error);
						$('.form-item-v2').has(element).find('.form__error').show();
						$('.form-item-v2').has(element).find('.form__hint').hide();
						$('.form-item-v2').has(element).removeClass('valid');
					},
					success: function(label, element) {
						label.parent().hide();
						stateValid = false;

						var fields = $('input[type=text].form-input, select', ".form_validate_beeline-discount"),
							state = true;

						for(var i = 0; i < fields.length; i++){
							if(fields[i].value == '' &&
								fields[i].name != 'tel' &&
								fields[i].className != "ignore"){
								state = false;
							}
						}
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {

								var name = $(errorElem[i]).attr('name');
								console.log(name);

								switch(name){
									case 'tel':
										$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
										$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
										break;

									default :
										$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
										$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
										$('.form-item-v2').has(errorElem[i]).removeClass('valid');
										break;
								}

							}else {
								$('.form-item-v2').has(errorElem[i]).find('.form__error').hide();
								$('.form-item-v2').has(errorElem[i]).addClass('valid');
							}
						}
						/**/
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlengthphone10_1: true,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						bonus: {
							required: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Вы не указали телефон",
							minlengthphone10_1: "Телефон указан неверно, слишком короткий"
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						bonus: {
							required: "Выберите пакет услуг"
						}
					}
				}
			)
		});

		$('select[name="city"]').change(function(){
			if(this.value.length > 0){
				$('.form-item-v2').has(this).find('.form__error').hide();
				$('.form-item-v2').has(this).find('.jq-selectbox').removeClass('error');
				$('.form-item-v2').has(this).find('.form__hint').hide();
			}
		});

		$('input').each(function(){
			$(this).blur(function(){
				$(this).closest('form').validate().element($(this));
			});
		});
	}

	/**
	 * Валидация формы редактирования компании 1
	 * страница редактирования компании
	 */
	if ($('.form_validate_company-edit').length) {
		$(".form_validate_company-edit").each(function() {
			var stateValid = false,
				$submit = $('.js-submit'),
				$submitError = $('.js-submit-error');

			function initSubmitErrorBtn(){
				$('.js-submit-error').click(function(){
					$('.form_validate_company-edit').submit();
				});
			};

			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item-v2').has(element).find('.form__error').html(error);
						$('.form-item-v2').has(element).find('.form__error').show();
						$('.form-item-v2').has(element).find('.form__hint').hide();
						$('.form-item-v2').has(element).removeClass('valid');

						if($('input.error').length != 0) {
							$submit.hide();
							$submitError.css('display', 'inline-block');
							initSubmitErrorBtn();
						}

						//$submit.hide();
						//$submitError.css('display', 'inline-block');
						//initSubmitErrorBtn();
					},
					success: function(label, element) {
						label.parent().hide();
						stateValid = false;

						var fields = $('input[type=text].form-input, select', ".form_validate_company-edit"),
							state = true;

						for(var i = 0; i < fields.length; i++){
							if(fields[i].value == '' &&
								fields[i].name != 'tel_2' &&
								fields[i].name != 'tel_3' &&
								fields[i].className != "ignore"){
								state = false;
							}
						}

						if(state && $('input.error').length == 0) {
							$submit.show();
							$submitError.hide();
						}
						// old
						//$('.form-item-v2').has(label).addClass('valid');
						//$('.form-item-v2').has(label).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {

								var name = $(errorElem[i]).attr('name');

								switch(name){
									case 'city':
									case 'tel_2':
									case 'tel_3':
									case 'site':
										$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
										$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
										break;

									default :
										$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
										$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
										$('.form-item-v2').has(errorElem[i]).removeClass('valid');
										break;
								}

								$submit.hide();
								$submitError.css('display', 'inline-block');
								initSubmitErrorBtn();

								/* old */
								//$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
								//$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
								//$('.form-item-v2').has(errorElem[i]).removeClass('valid');
							}else {
								$('.form-item-v2').has(errorElem[i]).find('.form__error').hide();
								$('.form-item-v2').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						city: {
							required: false
						},
						tel_1: {
							required: true,
							minlengthphone10_1: true,
							keydown: false
						},
						tel_2: {
							required: false,
							minlengthphone10_1: true,
							keydown: false
						},
						tel_3: {
							required: false,
							minlengthphone10_2: true,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						site: {
							required: false,
							url: true
						},
						name: {
							required: true
						},
						description: {
							required: true
						}/*,
						 previewText: {
						 required: true
						 }*/
					},
					messages: {
						city: {
							required: 'Не указан город'
						},
						tel_1: {
							required: "Телефон не указан",
							minlengthphone10_1: "Телефон указан неверно, слишком короткий"
						},
						tel_2: {
							minlengthphone10_1: "Телефон указан неверно, слишком короткий"
						},
						tel_3: {
							minlengthphone10_2: "Телефон указан неверно, слишком короткий"
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						site: {
							required: "Формат example.ru",
							url: 'Формат http://example.ru или https://example.ru '
						},
						name: {
							required: 'Не указано название компании'
						},
						description: {
							required: 'Не указано краткое описание'
						}
					}
				}
			);

			$('select[name="city"]').change(function(){
				if(this.value.length > 0){
					$('.form-item-v2').has(this).find('.form__error').hide();
					$('.form-item-v2').has(this).find('.jq-selectbox').removeClass('error');
					$('.form-item-v2').has(this).find('.form__hint').hide();
				}
			});

			$('input').change(function(){
				/*help:
				 The change event is sent to an element when its value changes. This event is limited to <input> elements,
				 <textarea> boxes and <select> elements. For select boxes, checkboxes, and radio buttons, the event is fired
				 immediately when the user makes a selection with the mouse, but for the other element types the event is
				 deferred until the element loses focus.*/
				switch ($(this).attr('name')){
					case 'tel_2':
					case 'tel_3':
					case 'site':
						$(this).removeClass('ignore');
						break;
				}
			});

			$('input').each(function(){
				$(this).blur(function(){
					$(this).closest('form').validate().element($(this));

					if($('input.error').length == 0) {
						$submit.show();
						$submitError.hide();
					}
				});
			});

			//if($('input.error').length == 0) {
			//	$submit.show();
			//	$submitError.hide();
			//}
		});


	}

	/**
	 * Валидация формы редактирования компании 2
	 * страница редактирования компании
	 */
	if ($('.form_validate_company-edit-2').length) {
		$(".form_validate_company-edit-2").each(function() {
			var stateValid = false,
				$submit = $('.js-submit'),
				$submitError = $('.js-submit-error');

			function initSubmitErrorBtn(){
				$('.js-submit-error').click(function(){
					$('.form_validate_company-edit-2').submit();
				});
			};

			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item-v2').has(element).find('.form__error').html(error);
						$('.form-item-v2').has(element).find('.form__error').show();
						$('.form-item-v2').has(element).find('.form__hint').hide();
						$('.form-item-v2').has(element).removeClass('valid');

						$submit.hide();
						$submitError.css('display', 'inline-block');
						initSubmitErrorBtn();
					},
					success: function(label, element) {
						label.parent().hide();
						stateValid = false;

						$submit.show();
						$submitError.hide();

						// old
						$('.form-item-v2').has(label).addClass('valid');
						$('.form-item-v2').has(label).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {

								$('.form-item-v2').has(errorElem[i]).find('.form__error').show();
								$('.form-item-v2').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item-v2').has(errorElem[i]).removeClass('valid');

								$submit.hide();
								$submitError.css('display', 'inline-block');
								initSubmitErrorBtn();
							}
							else {
								$('.form-item-v2').has(errorElem[i]).find('.form__error').hide();
								$('.form-item-v2').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item-v2').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						mail: {
							required: true,
							mail: true
						}
					},
					messages: {
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						}
					}
				}
			)
		});

		$('.checkbox__real').change(function(){
			console.log('change');
		});

		// when first load
		var $checkbox0 = $('.ue-mail-receive');
		if ($checkbox0.find('.checkbox__real').prop('checked')) {
			$checkbox0.closest('.page').find('input[name="mail"]').prop('disabled', false);
		} else {
			$checkbox0.closest('.page').find('input[name="mail"]').removeClass('ignore');
			$checkbox0.closest('.page').find('input[name="mail"]').val('');
			$checkbox0.closest('.page').find('input[name="mail"]').prop('disabled', true);
		}

		// after click
		$('.ue-mail-receive').click(function() {
			var $checkbox = $(this);
			var $submit = $('.js-submit'),
				$submitError = $('.js-submit-error');
			var curInput = $checkbox.closest('.page').find('input[name="mail"]');

			if ($checkbox.find('.checkbox__real').prop('checked')) {
				curInput.prop('disabled', true).val('').removeClass('error');
				curInput.closest('.form-item-v2').find('.form__error').attr('style', '');
				$submit.show();
				$submitError.css('display', 'none');
			} else {
				curInput.removeClass('ignore');
				curInput.prop('disabled', false);
			}
		});
	}
});