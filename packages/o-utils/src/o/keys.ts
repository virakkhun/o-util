import { entries } from "../internal/entries";
import { isO } from "../internal/is-o";

/**
 * @function keys
 * @description function to get all the keys inside the object
 * @param o
 * @returns a list of all keys
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
 * const keys = keys(o)
 * // result
 * ["name", "age", "title", "experience"]
 * ```
 */
export function keys<T extends Record<string, any>>(o: T): string[] {
  return entries(o).reduce((p, [k, v]) => {
    const key = isO(v) ? keys(<T>v) : k;
    return p.concat(<T[keyof T]>key);
  }, []);
}
