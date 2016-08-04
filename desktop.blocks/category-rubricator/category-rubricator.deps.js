([
    {
        mustDeps: [
            { block: 'i-bem' }
        ],
        shouldDeps: [
            {
                elems: [
                    { elem: 'content'        },
                    { elem: 'content-outline'},
                    { elem: 'header'         },
                    { elem: 'header-content' },
                    { elem: 'header-item'    },
                    { elem: 'header-text'    },
                    { elem: 'arrow'          },
                    { elem: 'error'          },
                    { elem: 'rubrics'        },
                    { elem: 'row'            },
                    { elem: 'column'         },
                    { elem: 'list'           },
                    { elem: 'item'           },
                    { elem: 'link'           },
                    { elem: 'count'          },
                    { elem: 'header-text', mods: { 'is-link': true } },
                    { elem: 'arrow'      , mods: { visible  : true } },
                    { elem: 'link'       , mods: { 'is-leaf': true } },
                ]
            },
            { block: 'category-rubricator', mods: { hidden: true } },
            { block: 'category-list' },
            { block: 'category-list-more' },
            { block: 'category-list-more', mods: { visible: true } },
            { block: 'url-block' }
        ]
    },
    {
        tech: 'js',
        mustDeps   : [
            {
                block: 'category-rubricator',
                tech: 'bemhtml'
            },
            {
                block: 'category-list',
                tech: 'bemhtml'
            },
            {
                block: 'category-list',
                mods: { wrapper: 'none' },
                tech: 'bemhtml'
            },
            {
                block: 'category-list-more',
                tech: 'bemhtml'
            }
        ]
    }
])