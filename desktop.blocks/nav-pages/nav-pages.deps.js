([
	{
		mustDeps: [
			{ block: 'link' },
			{ block: 'link', mods: { color: 'red' } },
		]
	},
	{
		shouldDeps: [
			{ block: 'nav-pages', elem: 'next' },
			{ block: 'nav-pages', elem: 'prev' }
		]
	}
])