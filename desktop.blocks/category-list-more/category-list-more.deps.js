([
    {
        mustDeps: [
            { block: 'i-bem' }
        ]
    },
    {
        shouldDeps: [
            { block: 'category-list' },
            { block: 'category-list-more', mods: { visible: true } },
            { block: 'category-list-more', elem: 'btn' }
        ]
    },
    {
        tech: 'js',
        mustDeps   : [
            {
                block: 'category-list',
                tech: 'bemhtml'
            }
        ]
    }
])