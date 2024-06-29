export default `
# find

]find] let you find the value inside the object recursively by providing ][key, value]].

### example

let say we want to find ]@prop] name and its value ]Doe]

]]]ts
import { find } from 'o-util'

const o = {
 name: 'Doe',
 age: 20,
 profession: {
   title: 'IOS Engineer'
   experience: '2 years'
 }
}

const findNameDoe = find(o, ['name', 'Doe'])
console.log(findNameDoe)
// result
{
 name: 'Doe'
}
]]]

[github](https://github.com/virakkhun/o-utils/blob/main/packages/o-utils/src/o/find.ts)

[keys](/doc/keys?content=keys)
`