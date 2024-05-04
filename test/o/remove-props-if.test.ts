import { expect, test } from "vitest";
import { removePropsIf } from "../../src";

const o = {
  name: null,
  age: 20,
  nested: {
    m: 20,
    n: undefined,
  },
};

test("should remove name property from o", () => {
  const obj = removePropsIf(o, (v) => v !== null);
  const { name: _, ...rest } = o;
  expect(obj?.name).toBeUndefined();
  expect(obj).toStrictEqual(rest);
});

test("should remove name, m and n inside nested object", () => {
  const obj = removePropsIf(o, (v) => !!v);
  expect(obj).toStrictEqual({ nested: { m: 20 }, age: 20 });
});
