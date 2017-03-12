var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    replace = require('gulp-replace'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

var DEST = 'build/';

gulp.task('scripts', function () {
    return gulp.src([
        'src/js/helpers/*.js',
        'src/js/*.js',
    ])
        .pipe(concat('custom.js'))
        .pipe(gulp.dest(DEST + '/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(DEST + '/js'))
        .pipe(browserSync.stream());
});

gulp.task("lib", function () {

    gulp.src([
        "vendors/animate.css/animate.min.css"
    ]).pipe(gulp.dest(DEST + '/lib/animate.css'));

    gulp.src([
        "vendors/autosize/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/autosize'));

    gulp.src([
        "vendors/bootstrap/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/bootstrap'));

    gulp.src([
        "vendors/bootstrap-daterangepicker/daterangepicker.css",
        "vendors/bootstrap-daterangepicker/daterangepicker.js",
    ]).pipe(gulp.dest(DEST + '/lib/bootstrap-daterangepicker'));

    gulp.src([
        "vendors/bootstrap-progressbar/*.js",
        "vendors/bootstrap-progressbar/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/bootstrap-progressbar'));

    gulp.src([
        "vendors/bootstrap-wysiwyg/j*/*",
        "vendors/bootstrap-wysiwyg/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/bootstrap-wysiwyg'));


    gulp.src([
        "vendors/Chart.js/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/Chart.js'));

    gulp.src([
        "vendors/cropper/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/cropper'));

    gulp.src([
        "vendors/datatables.net/j*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net'));

    gulp.src([
        "vendors/datatables.net-bs/j*/*",
        "vendors/datatables.net-bs/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-bs'));

    gulp.src([
        "vendors/datatables.net-buttons/j*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-buttons'));

    gulp.src([
        "vendors/datatables.net-buttons-bs/j*/*",
        "vendors/datatables.net-buttons-bs/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-buttons-bs'));

    gulp.src([
        "vendors/datatables.net-fixedheader/j*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-fixedheader'));

    gulp.src([
        "vendors/datatables.net-fixedheader-bs/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-fixedheader-bs'));

    gulp.src([
        "vendors/datatables.net-keytable/j*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-keytable'));

    gulp.src([
        "vendors/datatables.net-responsive/j*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-responsive'));

    gulp.src([
        "vendors/datatables.net-responsive-bs/j*/*",
        "vendors/datatables.net-responsive-bs/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-responsive-bs'));

    gulp.src([
        "vendors/datatables.net-scroller/j*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-scroller'));

    gulp.src([
        "vendors/datatables.net-scroller-bs/c*/*"
    ]).pipe(gulp.dest(DEST + '/lib/datatables.net-scroller-bs'));

    gulp.src([
        "vendors/DateJS/build/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/DateJS'));

    gulp.src([
        "vendors/devbridge-autocomplete/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/devbridge-autocomplete'));

    gulp.src([
        "vendors/dropzone/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/dropzone'));

    gulp.src([
        "vendors/echarts/dis*/**/*",
        "vendors/echarts/ma*/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/echarts'));

    gulp.src([
        "vendors/eve/eve.js"
    ]).pipe(gulp.dest(DEST + '/lib/eve'));

    gulp.src([
        "vendors/fastclick/lib/fastclick.js"
    ]).pipe(gulp.dest(DEST + '/lib/fastclick'));

    gulp.src([
        "vendors/Flot/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/Flot'));

    gulp.src([
        "vendors/flot-spline/js/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/flot-spline'));

    gulp.src([
        "vendors/flot.curvedlines/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/flot.curvedlines'));

    gulp.src([
        "vendors/flot.orderbars/js/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/flot.orderbars'));

    gulp.src([
        "vendors/font-awesome/**/*",
        "!vendors/font-awesome/{less,less/**}",
        "!vendors/font-awesome/{scss,scss/**}",
        "!vendors/font-awesome/*"
    ]).pipe(gulp.dest(DEST + '/lib/font-awesome'));

    gulp.src([
        "vendors/fullcalendar/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/fullcalendar'));

    gulp.src([
        "vendors/gauge.js/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/gauge.js'));

    gulp.src([
        "vendors/google-code-prettify/bin/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/google-code-prettify'));

    gulp.src([
        "vendors/iCheck/skin*/**/*",
        "vendors/iCheck/*.js",
    ]).pipe(gulp.dest(DEST + '/lib/iCheck'));

    gulp.src([
        "vendors/ion.rangeSlider/cs*/*",
        "vendors/ion.rangeSlider/im*/*",
        "vendors/ion.rangeSlider/j*/*",
    ]).pipe(gulp.dest(DEST + '/lib/ion.rangeSlider'));

    gulp.src([
        "vendors/jquery/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jquery'));

    gulp.src([
        "vendors/jquery-knob/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jquery-knob'));

    gulp.src([
        "vendors/jquery-mousewheel/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/jquery-mousewheel'));

    gulp.src([
        "vendors/jQuery-Smart-Wizard/image*/*",
        "vendors/jQuery-Smart-Wizard/j*/*",
        "vendors/jQuery-Smart-Wizard/style*/*"
    ]).pipe(gulp.dest(DEST + '/lib/jQuery-Smart-Wizard'));

    gulp.src([
        "vendors/jquery-sparkline/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jquery-sparkline'));

    gulp.src([
        "vendors/jquery.easy-pie-chart/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jquery.easy-pie-chart'));

    gulp.src([
        "vendors/jquery.hotkeys/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/jquery.hotkeys'));


    gulp.src([
        "vendors/jquery.inputmask/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jquery.inputmask'));

    gulp.src([
        "vendors/jquery.tagsinput/dist/**/*",
        "vendors/jquery.tagsinput/src/jquery.tagsinput.js"
    ]).pipe(gulp.dest(DEST + '/lib/jquery.tagsinput'));

    gulp.src([
        "vendors/jqvmap/dist/**/*",
        "vendors/jqvmap/example*/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jqvmap'));

    gulp.src([
        "vendors/jszip/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/jszip'));

    gulp.src([
        "vendors/malihu-custom-scrollbar-plugin/*.js",
        "vendors/malihu-custom-scrollbar-plugin/*.css",
        "vendors/malihu-custom-scrollbar-plugin/*.png",
    ]).pipe(gulp.dest(DEST + '/lib/malihu-custom-scrollbar-plugin'));

    gulp.src([
        "vendors/mjolnic-bootstrap-colorpicker/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/mjolnic-bootstrap-colorpicker'));

    gulp.src([
        "vendors/mocha/medi*/*",
        "vendors/mocha/*.css",
        "vendors/mocha/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/mocha'));

    gulp.src([
        "vendors/moment/min/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/moment'));

    gulp.src([
        "vendors/morris.js/morris.css",
        "vendors/morris.js/morris*.js"
    ]).pipe(gulp.dest(DEST + '/lib/morris.js'));

    gulp.src([
        "vendors/normalize-css/*.css"
    ]).pipe(gulp.dest(DEST + '/lib/normalize-css'));

    gulp.src([
        "vendors/nprogress/*.css",
        "vendors/nprogress/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/nprogress'));

    gulp.src([
        "vendors/parsleyjs/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/parsleyjs'));

    gulp.src([
        "vendors/pdfmake/build/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/pdfmake'));


    gulp.src([
        "vendors/pnotify/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/pnotify'));

    gulp.src([
        "vendors/raphael/raphael*.js"
    ]).pipe(gulp.dest(DEST + '/lib/raphael'));

    gulp.src([
        "vendors/requirejs/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/requirejs'));

    gulp.src([
        "vendors/select2/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/select2'));

    gulp.src([
        "vendors/skycons/*.js"
    ]).pipe(gulp.dest(DEST + '/lib/skycons'));

    gulp.src([
        "vendors/starrr/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/starrr'));

    gulp.src([
        "vendors/switchery/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/switchery'));

    gulp.src([
        "vendors/transitionize/dist/**/*"
    ]).pipe(gulp.dest(DEST + '/lib/transitionize'));

    gulp.src([
        "vendors/validator/*.js",
        "vendors/validator/*.css"
    ]).pipe(gulp.dest(DEST + '/lib/validator'));

})

// TODO: Maybe we can simplify how sass compile the minify and unminify version
var compileSASS = function (filename, options) {
    return sass('src/scss/*.scss', options)
        .pipe(autoprefixer('last 2 versions', '> 5%'))
        .pipe(concat(filename))
        .pipe(gulp.dest(DEST + '/css'))
        .pipe(browserSync.stream());
};

gulp.task('sass', function () {
    return compileSASS('custom.css', {});
});

gulp.task('sass-minify', function () {
    return compileSASS('custom.min.css', { style: 'compressed' });
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './production/index.html'
    });
});

gulp.task('watch', function () {
    // Watch .html files
    gulp.watch('production/*.html', browserSync.reload);
    // Watch .js files
    gulp.watch('src/js/*.js', ['scripts']);
    // Watch .scss files
    gulp.watch('src/scss/*.scss', ['sass', 'sass-minify']);
});

// Default Task
gulp.task('default', ['browser-sync', 'watch']);

gulp.task("dist", ['lib'], function () {

    gulp.src([
        "production/c*/*",
        "production/image*/*",
        "production/j*/*"
    ]).pipe(gulp.dest(DEST + '/html'));


    gulp.src([
        "production/*.html"
    ])
    .pipe(replace('../build/', '../'))
    .pipe(gulp.dest(DEST + '/html'));

})