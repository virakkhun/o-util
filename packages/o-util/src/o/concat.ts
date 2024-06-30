import { TO } from "../internal/type";

/**
 * @function concat
 * @description concat many objects into one
 *
 * @example
 * ```
 * const husband = {
 *  age: 20,
 *  name: 'John Doe',
 *  dev: true
 * }
 *
 * const wifey = {
 *  win: 200,
 *  cooking: true,
 *  dev: true
 * }
 * ```
 **/
export function concat(...o: TO[]): TO {
  return o.reduce((p, c) => Object.assign({ ...p }, { ...c }), <TO>{});
}
