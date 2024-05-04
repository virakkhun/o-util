import { expect, test } from "vitest";
import { keys } from "../../src";

test(`should return a list of expect keys ["name", "age", "title", "experience"]`, () => {
  const object = {
    name: "John Wick",
    age: 20,
    profession: {
      title: "SWE",
      experience: "senior",
    },
  };
  const expectedKeys = ["name", "age", "title", "experience"];

  const ks = keys(object);
  const isEqual = expectedKeys.every((v, i) => ks[i] === v);

  expect(isEqual).toBeTruthy();
});

test("should return empty array if the object is empty", () => {
  const emptyObject = {};
  const expected: string[] = [];

  const ks = keys(emptyObject);
  const isEmpty = ks.length === 0;

  expect(isEmpty).toBeTruthy();
  expect(ks).toStrictEqual(expected);
});
