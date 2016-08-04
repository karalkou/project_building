modules.define('form-img', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var that = this;

                        //get collection of remove crosses
                        this.cross = this.domElem.find('.form-img__cross');

                        that._clickToRemoveCross();

                        this.init();


                    }
                }
            },

            init: function(){
                var that = this;
                var thisNameSpace =  this.domElem;
                var fileLoader = thisNameSpace.find('input');

                fileLoader.bind( 'change', function(e) {
                    var reader = new FileReader(),
                        self = e.currentTarget,
                        fileSize = 0;
                    var currentCross = $(self).closest('.form-img').find('.form-img__cross');

                    // show and hide cross
                    that._showCross(currentCross);
                    that._clickToRemoveCross();


                    if (self.files && self.files[0]) {

                        reader.onload = function(e) {
                        fileSize = Math.floor(e.total / 1000000);

                        if (fileSize > 10) {
                            $(self).closest('.form-item-v2').find('.form__error').html('Пожалуйста, загрузите файл меньше 10МБ');
                            $(self).closest('.form-item-v2').find('.form__error').show();
                            $(self).parent().find('.fa').remove();
                            this.clearFileInputField(self);
                        } else {
                            $(self).closest('.form-item-v2').find('.form__error').hide();
                        }

                        /*Атрибут для предварительного показа изображения*/
                        if(self.hasAttribute('data-container')){
                            $(self).parent().find('.fa').remove();
                            if(self.hasAttribute('data-width')){
                                if($(self).attr('data-container') == 'data-logo-container'){
                                    that.canvasResizeOnSide(e.target.result, $(self).attr('data-container'), $(self).attr('data-save'), $(self).attr('data-width'), $(self).attr('data-height'));
                                }else{
                                    that.canvasResizeOnSide(e.target.result, $(self).attr('data-container'), $(self).attr('data-save'), $(self).attr('data-width'), $(self).attr('data-height'));
                                }
                            }
                        }
                    };

                    reader.readAsDataURL(this.files[0]);
                } else if(window.File && window.FileReader && window.FileList && window.Blob){
                    $(self).closest('.form-item-v2').find('.form__error').html('Файл не загружен');
                    $(self).closest('.form-item-v2').find('.form__error').show();
                }
                } )
            },

            clearFileInputField: function(elem){
                var input = $(elem),
                    that = this;
                input.parent().html(input.parent().html());
                that.init();
            },

            /**
             * Ресайз и центрирование
             * изображения по большей стороне
             * @param src -- путь до картинки
             * @param dataAttr -- дата атрибут контейнера(поле куда грузим изображение
             * под ним же и сохраняем в local storage)
             * @param save -- флаг сохранения в Local storage
             * @param defaultWidth -- ширина для ресайза
             * @param defaultHeight -- высота для ресайза
             */
            canvasResizeOnSide: function(src, dataAttr, save, defaultWidth, defaultHeight){
                if(src) {
                    var width, height,
                        widthParam, heightParam,
                        canvas = document.createElement('canvas'),
                        ctx = canvas.getContext('2d'),
                        scaleParam,destX = 0, destY = 0,
                        cropCanvas = document.createElement('canvas'),
                        cropCtx = cropCanvas.getContext('2d'),
                        cropImage = new Image(),
                        img = new Image(),
                        that = this;

                    img.src = src;


                    img.onload = function() {
                        var canvas = document.createElement('canvas'),
                            ctx = canvas.getContext('2d'),
                            resultWidth,
                            resultHeight;

                        width = img.naturalWidth;
                        height = img.naturalHeight;

                        /*Если изображение больше контейнера и ширина больше ширины контейнера*/
                        if( defaultHeight && defaultWidth && (width > height) && (width > defaultWidth) ){
                            scaleParam = width/defaultWidth;
                            destY = (defaultHeight  - height/scaleParam)/2;
                            resultHeight = height/scaleParam;
                            resultWidth  = width/scaleParam;
                        }else if( defaultHeight && defaultWidth && (width < height) && (height > defaultHeight) ){
                            scaleParam = height/defaultHeight;
                            destX = (defaultWidth  - width/scaleParam)/2;
                            resultHeight = height/scaleParam;
                            resultWidth  = width/scaleParam;
                        }

                        /*Если изображение меньше контейнера*/
                        if(defaultHeight && defaultWidth && width < defaultWidth && height < defaultHeight){
                            scaleParam = 1;
                            destX = (defaultWidth - width)/2;
                            destY = (defaultHeight - height)/2;
                            resultHeight = height/scaleParam;
                            resultWidth  = width/scaleParam;
                        }

                        canvas.height = 95;
                        canvas.width = 95;

                        ctx.drawImage(img, destX, destY, resultWidth, resultHeight);
                        that.showImg(canvas, dataAttr);
                        //if (save == 'true') {
                        //    that.saveImgToLocalStorage(canvas, dataAttr);
                        //    return canvas;
                        //}
                    }
                }
            },

            /**
             * Показывает загруженное изображение
             * @param canvas - изображение
             * @param dataAttr -дата атрибут
             * в зависимости от data атрибута
             * dataAttr == data-company-container - Контейнер
             * в котором показывается изображение компании
             * dataAttr == data-logo-container - Контейнер
             * в котором показывается изображение логотипа пользователя
             * каждый атрибут мжет быть img и background
             * зависит от представления
             */

            showImg: function (canvas, dataAttr){
            var imgSrc = canvas.toDataURL("image/png"),
                $imgConatiner = $('[' + dataAttr + ']');

            if($imgConatiner.attr(dataAttr) == 'img' ){
                // если контейнер изображение
                $imgConatiner.attr('src', imgSrc);

            }else  if($imgConatiner.attr(dataAttr) == 'background' ){
                //если контейнер background произвольного блока
                $imgConatiner.css({background : 'url(' + imgSrc + ')'});
                }
            },

            saveImgToLocalStorage: function (canvas, name){
            dataURL = canvas.toDataURL("image/png");
            localStorage.setItem(name, dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
            },

            /**
             * Привязка клика по крестику
             * @private
             */
            _clickToRemoveCross: function(){
                var that = this;

                this.cross.click(function(e){
                    for(var i = 0; i < that.cross.length; i++){
                        // compare dom nodes
                        if(e.target === that.cross[i]){
                            that.removePreviewImage($(e.target).closest('.form-img__place'));
                            that._hideCross(e.target);

                            that._onRemove(e);
                        }
                    }
                });
            },

            /**
             * Создание input[type='hidden'] для передачи информации об удалённом изображении
             * @param e - event
             * @private
             */
            _onRemove: function(e){
                var that = this;
                var inputVal = '';

                inputVal = $(e.target).closest('.form-img').find('.form-img__place').attr('data-type');
                // костыль из-за многократного срабатывания (несколько блоков form-img)
                if($(e.target).closest('.form-img').find('input[type="hidden"]').length){
                    $(e.target).closest('.form-img').find('input[type="hidden"]').replaceWith("<input type='hidden' name='action-delete[]'>");
                }else{
                    $(e.target).closest('.form-img').append("<input type='hidden' name='action-delete[]'>");
                }
                $(e.target).closest('.form-img').find('input[type="hidden"]').attr('value', inputVal);
            },
            /**
             * Показывает крестик для удаления предпросмотра
             * @param cross - dom-узел крестика
             */
            _showCross: function(cross){
                $(cross).addClass('form-img__cross_visible');
            },

            /**
             * Скрывает крестик для удаления предпросмотра
             * @param cross - dom-узел крестика
             */
            _hideCross: function (cross) {
                $(cross).removeClass('form-img__cross_visible');
            },

            /**
             * Скрывает предпросмотр загруженного изображения
             * @param container - jQuery объект с необходимым dom-узлом
             */
            removePreviewImage: function(container){
                container.attr('style', '');
            }
        },
        {
            /* статические методы */
        }));
});