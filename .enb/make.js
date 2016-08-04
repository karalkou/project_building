var fs = require('fs'),
	path = require('path'),
	techs = {
		// essential
		fileProvider: require('enb/techs/file-provider'),
		fileMerge: require('enb/techs/file-merge'),

		// optimization
		borschik: require('enb-borschik/techs/borschik'),

		// css
		stylus: require('enb-stylus/techs/stylus'),

		// js
		browserJs: require('enb-js/techs/browser-js'),

		// bemtree
		// bemtree: require('enb-bemxjst/techs/bemtree'),

		// bemhtml
		bemhtml: require('enb-bemxjst/techs/bemhtml'),
		bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')

	},
	enbBemTechs = require('enb-bem-techs'),
	merged = require('./techs/merged'),
	levels = [
		{ path: 'libs/bem-core/common.blocks', check: false },
		{ path: 'libs/bem-core/desktop.blocks', check: false },
		'desktop.blocks',
		'form.blocks',
		'template.blocks'
	];

module.exports = function(config) {
	var isProd = process.env.YENV === 'production',
		mergedBundleName = 'merged',
		pathToMargedBundle = path.join('desktop.bundles', mergedBundleName);

	fs.existsSync(pathToMargedBundle) || fs.mkdirSync(pathToMargedBundle);

	merged(config, pathToMargedBundle);

	config.nodes('*.bundles/*', function(nodeConfig) {
		var isMergedNode = path.basename(nodeConfig.getPath()) === mergedBundleName;

		isMergedNode || nodeConfig.addTechs([
			[techs.fileProvider, { target: '?.bemjson.js' }],
			[enbBemTechs.bemjsonToBemdecl]
		]);

		nodeConfig.addTechs([
			// essential
			[enbBemTechs.levels, { levels: levels }],
			[enbBemTechs.deps],
			[enbBemTechs.files],

			// css
			[techs.stylus, {
				target: '?.css',
				sourcemap: false,
				autoprefixer: {
					browsers: ['last 20 versions', 'IE > 8', 'Opera > 11', 'Firefox >= 5', 'Chrome > 10']
				}
			}],
			// bemtree
			// [techs.bemtree, { sourceSuffixes: ['bemtree.js', 'bemtree'] }],

			// bemhtml
			[techs.bemhtml, { sourceSuffixes: ['bemhtml.js', 'bemhtml'] }],
			[techs.bemjsonToHtml],

			// client bemhtml
			[enbBemTechs.depsByTechToBemdecl, {
				target: '?.bemhtml.bemdecl.js',
				sourceTech: 'js',
				destTech: 'bemhtml'
			}],
			[enbBemTechs.deps, {
				target: '?.bemhtml.deps.js',
				bemdeclFile: '?.bemhtml.bemdecl.js'
			}],
			[enbBemTechs.files, {
				depsFile: '?.bemhtml.deps.js',
				filesTarget: '?.bemhtml.files',
				dirsTarget: '?.bemhtml.dirs'
			}],
			[techs.bemhtml, {
				target: '?.browser.bemhtml.js',
				filesTarget: '?.bemhtml.files',
				sourceSuffixes: ['bemhtml.js', 'bemhtml']
			}],

			// js
			[techs.browserJs, { includeYM: true }],
			[techs.fileMerge, {
				target: '?.js',
				sources: ['?.browser.js', '?.browser.bemhtml.js']
			}],

			// borschik
			[techs.borschik, { sourceTarget: '?.js', destTarget: '_?.js', minify: isProd }],
			[techs.borschik, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', minify: isProd }],
		]);

		nodeConfig.addTargets(isMergedNode ? ['_?.css', '_?.js'] : ['?.html']);
	});
};
