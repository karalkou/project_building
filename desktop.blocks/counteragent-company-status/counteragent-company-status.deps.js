/**
 * Created on 15.06.2016.
 */
({
    shouldDeps: [
        { block: 'link' },
        { block: 'status' },
        {
            elems: [
                { elem: 'pic' },
                { elem: 'pic', mods: { attention: true } },
                { elem: 'pic', mods: { danger:    true } },
                { elem: 'pic', mods: { success:   true } },
                { elem: 'text' },
                { elem: 'text', mods: { attention: true } },
                { elem: 'text', mods: { danger:    true } },
                { elem: 'text', mods: { success:   true } },
            ]
        }
    ]
})