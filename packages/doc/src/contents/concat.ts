export default `
# concat

]concat] let you concat many object into one.

### example

let say we want to merge this two object below.
if the @props in second object is the same key as the first object,
the value inside the second object will be override the first object.

]]]ts
import { concat } from 'o-util'

const husband = {
 age: 20,
 name: 'John Doe',
 dev: true
}

const wifey = {
 win: 200,
 cooking: true,
 dev: false
}

const result = concat(husband, wifey)

console.log(result)
// result below
{
 age: 20,
 name: 'John Doe',
 dev: false,
 win: 200,
 cooking: true
}
]]]

[github](https://github.com/virakkhun/o-utils/blob/main/packages/o-utils/src/o/concat.ts)

[filter](/doc/filter?content=filter)
`