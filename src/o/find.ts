import { entries } from "../internal/entries";
import { isO } from "../internal/is-o";
import { ArrayKeyValue, TO } from "../internal/type";

/**
 * @function find
 * @description
 * - find an object inside the object
 * - return an object if it is matched
 * - return empty object if it is not matched
 * @returns partially return only the found items
 *
 * @example
 * ```
 * const o = {
 *  name: 'Doe',
 *  age: 20,
 *  profession: {
 *    title: 'IOS Engineer'
 *    experience: '2 years'
 *  }
 * }
 *
 * const findNameDoe = find(o)
 * // result
 * {
 *  name: 'Doe'
 * }
 * ```
 **/
export function find<T extends TO>(
  o: T,
  [key, value]: ArrayKeyValue<T[keyof T]>,
): Partial<T> {
  if (!key || !value)
    throw new Error(
      `expected the array of [key, value] pair, got key: ${key} and value: ${value}`,
    );

  return entries(o).reduce(
    (p, [k, v]) =>
      Object.assign(
        p,
        isO(v)
          ? find(<T>v, [key, value])
          : key === k && value === v
            ? { [k]: v }
            : {},
      ),
    {},
  );
}
