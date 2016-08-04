({
	mustDeps: [
		{ block: 'top-navigation-column' },
	],
	shouldDeps: [
		{ block: 'header' },
		{ block: 'header-push' },
		{ block: 'header', mods: { moderator: true } },
		{ block: 'top-navigation' },
		{ block: 'top-navigation_section-wrapper' },
		{ block: 'top-navigation_section' },
		{ block: 'top-navigation-additions' },

		{ block: 'top-navigation-column', mods: {type: 'special' }},
		{ block: 'top-navigation-column', mods: {type: 'no-display' }},
	]	
})
