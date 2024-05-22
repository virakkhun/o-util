import { isO } from "../internal/is-o";

/**
 * @function filter
 * @description remove those props if its value match cond
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
 * const result = filter(o, () => null)
 * // result
 * {
 *  age: 20,
 *  nested: {
 *    empty: {},
 *    undefined: undefined
 *  }
 * }
 * ```
 **/
export function filter<T extends Record<string, unknown>>(
  o: T,
  predicator: (v: T[keyof T]) => boolean,
): Partial<T> {
  return Object.entries(o)
    .filter(([_, v]) =>
      !!v && isO(v)
        ? Object.values(filter(<T>v, predicator)).length > 0
        : predicator(<T[keyof T]>v),
    )
    .reduce(
      (p, [k, v]) =>
        Object.assign(p, {
          [k]: !!v && isO(v) ? filter(<T>v, predicator) : v,
        }),
      {},
    );
}
