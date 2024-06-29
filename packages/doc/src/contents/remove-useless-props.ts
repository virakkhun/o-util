export default `
# remove-useless-props

let you clean up the object such ]null], ]undefined], ]{}]

### example

ley say we want to clean up the object before sending request to your server

]]]ts
import { removeUselessProps } from "o-util";

const o = {
  name: null,
  age: 20,
  nested: {
    empty: {},
    un: undefined,
  },
};

const result = removeUselessProps(o);
console.log(result);
// result
{
  age: 20;
}
]]]

[github](https://github.com/virakkhun/o-utils/blob/main/packages/o-utils/src/o/remove-useless-props.ts)
`;
