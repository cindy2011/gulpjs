var gulp = require("gulp");
var babel = require("gulp-babel");
gulp.task('fcopy', function() {
    //文件copy
    gulp.src('src/**/*.*') //src下面所有目录文件
        //让文件流走向下一个环节
        .pipe(gulp.dest('dist/')); //dest指定文件输出地方

});
gulp.task("jsbabel", function() {
    return gulp.src("src/**/*.js") // ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
gulp.task('watch', function() {
    var watcher = gulp.watch('src/**/*.js', ['jsbabel','fcopy']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})
