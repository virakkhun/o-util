import { entries } from "../internal/entries";

/**
 * @function replace
 * @description inserting an object of `d` into `o` of a respectively key value
 * @returns new objects of merging o & d
 * @example
 * ```
 * const o = {
 *  frameword: 'sveltekit',
 *  version: 1,
 *  api: {
 *    baseUrl: 'https://json-placeholder.com',
 *    version: 201
 *  }
 * }
 *
 * const d = {
 *  api: {
 *    version: 204
 *  }
 * }
 * ```
 *
 * const result = replace(o).with(d)
 * console.log({
 *  frameword: 'sveltekit',
 *  version: 1,
 *  api: {
 *    baseUrl: 'https://json-placeholder.com',
 *    version: 204, // replaced
 *  }
 * })
 **/
export function replace<T extends Record<string, any>>(o: T) {
  return {
    with: <D extends Record<string, any>>(d: D): T => {
      return entries(o)
        .map(([key, value]) =>
          d[key] === undefined ? [key, value] : [key, d[key]],
        )
        .reduce<T>(
          (p, [k, v]) =>
            Object.assign(p, {
              [k]: typeof v === "object" ? replace(v).with(d[k]) : v,
            }),
          <T>{},
        );
    },
  };
}
