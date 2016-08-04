([
    {
        mustDeps: [
            { block: 'form' }
        ]

    },
    {
        shouldDeps: [
            {
                elems: [
                    { elem: 'real' },
                    { elem: 'unreal', mods: { checked: true } },
                    { elem: 'label' }
                ]
            }
        ]
    }
])