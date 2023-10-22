import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";
import path from "path";

export default defineConfig([
  {
    //   clean: true,
    //   sourcemap: true,
    //   tsconfig: path.resolve(__dirname, "./tsconfig.json"),
    //   entry: ["./src/components/!(index).ts?(x)"],
    //   format: ["esm"],
    //   outDir: "dist/",
    //   esbuildOptions(options, context) {
    //     // the directory structure will be the same as the source
    //     options.outbase = "./";
    //   },
    // },
    minify: true,
    target: "es2018",
    external: ["react"],
    sourcemap: true,
    dts: true,
    format: ["esm", "cjs"],
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
]);
