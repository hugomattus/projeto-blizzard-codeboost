const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// COMPILANDO O SASS E DANDO REFRESH NA PAGINA
function compilaSass(){
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}

// TAREFA SASS
gulp.task('sass', compilaSass);


function pluginsCss(){
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())

}

gulp.task('pluginscss', pluginsCss);

// FUNÇÃO COMPLIANDO JAVASCRIPT
function gulpJs(){
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
}

// COMPILA O JAVASCRIPT
gulp.task('alljs', gulpJs)

function pluginsJs() {
    return gulp
    .src(['./js/lib/aos.min.js','./js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
  }
  
  gulp.task('pluginsjs', pluginsJs);

// FUNÇÃO BROWSER-SYNC
function browser(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    })
}

// TAREFA DO BROWESER-SYNC
gulp.task('browser-sync', browser);


// TAREFA DO WATCH PARA ALTERAR HTML E SCSS E JAVASCRIPT
function watch(){
    gulp.watch('scss/*.scss', compilaSass);

    gulp.watch('css/lib/*.css', pluginsCss)

    gulp.watch('*.html').on('change', browserSync.reload);

    gulp.watch('js/scripts/*js', gulpJs);

    gulp.watch('js/lib/*js', pluginsJs);

}

// TAREFA DO WATCH
gulp.task('watch', watch);



// TAREFAS DEFAULT E BROWSER-SYNC QUE OS EXECUTAM
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'pluginscss', 'alljs', 'pluginsjs'));

