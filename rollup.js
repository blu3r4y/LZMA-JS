const fs = require("fs");
const rollup = require("rollup");
const Terser = require("terser")
const TerserPlugin = require("rollup-plugin-terser").terser;
const umdFooter = "var LZMA = this.LZMA.LZMA; var LZMA_WORKER = LZMA;";
const umdModuleName = "LZMA";

module.exports.minify = function minify() {
    var result = Terser.minify({
        "lzma.js": fs.readFileSync("src/lzma.js", "utf8")
    },
    {
        sourceMap: {
            filename: "lzma-min.js",
            url: "lzma-min.js.map"
        }
    });
    fs.writeFileSync("src/lzma-min.js", result.code);
    fs.writeFileSync("src/lzma-min.js.map", result.map);

    return Promise.all(["lzma_worker", "lzma-c", "lzma-d"].map(function (name) {
        return rollup.rollup({
            input: `src/${name}.mjs`,
        }).then(function (bundle) {
            return bundle.write({
                format: "umd",
                file: `src/${name}.js`,
                footer: umdFooter,
                name: umdModuleName,
                sourcemap: true
            })
        }).then(function () {
            return rollup.rollup({
                input: `src/${name}.mjs`,
                plugins: [
                    TerserPlugin({
                        compress: {
                            unsafe: true,
                            unsafe_comps: true,
                            pure_getters: true
                        },
                        mangle: {
                            toplevel: true,
                            reserved: ["LZMA", "LZMA_WORKER", "compress", "decompress"],
                            properties: {
                                regex: /^(?!LZMA|(de)?compress|data|mode|cbn)/
                            }
                        }
                    })
                ]
            }).then(function (bundle) {
                return Promise.all([
                    bundle.write({
                        format: "umd",
                        file: `src/${name}-min.js`,
                        footer: umdFooter,
                        name: umdModuleName,
                        sourcemap: true
                    }),
                    bundle.write({
                        format: "esm",
                        file: `src/${name}-min.mjs`,
                        sourcemap: true
                    })
                ]);
            });
        });
    }));
}