({
	shouldDeps: [
		{
			elems: [
				{ elem: 'item'},
				{ elem: 'item', mods: { 'unique': true } },
				{ elem: 'title' },
				{ elem: 'section' },
				{ elem: 'section', mods: { second: true } },
				{ elem: 'description' },
				{ elem: 'img' },
				{ elem: 'label' },
				{ elem: 'link', mods: { pic: 'play' } },
			]
		},
		{ block: 'img' },
		{ block: 'link', mods: { color: 'white-transparent' } }
	],
	mustDeps : [
		{ block: 'clear' }
	]
})