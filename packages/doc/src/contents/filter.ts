export default `
# filter

]filter] let you filter out value that you wish to remove inside the object.

### example

let see the example below, we want to remove ]@props] that contain value ]true].
in this case, there are two ]@props]

]]]ts
import { filter } from 'o-util'

const person = {
 age: 20,
 name: 'John Doe',
 dev: true,
 salary: {
  yearly: '200k',
  tax: true
 }
}


const result = filter(person, () => true)

console.log(result)
// result below
{
 age: 20,
 name: 'John Doe',
 salary: {
  yearly: '200k',
 }
}
]]]

[github](https://github.com/virakkhun/o-utils/blob/main/packages/o-utils/src/o/filter.ts)

[find](/doc/find?content=find)
`