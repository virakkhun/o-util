import { expect, test } from "vitest";
import { nullOrUndefined } from "../../packages/o-util/src/internal/null-or-undefined";

test("return true if o is null or undefined", () => {
  expect(nullOrUndefined(null)).toBeTruthy();
});

test("return false if o is not null or undefined", () => {
  expect(nullOrUndefined({})).toBeFalsy();
});
