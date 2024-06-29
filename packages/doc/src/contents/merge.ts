export default `
# merge

let you merge two object into one.

### example

let you merge two object into another one and return new object.

]]]ts
import { merge } from "o-util";

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

const result = merge(o).with(d);

console.log(result);
// result
{
  frameword: "sveltekit",
  version: 1,
  api: {
    baseUrl: "https://json-placeholder.com",
    version: 204, // merged
  },
}
]]]

[github](https://github.com/virakkhun/o-utils/blob/main/packages/o-utils/src/o/merge.ts)

[remove-useless-props](/doc/remove-useless-props)
`;
