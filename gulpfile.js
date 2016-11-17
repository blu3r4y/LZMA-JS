"use strict"
const gulp = require("gulp")
const rename = require("gulp-rename")
const replace = require("gulp-replace")
const sourcemaps = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")

const merge = require("merge-stream")

const targets = {
  "lzma_worker": { COMPRESS: true,  DECOMPRESS: true  },
  "lzma-c":      { COMPRESS: true,  DECOMPRESS: false },
  "lzma-d":      { COMPRESS: false, DECOMPRESS: true  },
}

const destdir = "./dist"

function compileLZMA(minify, define) {
  return uglify({
    mangle: minify,
    mangleProperties: minify && {
      regex: /^(?!LZMA|(de)?compress|worker|document)/
    },
    compress: {
      unsafe: true,
      unsafe_comps: true,
      pure_getters: true,
      passes: 2,
      warnings: false,
      global_defs: define,
    },
    output: {
      beautify: !minify,
      comments: minify ? /©/ : "all",
    },
  })
}

gulp.task("dist:lzma", () =>
  gulp.src("./src/lzma.js").pipe(gulp.dest(destdir))
)

gulp.task("dist:lzma:min", () => {
  gulp.src("./src/lzma.js")
    .pipe(sourcemaps.init())
      .pipe(compileLZMA(true))
      .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(destdir))
})

function buildLZMAWorker(minify) {
  let stream = merge()
  for (let name in targets) {
    if (!minify && name === "lzma_worker") {
      stream.add(
        gulp.src("./src/lzma_worker.js").pipe(gulp.dest(destdir))
      )
    } else {
      stream.add(
        gulp.src("./src/lzma_worker.js")
          .pipe(replace(/.*remove before uglify.*/g, ''))
          .pipe(sourcemaps.init())
            .pipe(compileLZMA(minify, targets[name]))
            .pipe(rename({ basename: name, suffix: minify && ".min" }))
          .pipe(sourcemaps.write("."))
          .pipe(gulp.dest(destdir))
      )
    }
  }
  return stream
}

gulp.task("dist:lzma_worker", buildLZMAWorker.bind(null, false))
gulp.task("dist:lzma_worker:min", buildLZMAWorker.bind(null, true))

gulp.task("dist", ["dist:lzma", "dist:lzma:min", "dist:lzma_worker", "dist:lzma_worker:min"])
gulp.task("default", ["dist"])
