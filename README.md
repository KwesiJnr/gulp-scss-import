#gulp-scss-import
A Gulp plugin to create an import scss from a list of files

#Install

> npm install --save gulp-scss-import

#Usage

Import it in your `gulpfile.js`

```javascript
var gulpScssImport = require('gulp-scss-import');
```

Use it in a task!

```javascript
// some variables
var stylesToImport = ['styles/**/*'];
var distDir = 'dist';
var stylesOutputDir = distDir + '/styles'
var importOutputFile = '_style-core.scss';

gulp.task('generate-directives-import', function(){
	// need this to get the "../../" (referring to the right scss files' path)
	// for importing the right file without using absolute path
	var relativePathFromStyles = path.relative(stylesOutputDir, distDir) + "\\";
	
	gulp.src(stylesToImport, {base: relativePathFromStyles })
		.pipe(filter(['**/*.scss']))
		.pipe(gulpScssImport(importOutputFile))
		.pipe(gulp.dest(stylesOutputDir));

});
```

Import the resulting scss!

```scss
@import 'style-core';
```

#Credits

Thanks to [stevelacy/gulp-mix-test](https://github.com/stevelacy/gulp-mix-test)