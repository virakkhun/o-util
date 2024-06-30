import { isO } from "../internal/is-o";
import { nullOrUndefined } from "../internal/null-or-undefined";

/**
 * @function nonExistKeyValuePair
 *
 * @description get key value pair by extracting those key value pair
 * doesn't exist in o from d
 *
 * @param o
 * @param d
 * @returns new object
 * @example
 * ```
 * const o = {
 *  name: 'js',
 *  dynamic: true,
 *  features: {
 *   web: true,
 *  }
 * }
 *
 * const d = {
 *  name: 'js',
 *  age: 40,
 *  dynamic: true,
 *  features: {
 *   web: true,
 *   server: true
 *  }
 * }
 *
 * // result
 * {
 *  age: 40,
 *  features: {
 *   server: true
 *  }
 * }
 * ```
 * */
export function nonExistKeyValuePairOf<T extends Record<string, any>>(o: T) {
  return {
    in: <D extends Record<string, any>>(d: D): Partial<T & D> => {
      return Object.entries(d)
        .map(([k, v]) => {
          return [
            k,
            isO(v) && isO(o[k])
              ? nonExistKeyValuePairOf(o[k]).in(v)
              : nullOrUndefined(o[k])
                ? v
                : null,
          ];
        })
        .reduce((p, [k, v]) => Object.assign(p, !!v ? { [k]: v } : {}), {});
    },
  };
}
