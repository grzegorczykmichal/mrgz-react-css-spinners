const dist = "dist";

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: "esm",
    },
    {
      name: "ReactCssSpinenrs",
      file: `${dist}/bundle.umd.js`,
      format: "umd",
    },
  ],
};
