 /* 
    1. 아래 코드를 object destructuring을 활용해 리팩토링 하시오.
    2. Rest operator를 활용해 아래 코드를 리팩토링 하시오.
    3. Spread operator를 활용해 아래 코드를 리팩토링 하시오.
*/

// 1-1
const savedFile = {
    name: 'profile',
    extension: 'jpg',
    size: 29930
    }
function fileSummary({name, extension, size}) {
    console.log(`The file ${name}.${extension} is size of ${size} bytes.`)
}
fileSummary(savedFile);

// const savedFile = {
//   name: 'profile',
//   extension: 'jpg',
//   size: 29930
// }
// function fileSummary(file) {
//     console.log(`The file ${file.name}.${file.extension} is size of ${file.size} bytes.`)
// }
// fileSummary(savedFile);


// 1-2 
const data = {
    username: 'myName',
    password: 'myPassword',
    email: 'my@mail.com',
}

const {username, password, email} = data 

console.log(username, password, email);

// const {username} = data
// console.log(username);

// const username = data.username
// const password = data.password
// const email = data.email

    

// 2
function addNumbers(a,b, ...restArgs) {
const numbers = [a, b, ...restArgs];
return numbers.reduce((sum, number) => { 
    return sum + number
}, 0)
}

console.log(addNumbers(1,2,3,4,5));

// function addNumbers(a,b,c,d,e) {
//   const numbers = [a, b, c, d, e];
//   return numbers.reduce((sum, number) => { 
//     return sum + number
//   }, 0)
// }


// 3-1
const defaultColors = ['red', 'green', 'blue'];
const favoriteColors = ['navy', 'black', 'gold', 'white']

const palette = [...defaultColors, ...favoriteColors]  
console.log(palette);

// const palette = defaultColors.concat(favoriteColors);
// concat : 배열 붙일때 사용하는 method

// 3-2
const info1 = { name: 'Tom', age: 30 }
const info2 = { isMarried: true, balance: 3000 }

const fullInfo = {...info1, ...info2}
console.log(fullInfo);
    
// const fullInfo = Object.assign(info1, info2)
// assign : 새 배열로 재할당