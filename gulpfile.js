const webpack = require('webpack-stream');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const cache = require('gulp-cache');
const eslint = require('gulp-eslint');

const { src, dest, parallel, series, watch } = require('gulp');

// local_server-----------------
const browsersync = () => {
  browserSync.init({
    server: {
      baseDir : './'
    },
  })
}
exports.browsersync = browsersync
// -----------------local_serśver

// scripts-----------------------
const js = () => src([
  './src/main.js'
])
  .pipe(eslint({}))
  .pipe(webpack({
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env'],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      ]
    }
  })).on('error', function handleError() {
    this.emit('end')
  })
  .pipe(rename('app.js'))
  .pipe(dest('./dist'))
  .pipe(browserSync.stream())
  .pipe(eslint.format())
exports.js = js

// delete cache and dist folder
const clear = () => cache.clearAll()
exports.clear = clear

const live = () => {
  watch('src/**/*.js', js)
}
exports.live = live

exports.default = series(
  parallel(js),
  parallel(live, browsersync)
)
