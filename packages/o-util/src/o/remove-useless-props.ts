import { isO } from "../internal/is-o";

/**
 * @function removeUselessProps
 * @description remove those props with its value null, undefined or {}
 * @returns Partial<T>
 *
 * @example
 * ```
 * const o = {
 *  name: null,
 *  age: 20,
 *  nested: {
 *    empty: {},
 *    undefined: undefined
 *  }
 * }
 *
 * // result
 * {
 *  age: 20
 * }
 * ```
 **/
export function removeUselessProps<T extends Record<string, any>>(
  o: T,
): Partial<T> {
  return Object.entries(o)
    .filter(([_, v]) =>
      !!v && isO(v) ? Object.values(removeUselessProps(v)).length > 0 : !!v,
    )
    .reduce(
      (p, [k, v]) =>
        Object.assign(p, {
          [k]: !isO(v) ? v : removeUselessProps(v),
        }),
      {},
    );
}
