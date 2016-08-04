/**
 * Created on 14.03.2016.
 */
modules.define('comment-add', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $){
    provide(BEMDOM.decl(this.name,
        {
            /* Instance methods */
            onSetMod: {
                'js': {
                    'inited': function() {
                        var self = this;
                        var formSubmit = this.findBlockInside('form-submit'),
                            formText = self.findBlockInside('form-textarea'),
                            formTextVal;

                        /* submit by submit button */
                        formSubmit.bindTo('click', function(e){
                            e.preventDefault();

                            formTextVal = formText.domElem[0].value;
                            var sessid = $(self.domElem[0]).find('#sessid').val();

                            if(formTextVal.length){

                                // show title
                                var commentsTitle = self.findBlockOutside('page').findBlockInside('comment-list-title');
                                var oldCommentsCollection = self.findBlockOutside('page').findBlocksInside('comment');
                                if( !oldCommentsCollection.length && commentsTitle.hasMod('hidden') ){
                                    commentsTitle.delMod('hidden');
                                }

                                /*--- ajax request ---*/
                                /*
                                 $.ajax({
                                     type: 'POST',
                                     url: '',
                                     data: {type: 'request', comment: formTextVal, sessid: sessid},
                                     dataType: 'json',
                                     success: function(ajaxRequest) {
                                         var bemJSON = {
                                             block:  'comment',
                                             mods: { invisible: true },
                                             author: ajaxRequest.author,
                                             time:   ajaxRequest.time,
                                             msg:    ajaxRequest.msg
                                         };
                                         self._bemJSON = bemJSON;
                                         BEMDOM.append(self.findBlockOutside('page').findBlockInside('comments-wrapper').domElem[0], BEMHTML.apply(self._bemJSON));

                                         var newAddedComment = self.findBlockOutside('page').findBlocksInside('comment');
                                         for(var i = 0; i < newAddedComment.length; i++){
                                             if( newAddedComment[i].hasMod('invisible') ){
                                                 $(newAddedComment[i].domElem[0]).show(400);
                                                 newAddedComment[i].delMod('invisible')
                                             }
                                         }
                                     }
                                 });
                                 */
                                /*--- /ajax request ---*/
                                /* immitation of ajax */
                                var bemJSON = {
                                    block: 'comment',
                                    mods: { invisible: true },
                                    author: 'Гэндальф Серый',
                                    time: 'только что',
                                    msg: formTextVal
                                };
                                self._bemJSON = bemJSON;
                                BEMDOM.append(self.findBlockOutside('page').findBlockInside('comments-wrapper').domElem[0], BEMHTML.apply(self._bemJSON));

                                var newAddedComment = self.findBlockOutside('page').findBlocksInside('comment');
                                for(var i = 0; i < newAddedComment.length; i++){
                                    if( newAddedComment[i].hasMod('invisible') ){
                                        $(newAddedComment[i].domElem[0]).show(400);
                                        newAddedComment[i].delMod('invisible')
                                    }
                                }
                                /* /immitation of ajax */

                                /* clear textarea */
                                formText.domElem[0].value = '';
                            }
                        });

                        /* submit (triggering) by ctrl+enter */
                        function keyDown(e) {
                            if( ( e.ctrlKey || e.metaKey ) && e.keyCode == 13 ){
                                formSubmit.domElem[0].click();
                            }
                        }

                        $(formText.domElem[0]).on('keydown', function(e){
                            keyDown(e);
                        });
                        /* /submit (triggerting) */
                    }
                }
            }
        },
        {
            /* Statics methods */
        }));
});