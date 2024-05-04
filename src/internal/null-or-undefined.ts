/**
 * @function nullOrUndefined
 * @description check if the value if null or undefined
 **/
export function nullOrUndefined<T>(o: T) {
  return o === null || o === undefined;
}
