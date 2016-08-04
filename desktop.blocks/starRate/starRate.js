/**
 * Created by Пользователь 1 on 15.02.2016.
 */
modules.define('starRate', ['i-bem__dom', 'jquery__Raty', 'form-textarea-listened'], function(provide, BEMDOM, $, formTextareaListened) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {

                        var self = this,
                            voiceQuantityBlock = this.findBlockOutside('headliner').findBlockInside('rate-quantity'),
                            firstLoadRate = this.findBlockOutside('headliner').elem('rate-line').attr('data-rate'),
                            firstLoadSubRate,
                            rateScore = 0,
                            quantity,
                            form = this.findBlockOutside('page').findBlockInside('form_validate_company-rate-feedback'),
                            message = this.findBlockOutside('page').findBlockInside('form-feedback-msg');

                        this.formText = form.findBlockInside('form-textarea').domElem[0];
                        this.formTextVal = '';
                        this.formError = form.findBlockInside('form-textarea-listened').elem('error');
                        this.formSubmit = form.findBlockInside('form-submit');
                        this.closeBtn = form.findBlockOutside('popup').elem('close');
                        this.popUpBg = {};

                        var mainRateElem = $('.starRate'),
                            mainRateCollection,
                            subscribedRateElem = $('.subscribed-rate'),
                            pluginSettings = {
                                hints       : [ 'плохо', 'неудовлетворительно', 'нормально', 'хорошо', 'отлично' ],
                                number      : 5,
                                scoreName   : 'starRate-score',
                                starClass   : 'starRate__item'
                            },
                            starOnMain = this.params.mainOn,
                            starOffMain = this.params.mainOff,
                            starOnAux = this.params.subOn,
                            starOffAux = this.params.subOff;

                        function setSubScore(score){
                            $(subscribedRateElem).raty( 'score', score );
                        }
                        function setMainScore(score){
                            $(mainRateCollection).attr('src', starOffMain);
                            for(var i= 0; i < score; i++){
                                $(mainRateCollection[i]).attr('src', starOnMain);
                            }
                        }

                        /* disable/enable submit button by limit 1000 symbols */
                        formTextareaListened.on('lock'  , this._disableSubmit, this);
                        formTextareaListened.on('unlock', this._enableSubmit, this);

                        /* set parameters on page */
                        $(mainRateElem).raty(
                            $.extend( pluginSettings, { readOnly: true, starOn: starOnMain, starOff: starOffMain } )
                        );
                        mainRateCollection = $(mainRateElem).find('.starRate__item');

                        /* set parameters on pop-up */
                        if($(subscribedRateElem).length) {
                            $(subscribedRateElem).raty(
                                $.extend( pluginSettings, { readOnly: false, starOn: starOnAux, starOff: starOffAux } )
                            );
                        }

                        /* setting score for rates, that HAVE BEEN inited */
                        firstLoadSubRate = form.findBlockInside('subscribed-rate').domElem.attr('data-rate');
                        setMainScore(firstLoadRate);
                        setSubScore(firstLoadSubRate);

                        // if we have rate element in pop-up
                        if($(subscribedRateElem).length){
                            // without clicking on stars ( it means person don't want to change rating of company )
                            rateScore = $(subscribedRateElem).find('input[name="starRate-score"]').attr('value');
                            // on click when person change rating
                            $(subscribedRateElem).find('img').on('click', function(){
                                rateScore = $(subscribedRateElem).find('input[name="starRate-score"]').attr('value');
                            });

                            /* -- ajax manipulations -- */
                            this.formSubmit.bindTo('click', function(e){
                                e.preventDefault();
                                self.popUpBg = self.findBlockOutside('page').findBlockInside('popup__background').domElem;
                                //formTextVal = formText.value || '' ;
                                self.formTextVal = self.formText.value || '' ;

                                /*--- ajax request ---*/
                                /*
                                $.ajax({
                                    type: 'POST',
                                    url: '',
                                    data: {type: 'request', rate: rateScore, text: self.formTextVal },
                                    dataType: 'json',
                                    success: function(ajaxRequest) {
                                        var bemJSON = {
                                            rate: ajaxRequest.rate,
                                            quantity: ajaxRequest.quantity,
                                            wordNumeral: ajaxRequest.wordNumeral,
                                            error: ajaxRequest.error || ''
                                        };

                                        setMainScore(bemJSON.rate);
                                        voiceQuantityBlock.domElem[0].innerText = bemJSON.quantity + ' ' + bemJSON.wordNumeral;
                                        // fill message field by error message
                                        if(bemJSON.error.length){
                                            $(message.domElem[0]).addClass('colorization_red-alpha').text(bemJSON.error);
                                        }
                                        // actions after requesting ajax
                                        $(form.domElem[0]).fadeOut('slow', function(){
                                            $(message.domElem[0]).fadeIn('slow')
                                        });
                                        // toggling visibility
                                        self.closeBtn.on('click', function(){
                                            $(form.domElem[0]).css('display', '');
                                            $(message.domElem[0]).css('display', 'none');
                                        });
                                        self.popUpBg.on('click', function(){
                                            $(form.domElem[0]).css('display', '');
                                            $(message.domElem[0]).css('display', 'none');
                                        });
                                        // logic to show amount of voices
                                        if( +bemJSON.quantity > 3 ){
                                            self.domElem.css('display', 'initial');
                                            voiceQuantityBlock.domElem.css('display', 'initial');
                                        }
                                    }
                                });
                                */
                                /*--- /ajax request ---*/

                                /* ajax immitation */
                                var bemJSON = {
                                    rate: $(subscribedRateElem).find('input[name="starRate-score"]').attr('value'),
                                    quantity: '121',
                                    wordNumeral: 'голос',
                                    //error: 'What are you doing???'
                                    error: ''
                                };

                                setMainScore(bemJSON.rate);
                                voiceQuantityBlock.domElem[0].innerText = bemJSON.quantity + ' ' + bemJSON.wordNumeral;
                                // fill message field by error message
                                if(bemJSON.error.length){
                                    $(message.domElem[0]).addClass('colorization_red-alpha').text(bemJSON.error);
                                }
                                // actions after requesting ajax
                                $(form.domElem[0]).fadeOut('slow', function(){
                                    $(message.domElem[0]).fadeIn('slow')
                                });
                                // toggling visibility
                                self.closeBtn.on('click', function(){
                                    $(form.domElem[0]).css('display', '');
                                    $(message.domElem[0]).css('display', 'none');
                                });
                                self.popUpBg.on('click', function(){
                                    $(form.domElem[0]).css('display', '');
                                    $(message.domElem[0]).css('display', 'none');
                                });
                                // logic to show amount of voices
                                if( +bemJSON.quantity > 3 ){
                                    self.domElem.css('display', 'initial');
                                    voiceQuantityBlock.domElem.css('display', 'initial');
                                }
                                /* /ajax immitation */
                            });
                            /* -- /ajax manipulations -- */
                        }
                    }
                }
            },

            _disableSubmit: function(e) {
                this.formSubmit.domElem[0].disabled = true;
                this.formError.css('display', 'block');
                $(this.formText).css('border-color', '#EF3124');
            },

            _enableSubmit: function(e) {
                this.formSubmit.domElem[0].disabled = false;
                this.formError.css('display', '');
                $(this.formText).css('border-color', '');
            }
        },
        {
            /* статические методы */
        }));
});