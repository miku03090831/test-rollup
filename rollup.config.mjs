import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.ts",
    jsx: "react",
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
      },
    ],
    plugins: [
      resolve(),
      babel({ babelHelpers: "runtime" }),
      commonjs(),
      typescript(),
      postcss({ extract: true }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "./src/index.ts",
    jsx: "preserve",
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
      },
    ],
    plugins: [
      resolve(),
      babel({ babelHelpers: "runtime" }),
      commonjs(),
      typescript(),
      postcss({ extract: true }),
      dts(),
    ],
    external: ["react", "react-dom"],
  },
];
