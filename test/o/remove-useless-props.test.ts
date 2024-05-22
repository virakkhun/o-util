import { removeUselessProps } from "o-utils";
import { expect, test } from "vitest";

const o = {
  name: null,
  age: 20,
  nested: {
    empty: {},
    undefined: undefined,
  },
};
const obj = removeUselessProps(o);

test("should return { age: 20 }", () => {
  expect(obj).toMatchObject({ age: 20 });
});

test("obj.age to be 20", () => {
  expect(obj.age).toEqual(20);
});
