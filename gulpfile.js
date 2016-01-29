var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var vars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var pxtorem = require('postcss-pxtorem');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');
var newer = require('gulp-newer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var nano = require('gulp-cssnano');
var atImport = require('postcss-import');
var notify = require("gulp-notify");
var postCSS_InlineComment = require('postcss-inline-comment');


var imgSrc = './src/img/*';
var imgDist = './dist/img';
var jsSrc = './src/js/*.js';
var jsDist = './dist/js';

function errorAlertJS(error) {
    notify.onError({
        title: "Gulp JavaScript",
        subtitle: "Algo esta mal en tu JavaScript!",
        sound: "Basso"
    })(error);
    console.log(error.toString());
    this.emit("end");
};

function errorAlertPost(error) {
    notify.onError({
        title: "Gulp postCSS",
        subtitle: "Algo esta mal en tu CSS!",
        sound: "Basso"
    })(error);
    console.log(error.toString());
    this.emit("end");
};

gulp.task('imagemin', function() {
    return gulp.src(imgSrc)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(imgDist));
});



gulp.task('images', function() {
    return gulp.src(imgSrc)
        .pipe(newer(imgDist))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDist));
});

gulp.task('compress', function() {
    return gulp.src(jsSrc)
        .pipe(uglify())
        .on("error", errorAlertJS)
        .pipe(gulp.dest(jsDist))
        .pipe(notify({
            message: 'JavaScript complete'
        }));

});

gulp.task('css', function() {
    var processors = [
        vars,
        nested,
        atImport,
        autoprefixer,
        pxtorem({
            root_value: 16,
            unit_precision: 2,
            prop_white_list: ['font-size', 'line-height', 'padding'],
            replace: true,
            media_query: false
        }),
        postCSS_InlineComment
    ];
    return gulp.src('./src/css/styles.css')

    .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .on("error", errorAlertPost)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({
            message: 'postCSS complete'
        }));
});

gulp.task('minify', function() {
    return gulp.src('./dist/css/styles.css')
        .pipe(nano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({
            message: 'CSSnano task complete'
        }));
});

gulp.task('default', function() {
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/img/**', ['images']);
    gulp.watch('./src/js/**', ['compress']);
    gulp.watch('./dist/css/*.css', ['minify']);
});