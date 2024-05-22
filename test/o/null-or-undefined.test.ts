import { nullOrUndefined } from "o-utils/src/internal/null-or-undefined";
import { expect, test } from "vitest";

test("return true if o is null or undefined", () => {
  expect(nullOrUndefined(null)).toBeTruthy();
});

test("return false if o is not null or undefined", () => {
  expect(nullOrUndefined({})).toBeFalsy();
});
