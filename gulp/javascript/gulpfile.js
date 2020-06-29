const { series,parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb){
   return gulp.src('src/**/*.js') // ** significa que vai buscar qq subpasta que esteja dentro de SRC
        .pipe(babel({
            comments: false,
            presets: ["env"] // env vai buscar o JS mais novo possivel
        })) // pipe faz uma transformação no arquivo
        .pipe(uglify())
        .on('error',err => console.log(err))
        .pipe(concat('codigo.min.js')) // min sera para arquivos minificados  
        .pipe(gulp.dest('build'))
   /*  return cb() */
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

exports.default = parallel(transformacaoJS, fim)