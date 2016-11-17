"use strict"
const gulp = require("gulp")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")

const merge = require("merge-stream")

const targets = {
  "lzma_worker": {},
  "lzma-c": {},
  "lzma-d": {},
}

var destdir = "./dist"

function buildLZMA() {
  return gulp.src("./src/lzma.js")
    .pipe(uglify({
      mangle: true,
      compress: true,
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(destdir))
}

function buildLZMAWorker() {
  let stream = merge()
  for (let name in targets) {
    stream.add(
      gulp.src("./src/" + name + ".js")
        .pipe(uglify({
          mangle: true,
          compress: true,
        }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(destdir))
    )
  }
  return stream
}

gulp.task("dist:lzma:min", buildLZMA)
gulp.task("dist:lzma_worker:min", buildLZMAWorker)
gulp.task("dist", ["dist:lzma:min", "dist:lzma_worker:min"])
gulp.task("default", ["dist"])
