var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

function styles() {
  return gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'))
  .pipe(browserSync.stream());
}

function watch(){
  gulp.watch('./src/css/.*css',styles);

  browserSync.init({
    // server: './',
    proxy: "localhost:3000"
    // tunnel:true
  },
  );

  gulp.watch('./scss/**/**/*.scss', styles);
  gulp.watch('./*.html').on('change', browserSync.reload); 
  gulp.watch('./views/**/*.ejs').on('change', browserSync.reload); 
};



gulp.task('watch', watch);


// gulp.task('default', ['serve']);


