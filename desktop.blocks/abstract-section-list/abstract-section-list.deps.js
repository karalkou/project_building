([
	{
		mustDeps: [
			{block: 'link'},
			{block: 'link', mods: {color: 'red'}},
		]
	},
	{
		shouldDeps: [
			{ block: 'abstract-section-list', elem: 'item', mods: { event: true } },
			{ block: 'abstract-section-list', elem: 'item'},
			{ block: 'abstract-section-list', elem: 'item', mods: { 'pick-out': true } },
			{ block: 'abstract-section-list', elem: 'title'},
			{ block: 'abstract-section-list', elem: 'subtitle'},
			{ block: 'abstract-section-list', elem: 'subtitle', mods: { size: 's' } },
			{ block: 'abstract-section-list', elem: 'content'},
			{ block: 'link', mods: { color: 'black' } },
			{ block: 'img'},
		]
	}
])
