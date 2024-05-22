import { find } from "o-utils";
import { expect, test } from "vitest";

const o = {
  name: "Doe",
  age: 20,
  profession: {
    title: "IOS Engineer",
    experience: "2 years",
  },
  dude: {
    title: "IOS Engineer",
  },
};

test("should return {name: 'Doe'}", () => {
  const output = find(o, ["name", "Doe"]);
  expect(output).toStrictEqual({ name: "Doe" });
  expect(output.name).toEqual("Doe");
});

test("should return empty object", () => {
  const output = find(o, ["gender", 20]);
  expect(output).toStrictEqual({});
  expect(output?.name).toBeUndefined();
});

test("should return title: IOS Engineer", () => {
  const output = find(o, ["title", "IOS Engineer"]);
  expect(output).toStrictEqual({ title: "IOS Engineer" });
  expect(output?.name).toBeUndefined();
});
