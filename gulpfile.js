var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

function styles() {
  return gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
}

function watch(){
  gulp.watch('./src/css/.*css',styles);

  browserSync.init({
    // server: './'
    proxy: "localhost:1000",
    ws: true
    // tunnel:true
  },
  );

  function reload(done) {
    browserSync.reload();
    done();
  }
  // gulp.watch('./scss/**/*.scss', styles);
  gulp.watch('./scss/**/*.scss', gulp.series(styles, reload));
  gulp.watch('./*.html').on('change', browserSync.reload); 
  gulp.watch('./views/**/*.ejs').on('change', browserSync.reload); 
};



gulp.task('watch', watch);


// gulp.task('default', ['serve']);


