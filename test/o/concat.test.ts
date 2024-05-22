import { expect, test } from "vitest";
import { concat } from "o-utils";

const husband = {
  age: 20,
  name: "John Doe",
  dev: true,
};

const wifey = {
  win: 200,
  cooking: true,
  dev: false,
};

const o = concat(husband, wifey);

test("should return an object contain five keys", () => {
  expect(o).toStrictEqual({
    ...husband,
    dev: false,
    win: wifey.win,
    cooking: wifey.cooking,
  });
});

test("should return age: 20, name: 'John Doe', dev: false, win: 200, cooking: true", () => {
  expect(o.dev).toBeFalsy();
  expect(o.age).toEqual(20);
});
