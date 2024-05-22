export function entries<T extends Record<keyof T, T[keyof T]>>(o: T) {
  return Object.entries(o);
}
