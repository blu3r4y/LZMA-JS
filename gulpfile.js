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

const destdir = "./dist"

function compileLZMA() {
  return uglify({
    mangle: true,
    mangleProperties: {
      regex: /^(?!LZMA|(de)?compress|worker|document)/
    },
    compress: {
      unsafe: true,
      unsafe_comps: true,
      pure_getters: true,
      passes: 2,
      warnings: false,
    },
    output: {
      comments: /©/,
    },
  })
}

function buildLZMA() {
  return gulp.src("./src/lzma.js")
    .pipe(compileLZMA())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(destdir))
}

function buildLZMAWorker() {
  let stream = merge()
  for (let name in targets) {
    stream.add(
      gulp.src("./src/" + name + ".js")
        .pipe(compileLZMA())
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
