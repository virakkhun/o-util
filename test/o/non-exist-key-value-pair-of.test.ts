import { nonExistKeyValuePairOf } from "o-util";
import { expect, test } from "vitest";

const o = {
  frameword: "sveltekit",
  version: 1,
  api: {
    baseUrl: "https://json-placeholder.com",
  },
};

const d = {
  frameword: "sveltekit",
  version: 1,
  api: {
    baseUrl: "https://json-placeholder.com",
    version: 201,
  },
};

test("should get api.version to equal 201", () => {
  const result = nonExistKeyValuePairOf(o).in(d);
  expect(result?.api?.version).toEqual(201);
});

test(`should be stringify to {"api":{"version":201}}`, () => {
  const result = nonExistKeyValuePairOf(o).in(d);
  expect(JSON.stringify(result)).toEqual('{"api":{"version":201}}');
});

test(`should be pasrsed to {api:{version:201}}`, () => {
  const result = nonExistKeyValuePairOf(o).in(d);
  const str = JSON.stringify(result);
  const parsed = JSON.parse(str);
  expect(parsed).toMatchObject({ api: { version: 201 } });
});

test("should return empty object if both o & d are eqaul", () => {
  const result = nonExistKeyValuePairOf(d).in(d);
  expect(result).toMatchObject({ api: {} });
});
