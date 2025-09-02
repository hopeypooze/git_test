//Coding challenge #1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++)
    console.log(i);

//Coding challenge #2: Print the odd numbers less than 100
for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Coding challenge #3: Print the multiplication table with 7

for (let i = 0; i <= 12; i++)
    console.log(`${i}x 7 = ${i * 7}`);

//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (let j = 0; j <= 12; j++) {
    for (let i = 0; i <= 12; i++) { console.log(`${i}x ${j} = ${i * j}`); }
}

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i < 11; i++) { sum = i + sum; }
console.log(sum);

//Coding challenge #6: Calculate 10!
function factorial(f) {

    if (f === 0) {
        return 1;
    }
    else {
        return f * factorial(f - 1);
    }

}
console.log(factorial(10));

function factorialIterative(n) {
    let f = 1;

    for (let i = 2; i <= n; i++) {
        f *= i;
    }

    return f;
}
console.log(factorialIterative(10));

//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
function sum1030() {
    let sum = 0;
    for (let i = 11; i < 30; i++)
        if (i % 2 != 0) {

            { sum = sum + i; }
        }
    return sum;
}

console.log(sum1030());

//Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function convertTemp(degreesC) {
    let fahrenheit = (degreesC * 1.8) + 32;
    return fahrenheit;
}

console.log(convertTemp(0));

//Coding challenge #10: Calculate the sum of numbers in an array of numbers

let arr = [1, 2, 3, 4, 5, 6];
summed = arr.reduce((accumulator, element) => accumulator + element, 0);
console.log(summed);

//Coding challenge #11: Calculate the average of the numbers in an array of numbers

average = summed / arr.length;
console.log(average);

//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the
//positive numbers
let arr12 = [1, 2, 3, 4, -5, -7, 9, 1];

function positive(array) {
    let posArr = array.filter(num => num > 0);
    return posArr;
}

console.log(positive(arr12));

//Coding challenge #13: Find the maximum number in an array of numbers
function findMax(array) {
    let maxVal = Math.max(...arr12);
    return maxVal;

}
console.log(findMax(arr12));

//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
let b = 0;
let c = 1;

console.log(b);
console.log(c);

for (let i = 2; i < 10; i++) {

    let a = b + c;
    console.log(a);

    b = c;
    c = a;

}

//Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function fibRecursive(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return (fibRecursive(n - 1) + fibRecursive(n - 2));
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fibRecursive(i));
}

//Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime


function isFactor(n1, n2) {
    if (n1 % n2 === 0) { return 0; } //it's a factor (not prime)
    else { return 1; } //it's not a factor (could be prime)

}


function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (isFactor(n, i) === 0) {

            return false;
        }

    }
    return true;
}

console.log(isPrime(110));


//Coding challenge #17: Calculate the sum of digits of a positive integer number

function SumOfDigits(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);

    } return sum;
}

console.log(SumOfDigits(12));

//Coding challenge #18: Print the first 100 prime numbers
function first100Prime() {
    let count = 0;
    let i = 2;

    while (count < 100) {
        if (isPrime(i) === true) {
            console.log(`${count + 1}. ${i}`);
            count++;
        }
        i++;
    }

}

first100Prime();

//Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a
//particular number 

function FirstNPrimes(start, range) {
    let count = 0;
    let i = start;
    let primeArray = [];

    while (count < range) {
        if (isPrime(i) === true) {
            primeArray[count] = i;
            count++;
        }
        i++;
    }
    return primeArray;
}

console.log(FirstNPrimes(500, 20));

//Coding challenge #20: Rotate an array to the left 1 position
let array20 = [1, 2, 3, 4, 5, 6, 7, 8];

function rotateLeft(array) {
    let temp = array[0];
    let len = array.length - 1;


    for (let i = 0; i < len; i++) {
        console.log(`in loop i=${i}`);

        array[i] = array[i + 1];


    }
    array[len] = temp;
    return array;
}
console.log(rotateLeft(array20));


//Coding challenge #21: Rotate an array to the right 1 position
function rotateRight(array) {
    let len = array.length - 1;
    let temp = array[array.length - 1];

    for (let i = 0; i < len - 1; i++) {
        console.log(`index ${i}`);

        array[i - 1] = array[i - 2];


    }
    array[0] = temp;
    return array;
}
console.log(rotateRight(array20));
