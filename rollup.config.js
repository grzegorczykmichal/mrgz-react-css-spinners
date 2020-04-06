import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const production = process.env.BUILD === "production";

const dist = "dist";
const bundle = "bundle";

const plugins = [babel({ exclude: "node_modules/**" })];

if (production) {
  plugins.push(terser());
}

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: "esm",
    },
    {
      name: "ReactCssSpinenrs",
      file: `${dist}/${bundle}.umd.js`,
      format: "umd",
      globals: {
        react: "React",
      },
    },
  ],
  plugins,
  external: ["react"],
};
