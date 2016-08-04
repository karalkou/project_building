([
	{
		shouldDeps: [
			{ block: 'tiles-certificate', elem: 'item'},
			{ block: 'tiles-certificate', elem: 'item' , mods: { width: 'full'} },
			{ block: 'tiles-certificate', elem: 'item' , mods: { col: 'three', width: 'one-third'} },
			{ block: 'tiles-certificate', elem: 'link'},
			{ block: 'tiles-certificate', elem: 'link', mods: { size: true} },
			{ block: 'tiles-certificate', elem: 'animation'},
			{ block: 'tiles-certificate', elem: 'text' },
			{ block: 'tiles-certificate', elem: 'text', mods: { size: true } },
			{ block: 'tiles-certificate', elem: 'title' },
			{ block: 'tiles-certificate', elem: 'subtitle' },
			{ block: 'tiles-certificate', elem: 'logo' },
			{ block: 'tiles-certificate', elem: 'logo', mods: { size: true } },
			{ block: 'tiles-certificate', elem: 'btn' },
			{ block: 'tiles-certificate', elem: 'btn', mods: { size: true } },
			{ block: 'tiles-certificate', elem: 'animation-text' },
			{ block: 'tiles-certificate', elem: 'animation-text', mods: [ { size: true },{ bold: true },{ expiration: true } ] },
			{ block: 'tiles-certificate', elem: 'animation-text', mods:  { 'left-position': true }  },
			{ block: 'btn' },
			{ block: 'btn', mods: { color: 'red-transparent' } },
			{ block: 'tiles-certificate', elem: 'select-label' },
			{ block: 'tiles-certificate', elem: 'title-company' },
			{ block: 'certificate-change' }
		]
	},
	{
		mustDeps: { block: 'i-bem' }
	}
])