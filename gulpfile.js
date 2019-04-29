const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const broswerSync = require("browser-sync");
const eslint = require("gulp-eslint");
const prettyError = require("gulp-prettyError");

gulp.task("lint", function() {
  return gulp
    .src(["./js/*.js"])
    .pipe(prettyError())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task(
  "scripts",
  gulp.series("lint", function() {
    return gulp
      .src("./js/*.js")
      .pipe(terser())
      .pipe(rename({ extname: ".min.js" }))
      .pipe(gulp.dest("./build/js"));
  })
);

gulp.task("browser-sync", function(done) {
  broswerSync.init({
    server: {
      baseDir: "./"
    }
  }); // end browser-sync init

  gulp
    .watch(["index.html", "css/*.css", "build/js/*.js"])
    .on("change", broswerSync.reload);
}); //browser-sync

gulp.task("watch", function() {
  gulp.watch("js/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.parallel("browser-sync", "watch"));
