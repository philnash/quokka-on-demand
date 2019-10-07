//Variables
var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

//File Paths
var sassFiles = 'scss/**/*.scss',
	mainSassFile = 'scss/style.scss',
	cssFiles = './public/'

//Compile main sass into css

function sassy() {
	return gulp
		.src(mainSassFile)
		.pipe(sass().on('error', sass.logError)) //Using gulp-sass
		.pipe(gulp.dest(cssFiles))
}

//Watch for changes in sass files and running sass compile
function watch() {
	browserSync.init({
		proxy: 'http://localhost:3000/',
	})

	gulp.watch(sassFiles, sassy)
	gulp.watch(['./scss/**/*.scss', './index.html']).on('change', reload)
}

exports.sassy = sassy
exports.watch = watch
