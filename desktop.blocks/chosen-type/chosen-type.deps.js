([
    {
        mustDeps: 'i-bem',
        shouldDeps: [
            { elem: 'jquery' },
            { block: 'chosen-type', elem: 'items-wrap', elemMods: { visible: true } },
            { block: 'chosen-type', elem: 'item' },
            { block: 'chosen-type', elem: 'item-link' },
            { block: 'link', mods: { pseudo: true, color: 'black-red' } },
            { block: 'chosen-item' },
            { block: 'chosen-item', elem: 'name' },
            { block: 'chosen-item', elem: 'cross' },
            { block: 'remove' },
            { block: 'remove', elem: 'insides' },
            { block: 'remove', elem: 'del' },
            { block: 'btn' }
        ]
    },
    {
        tech: 'js',
        mustDeps   : [
            {
                block: 'chosen-type',
                tech: 'bemhtml'
            },
            {
                block: 'chosen-item',
                tech: 'bemhtml'
            }
        ]
    }
])