([
    {
        mustDeps: [
            { block: 'i-bem'          },
            { block: 'chosen-type'    },
            { block: 'rubricator-pop' },
            { block: 'remove'         }
        ],
        shouldDeps: [
            {
                elems: [
                    { elem: 'content'        },
                    { elem: 'header'         },
                    { elem: 'header-content' },
                    { elem: 'header-item'    },
                    { elem: 'header-text'    },
                    { elem: 'arrow'          },
                    { elem: 'error'          },
                    { elem: 'divider'        },
                    { elem: 'rubrics'        },
                    { elem: 'row'            },
                    { elem: 'column'         },
                    { elem: 'list'           },
                    { elem: 'item'           },
                    { elem: 'link'           },
                    { elem: 'count'          },
                    { elem: 'special-btn'    },
                    { elem: 'special-btn-pseudolink' },
                    { elem: 'header-text', mods: { 'is-link': true } },
                    { elem: 'arrow'      , mods: { visible  : true } },
                    { elem: 'link'       , mods: { 'is-leaf': true } },
                ]
            },
            { block: 'line' },
            { block: 'remove' },
            { block: 'remove', elem: 'insides' },
            { block: 'remove', elem: 'del' },
            { block: 'rubricator', mods: { hidden: true } }
        ]
    },
    {
        tech: 'js',
        mustDeps   : [
            {
                block: 'rubricator',
                tech: 'bemhtml'
            }
        ]
    }
])