modules.require(['jquery__maskedInput', 'form'], function($, form) {

    var $companyEditForm;
    /**
     * Маска в форме редактирования компании
     * страница редактирования компании
     */
    $companyEditForm = $('.form_validate_company-edit');

    if ($companyEditForm.length) {
        $companyEditForm.each(function () {

            var tel1 = $companyEditForm.find('input[name="tel_1"]');
            var tel2 = $companyEditForm.find('input[name="tel_2"]');
            var tel3 = $companyEditForm.find('input[name="tel_3"]');

            tel1.mask("+7 (999) 999-99-99", {autoclear: false});
            tel2.mask("+7 (999) 999-99-99", {autoclear: false});
            tel3.mask("8800 999-99-99", {autoclear: false});

        });
    }

    /**
     * Маска в форме сертификата Microsoft
     */
    $companyEditForm = $('.form_validate_microsoft-discount');

    if ($companyEditForm.length) {
        $companyEditForm.each(function () {

            var tel = $companyEditForm.find('input[name="tel"]');

            tel.mask("+7 (999) 999-99-99", { autoclear: false });

        });
    }

    /**
     * Маска в форме сертификата Beeline
     */
    $companyEditForm = $('.form_validate_beeline-discount');

    if ($companyEditForm.length) {
        $companyEditForm.each(function () {

            var tel = $companyEditForm.find('input[name="tel"]');

            tel.mask("+7 (999) 999-99-99", { autoclear: false });

        });
    }
});