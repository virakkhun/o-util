import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

/**
 * @param {string} pkg
 */
const entry = (_) => `./packages/o-util/src/index.ts`;
/**
 * @param {string} pkg
 */
const output = (_) => `./packages/o-util/dist`;

/**
 * @type {{entry: string, output: string, type: 'js' | 'dts', external?: string[]}[]}
 */
const pkgConfigs = [
  {
    entry: entry(),
    output: output(),
    type: "js",
  },
  {
    entry: entry(),
    output: output(),
    type: "dts",
  },
];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const configs = [];

pkgConfigs.forEach(({ entry, output, type, external }) => {
  if (type === "dts")
    configs.push({
      input: entry,
      plugins: [dts()],
      output: [
        {
          file: `${output}/index.d.ts`,
          format: "es",
        },
      ],
    });
  else
    configs.push({
      input: entry,
      plugins: [
        esbuild(),
        resolve({ extensions: [".ts"] }),
        commonjs(),
        terser(),
      ],
      output: [
        {
          file: `${output}/index.mjs`,
          format: "es",
        },
        {
          file: `${output}/index.cjs`,
          format: "cjs",
        },
      ],
      external,
    });
});

export default configs;
