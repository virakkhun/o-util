export default `
# keys

]keys] return the list of all the keys inside the object.

### example

let say we want to get all the keys inside the object.

]]]ts
import { keys } from 'o-util'

const o = {
 name: 'Doe',
 age: 20,
 profession: {
   title: 'IOS Engineer'
   experience: '2 years'
 }
}

const keys = keys(o)
console.log(kes)
// result
["name", "age", "title", "experience"]
]]]

[github](https://github.com/virakkhun/o-utils/blob/main/packages/o-utils/src/o/keys.ts)

[merge](/doc/merge?content=merge)
`