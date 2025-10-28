//DESTRUCTURING AN ARRAY

myArrDes = ["this", "is", "an", "array", "of", "Strings"];

let a, b, rest;
[a, , b, ...rest] = myArrDes;

console.log(a, b, rest);

//from an array of nubers, extract all even numbers and set the largest 3 as variables x, y, z

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30];

let evens = numArray.filter((num) => num % 2 === 0).sort((a, b) => b - a);

let x, y, z;
const newArray3 = [];

[x, y, z] = evens;
newArray3.push(x);
console.log(x, y, z);

[x, y, z] = [z, y, x];

//DESTRUCTURING AN OBJECT

const user = {
  firstName: "John",
  middleName: "middle",
  lastName: "Doe",

  age: 30,
};

const { firstName: first, lastName: last, middleName: mid } = user;

console.log(mid, first, last);
