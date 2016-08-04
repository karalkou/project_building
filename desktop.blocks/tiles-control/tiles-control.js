modules.define('tiles-control', ['i-bem__dom', 'BEMHTML', 'jquery', 'certificate-change'], function(provide, BEMDOM, BEMHTML, $, certificateChange) {
    provide(BEMDOM.decl(this.name,
            {
                onSetMod: {
                    'js': {
                        'inited': function() {
                            //console.log(' Hello from block "tiles-change"!! ');

                            certificateChange.on('select-click', function(e,data){

                                console.log("i've catched select-click");
                                console.log('data', data);

                                BEMDOM.append( this.domElem, BEMHTML.apply( data ));
                            }, this);

                        }
                    }
                }
            },
            {

            }
        )
    );
});