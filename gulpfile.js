/**
 * Created by andreiGladkov on 06.04.15.
 * Modified by Karalkou on 24.12.16.
 */
var gulp = require('gulp'),
	rename = require("gulp-rename"),
	prettify = require('gulp-jsbeautifier'),
	scp = require('gulp-scp2'),
	uglify = require('gulp-uglify');

//Переложим HTML в папку pages/
gulp.task('appAssemblyHTML', function(){
	return gulp.src('desktop.bundles/**/*.html')
		.pipe(prettify({indentSize: 2}))
		.pipe(gulp.dest('pages/'))
});

//Переложим CSS в папку pages/merged/
gulp.task('appAssemblyCSS', function(){
	return gulp.src('desktop.bundles/merged/_merged.css')
		.pipe(gulp.dest('pages/merged/'))
});

//Переложим JS в папку pages/merged/
gulp.task('appAssemblyJS', function(){
	return gulp.src('desktop.bundles//merged/_merged.js')
		.pipe(gulp.dest('pages/merged/'))
});


//watch task
gulp.task('watch', function(){
	gulp.watch('desktop.bundles/*/.html', ['appAssemblyHTML']);
	gulp.watch('desktop.bundles/*/.css', ['appAssemblyCSS']);
	gulp.watch('desktop.bundles/*/.js', ['appAssemblyJS']);
});

// generate sprite.png and _sprite.styl
gulp.task('sprites', ['appAssemblyCSS'], function () {
	return gulp.src('img/*.png')
		.pipe(sprite({
			name: 'sprite',
			style: '_sprite.styl',
			cssPath: 'pages/merged/_merged.css',
			processor: 'css'
		}))
		.pipe(gulp.dest('img-sprite'))
});

// deployment task
//gulp.task('deploy', ['appAssemblyHTML', 'appAssemblyCSS', 'appAssemblyJS', 'compressJS'], function() {
//	return gulp.src('pages/**/*')
//		.pipe(scp({
//			host: '',
//			username: '',
//			password: '',
//			dest: ''
//		}))
//		.on('error', function(err) {
//			console.log('scp error: ', err);
//		});
//});

// minify JS
gulp.task('compressJS', ['appAssemblyJS'], function() {
	return gulp.src('pages/merged/*.js')
		.pipe(uglify())
		.pipe(rename("_merged.minify.js"))
		.pipe(gulp.dest('pages/merged/'));
});

//-------- DEFAULT --------//
gulp.task('default', ['appAssemblyHTML', 'appAssemblyCSS', 'appAssemblyJS', 'compressJS', 'watch']);
//gulp.task('default', ['sprites']);

