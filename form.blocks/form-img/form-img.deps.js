([
    {
        /*mustDeps: 'i-bem',*/
        shouldDeps: [
            {
                elems: [
                    { elem: 'place' },
                    { elem: 'pseudoFileLoader' },
                    { elem: 'fileLoader' },
                    { elem: 'cross', mods: { visible: true } }
                ]
            },
            { block: 'offset', mods: { padding: 'reset' } },
            { block: 'input' }
        ]
    },
    {
        tech: 'js',
        mustDeps   : [
            {
                block: 'input',
                tech: 'bemhtml'
            }
        ]
    }
])