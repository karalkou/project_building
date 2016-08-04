({
	block: 'page',
	mods: { 'sticky-push': true},
	title: 'О Клубе клиентов',
	head: [
		{
			elem : 'meta',
			attrs : { name : 'viewport', content: 'width=1260' },
		},
		{ elem: 'css', url: '../merged/_merged.css' },
		{
			elem : 'conditional-comment',
			condition : '< IE 9',
			content : [
				{ elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
				{ elem : 'js', url : '/js/modernizr-html5shiv-respond.min.js' },
				{ elem : 'js', url : '/js/polifil_event.js' }
			]
		},
		{ elem: 'js', url: '../merged/_merged.js' }
	],
	content: [
		{
			block: 'blur',
			js: true,
			url: '/img/background-blur/background-gradient-service-min.jpg'
		},
		{
			block: 'container',
			content: {
				block: 'row',
				content: {
					block: 'col-md-offset-2',
					mix: [{block: 'col-md-8'}],
					content: [
						{
							block: 'article',
							elem: 'title',
							content: 'О Клубе'
						}
					]
				}
			}
		},
		{
			block: 'content',
			content: {
				elem: 'inner',
				content: [
					{
						block: 'row',
						mix: { block: 'content', elem: 'manager' },
						content: {
							block: 'col-md-offset-2',
							mix: { block: 'col-md-8' },
							content: [
								{
									tag: 'h3',
									content: 'Мы хотим, чтобы бизнес чаще появлялся и быстрее рос.'
								},
								{
									tag: 'h4',
									content: 'Как этого добиться?'
								},
								{
									tag: 'ul',
									content: [
										{
											tag: 'li',
											content: 'показать предпринимателям лучшие приемы и практики'
										},
										{
											tag: 'li',
											content: 'помочь обзавестись надежными партнерами и поставщиков'
										},
										{
											tag: 'li',
											content: 'предложить лучшие сервисы для бизнеса на лучших условиях'
										},
										{
											tag: 'li',
											content: 'предоставить пространство для обмена опытом.'
										},
									]
								},
								{
									tag: 'h3',
									content: 'Мы хотим, чтобы людей, меняющих мир к лучшему, было больше.'
								},
								{
									tag: 'p',
									content: 'И мы хотим менять мир вместе с вами.'
								},
								{
									tag: 'p',
									content: 'Присоединяйтесь!'
								},
								{
									tag: 'h3',
									content: 'Правила для Партёров Клуба'
								},

								{
									tag: 'p',
									content: [
										{
											tag: 'a',
											attrs: { href: '/pages/rules/rules.html'},
											content: 'Правила размещения специальных предложений в Клубе'
										}
									]
								}
							]
						}
					},
				]
			}
		}
	]
});


