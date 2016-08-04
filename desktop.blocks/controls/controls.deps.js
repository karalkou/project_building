([
	{
		mustDeps: 'i-bem',
		shouldDeps: { elem: 'jquery' }
	},
	{
		tech: 'js',
		mustDeps   : [
			{
				block: 'abstract-section-list',
				mods : { wrapper: 'none'},
				tech: 'bemhtml'
			},
			{
				block: 'abstract-section-list',
				elem: 'item',
				tech: 'bemhtml'
			}
		]
	},
	{
		mustDeps: [
			{ block: 'tabs'},
			{ block: 'form-select'}
		],
		shouldDeps :[
			{ block: 'events', elem: 'message' }
		]
	}
])