# PostCSS Commas [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Gitter Chat][git-img]][git-url]

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

[cli-url]: https://github.com/csstools/postcss-commas/actions/workflows/ci.yaml/badge.svg
[cli-img]: https://github.com/csstools/postcss-commas/actions/workflows/ci.yaml
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/postcss-commas.svg
[npm-url]: https://www.npmjs.com/package/postcss-commas
[npm-img]: https://img.shields.io/npm/v/postcss-commas.svg

[Gulp PostCSS]:  https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]:       https://github.com/postcss/postcss

[PostCSS Commas]: https://github.com/jonathantneal/postcss-commas
