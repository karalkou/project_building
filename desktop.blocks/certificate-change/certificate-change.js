modules.define('certificate-change', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {
    provide(BEMDOM.decl(this.name,
            {
                /* Instance methods */
                onSetMod: {
                    'js': {
                        'inited': function() {
                            console.log(' Hello from block "certificate-change"!! ');

                            this.bindTo('click', function(e){

                                console.log('clicked from "certificate-change"');

                                var companyTiles = this.params.newBemJSON;
                                var insertableBlock = this.findBlockOutside('page').findBlockInside('tiles-certificate').domElem;

                                console.log('companyTiles   : ', companyTiles);
                                console.log('insertableBlock: ', insertableBlock);

                                //BEMDOM.after( insertableBlock, BEMHTML.apply( companyTiles ));

                                this.emit('select-click', companyTiles);

                            });

                            //var Block = this.findBlockOutside('page').findBlockInside('list');
                            //this.bindTo(Block,'click', function(){ console.log('Block'); });
                        }
                    }
                }
            },
            {

            }
        )
    );
});