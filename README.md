# PostCSS Commas

<a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="80" height="80" align="right"></a>

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[PostCSS Commas] allows you to declare multiple, comma-separated properties in CSS.

```css
/* before */

.foo {
	position: absolute;
	top, left: 0;
	margin, padding: 1em;
}

/* after */

.foo {
	position: absolute;
	top: 0;
	left: 0;
	margin: 1em;
	padding: 1em;
}
```

## Usage

Add [PostCSS Commas] to your build tool:

```bash
npm install postcss-commas --save-dev
```

#### Node

```js
require('postcss-commas').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [PostCSS Commas] as a PostCSS plugin:

```js
postcss([
	require('postcss-commas')()
]).process(YOUR_CSS);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [PostCSS Commas] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-commas')()
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [PostCSS Commas] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-commas')()
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[ci]:      https://travis-ci.org/jonathantneal/postcss-commas
[ci-img]:  https://img.shields.io/travis/jonathantneal/postcss-commas.svg
[npm]:     https://www.npmjs.com/package/postcss-commas
[npm-img]: https://img.shields.io/npm/v/postcss-commas.svg

[Gulp PostCSS]:  https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]:       https://github.com/postcss/postcss

[PostCSS Commas]: https://github.com/jonathantneal/postcss-commas
