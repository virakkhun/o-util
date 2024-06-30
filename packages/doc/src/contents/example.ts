export default `
]]]ts
import { filter } from "o-util";

const o = {
  name: null,
  age: 20,
  nested: {
    empty: {},
    nothing: undefined,
  },
};

const result = filter(o, (v) => v !== null);
console.log(result);
// result
{
  age: 20,
  nested: {
    empty: {},
    nothing: undefined,
  }
}
]]]
`;
