export type TO = Record<string | number, unknown>;
export type Key = number | string;
export type Value<T> = T;
export type ArrayKeyValue<T> = [Key, Value<T>];
