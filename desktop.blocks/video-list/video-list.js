modules.define('video-list', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function(){

                        var videoListLinkArr = this.findBlockInside('video-list').elem('link'),
                            firstLink = videoListLinkArr[0],
                            videoListItemArr = this.findBlockInside('video-list').elem('item'),
                            firstItem = videoListItemArr[0];
                        var videoLanding = $('.video-landing');
                        var $title = $('.screen-wrapper__inner').find('.title_main-page_screen-content');
                        $(firstLink).addClass('video-list__link_active');
                        $($title).text($(firstItem).attr('data-title'));

                        /**
                         * counting height of .screen_video.screen__inner
                         */
                        var $webinarsRow = $('.webinars__row'),
                            videoLandingHeightArr = [],
                            videoLandingHeight,
                            videoListHeight = $('.webinars__right').outerHeight(),
                            videoTitleHeight = $('.screen_video').find('.title_main-page_screen-content').outerHeight(true),
                            resultHeight = videoListHeight;

                        for( var i = 0; i < videoLanding.length; i++ ){
                            videoLandingHeightArr.push( $( videoLanding[i] ).outerHeight() );
                        }

                        videoLandingHeight = Math.max.apply( Math, videoLandingHeightArr );

                        if( videoLandingHeight + videoTitleHeight > videoListHeight ){
                            resultHeight = videoLandingHeight + videoTitleHeight;
                        }

                        $webinarsRow.height(resultHeight);
                        videoLanding.addClass('video-landing_show');

                        /**
                         * actions after 'click' on .video-list__item
                         */
                        this.bindTo('item','click', function(e){
                            var target = e.target,
                                clickedAttr,
                                clickedTitle,
                                videoId;

                            videoLanding = $('.video-landing');

                            if ( target != this ){
                                target = $(target).closest('.video-list__item');
                            }

                            // toggling of class .video-list__link_active
                            for( var i = 0; i < videoListLinkArr.length; i++ ){
                                if ( $(videoListLinkArr[i]).hasClass('video-list__link_active') ){
                                    $(videoListLinkArr[i]).removeClass('video-list__link_active');
                                }
                            }

                        /* setting .video-list__link_active to clicked link */
                            var $activeLink = $(target).find('.video-list__link');
                            $($activeLink).addClass('video-list__link_active');

                        /* new realization of changing videos */
                            clickedAttr = $(target).attr('data-click');
                            clickedTitle = $(target).attr('data-title');

                            $(videoLanding[0]).removeClass('video-landing_opacity_1');
                            $title.text( clickedTitle );

                            $(videoLanding[1]).html(clickedAttr);

                            var oldIframe = $(videoLanding[0]).find('iframe')[0];
                            var newIframe = $(videoLanding[1]).find('iframe')[0];

                            newIframe.onload = function(){
                                $(oldIframe).closest('.video-landing').fadeTo(600, 0, function(){
                                    $(oldIframe).closest('.video-landing').remove();
                                    $(newIframe).closest('.video-landing').fadeTo(600, 1);
                                });

                                $('.webinars__left').append('<div class="video-landing"></div>');
                            };

                        });

                        this.bindTo('play', 'click', function(e){
                            e.preventDefault();
                        });

                        this.bindTo('link', 'click', function(e){
                            e.preventDefault();
                        });

                    }
                }
            }
        },
        /* Static methods */
        {}
    ));
});

