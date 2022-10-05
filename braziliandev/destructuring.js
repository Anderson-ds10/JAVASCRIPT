/*
const arr = ["um", "dois", "tres"]

const [um, dois, tres] = arr

console.log(um)
console.log(dois)
console.log(tres)
*/


/*
let a, b, c;

[a,b,c] = [1,undefined,"hello",4]

console.log(a)
console.log(b)
console.log(c)
*/

/*
let a, b, c

[a=5, b=7, c=12] = [2, undefined]
console.log(a)
console.log(b)
console.log(c)
*/

/*
let a = 1
let b = 3

[a, b] = [b, a]

console.log(a, b)

*/

/*
const [a, ...b] = [1,2,3]
console.log(a, b)
*/

let key = "z";
let { [key]: foo} = {z: "bar"};

console.log(foo)