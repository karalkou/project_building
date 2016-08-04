({
    shouldDeps: [
        'btn',
        'img',
        { elems: [ 'logo', 'text', 'title', 'button'] },

        { block: 'article-preview', elem: 'title', mods: { color: true } },
        { block: 'article-preview', elem: 'text', mods: { color: true } },

        { block: 'event-line', mods: { color: 'black' } },
        { block: 'event-line', elems: [ 'item', 'city', 'date', 'place', 'type' ]},
        { block: 'event-line', elem: 'item',  mods: { invisible: true, color: true } },
        { block: 'event-line', elem: 'city',  mods: { invisible: true, color: true } },
        { block: 'event-line', elem: 'date',  mods: { invisible: true, color: true } },
        { block: 'event-line', elem: 'time',  mods: { invisible: true, color: true } },
        { block: 'event-line', elem: 'place', mods: { invisible: true, color: true } },
        { block: 'event-line', elem: 'type',  mods: { invisible: true, color: true } },
        { block: 'event-line', mods: { color: true } }
    ]
})