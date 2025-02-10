import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.ts",
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
  ],
  external: ["react", "react-dom"],
};

