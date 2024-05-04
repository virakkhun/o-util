import { expect, test } from "vitest";
import { replace } from "../../src";

const o = {
  frameword: "sveltekit",
  version: 1,
  api: {
    baseUrl: "https://json-placeholder.com",
    version: 201,
  },
};

const d = {
  api: {
    version: 204,
  },
};
test("should return api.version to equal 204", () => {
  const newProps = replace(o).with(d);
  expect(newProps.api.version).toEqual(204);
});

const e = {
  api: {},
};
test("should return api with empty value", () => {
  const newProps = replace(o).with(e);
  expect(newProps.api).toMatchObject({});
});

test("should return the object of o while both objects are equal", () => {
  const obj = replace(d).with(d);
  expect(obj).toStrictEqual(d);
});
