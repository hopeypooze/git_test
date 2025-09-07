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
let array21 = [1, 2, 3, 4, 5, 6, 7, 8];
function rotateRight(array) {
    let maxIndex = array.length - 1;

    let temp = array[array.length - 1];

    console.log(temp);

    for (let i = 0; i < maxIndex; i++) {
        console.log(`index ${i}`);

        console.log(`${maxIndex - i - 1}-> ${maxIndex - i}`);
        array[maxIndex - i] = array[maxIndex - i - 1];


    }
    array[0] = temp;
    return array;
}
console.log(rotateRight(array21));

//Coding challenge #22: Reverse an array
let reversed = array21.slice().reverse();
console.log(reversed);

//Coding challenge #23: Reverse a string
let myString = "Hello World";

let reversedString = myString.split('').reverse('').join('');
console.log(reversedString);

//Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function mergeArrays(array1, array2) {//non-destructive
    return array1.concat(array2);
}

console.log(mergeArrays(array20, array21));

//Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array
//composed of all the numbers that are either in the first array or second array but not in both

function mergeUniqueArrays(array1, array2) {
    let mergedArray = [...array1, ...array2];//merge 2 arrays
    let uniqueNumbersSet = new Set(mergedArray);//create a set, which removes duplicates
    let uniqueNumbersArray = [...uniqueNumbersSet];//convert set back to an array
    return uniqueNumbersArray;

}

console.log(mergeUniqueArrays(array20, array21));

//Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in
//the first array but not in the second
let array261 = [1, 2, 3, 4, 6, 6, 5, 9, 9];
let array262 = [1, 2, 7, 8];

function excludeArray2(array1, array2) {
    let newArray = [];
    let j = 0;

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) { newArray[j++] = array1[i]; }


    }
    return newArray;
}
console.log(excludeArray2(array261, array262));

//more idiomatic

function excludeArray2b(array1, array2) {
    return array1.filter(element => !array2.includes(element)); //don't forget return!
}

console.log(excludeArray2b(array261, array262));

//Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array
//with distinct elements

function getDistinct(array) {
    let uniqueNumbersSet = new Set(array);//create a set, which removes duplicates
    return [...uniqueNumbersSet];//convert set back to an array

}

console.log(getDistinct(array261));

//Coding challenge #28: Calculate the sum of first 100 prime numbers

function sumFirst100Primes() {
    let count = 0;
    let i = 2;
    let primes = [];


    while (count < 100) {
        if (isPrime(i) === true) {
            primes[count++] = i;

        }
        i++;
    }

    let sumOfPrimes = primes.reduce((accumulator, element) => accumulator + element, 0);

    return { sumOfPrimes, primes };


}
const { sumOfPrimes } = sumFirst100Primes();

console.log(sumOfPrimes);

//Coding challenge #29: Print the distance between the first 100 prime numbers

const { primes } = sumFirst100Primes();//array of first 100 primes

function distanceBetweenNumbers(array) {
    let distances = [];
    for (let i = 0; i < array.length - 1; i++) {
        distances[i] = array[i + 1] - array[i];
    }
    return distances;

}

console.log(distanceBetweenNumbers(primes));

//Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are
//received as strings and the result should be also provided as string.
//I'm assuming the numbers are integers

function addStringNumbers(string1, string2) {
    let a1=[];
    let a2=[];
    let arrNum1=[];
    let arrNum2=[];
    let arrResult=[];//to hold the sum
    let arrResultIndex=0;
    let carry=0; //to hold the carry digit
    let i; //to carry on after the loop ends
    //if one string is longer, make that into arrNum1
if((string1.length === string2.length) || (string1.length > string2.length))//if same length, just assign strings to arrays same is string 1 is longer
{a1 = [...string1];
     arrNum1 = a1.map(Number);

     a2 = [...string2];
    arrNum2 = a2.map(Number);}
else 
   { a1 = [...string2];
    arrNum1 = a1.map(Number);

    a2 = [...string1];
     arrNum2 = a2.map(Number);}



//loop through digits of shorter array
for(i=0; i< arrNum2.length; i++)
//each loop add digits together
    {result= (arrNum2[arrNum2.length-1-i]) + (arrNum1[arrNum1.length-1-i]); 

        if (carry > 0)//if there's anything in carry
        {result += carry;
            carry =0;}
        if(result < 10)//if sum is <10, put the digit in arrResult
            {arrResult[arrResultIndex]= result;
                arrResultIndex ++;
            }
        else { //if the sum is > 10 log 0 to arrResult and assign the value of the tens to carry

                // arrResult[arrResultIndex]= 0;
                arrResult[arrResultIndex]= result % 10;
                arrResultIndex ++;
                carry = Math.floor(result/10);
        }
    }

for(i; i< arrNum1.length; i++)
{arrResult[arrResultIndex]= arrNum1[arrNum1.length-1-i]+carry;//carry can be added one last time, it may be 0
                arrResultIndex ++;
                carry=0;// so it doesn't get added again
            }



if (carry > 0) {
    arrResult.push(carry);
}



//reverse the digits 

let final=arrResult.slice().reverse();
return final.join("");

}

console.log(addStringNumbers('999', '1'));

//better version using push and simplified

function addStringNumbers2(string1, string2) {
    // Ensure string1 is the longer one
    if (string2.length > string1.length) {
        [string1, string2] = [string2, string1];
    }

    const arrNum1 = [...string1].map(Number);
    const arrNum2 = [...string2].map(Number);
    const arrResult = [];

    let carry = 0;
    let i = 0;

    // Add digits from the end
    for (i = 0; i < arrNum2.length; i++) {
        const sum = arrNum1[arrNum1.length - 1 - i] + arrNum2[arrNum2.length - 1 - i] + carry;
        arrResult.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    // Add remaining digits from the longer number
    for (; i < arrNum1.length; i++) {
        const sum = arrNum1[arrNum1.length - 1 - i] + carry;
        arrResult.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    // Final carry
    if (carry > 0) {
        arrResult.push(carry);
    }

    return arrResult.reverse().join('');
}

console.log(addStringNumbers2('1', '999')); // Expected: '12690'

//Coding challenge #31a. Create a function that will return the number of words in a text
function countWords(string){
    const words = string.split(" ");
    return words.length-1;
}

//better

function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}



console.log(countWords("This is my text, it's a string of words and punctuation.  Let's see what happens when I try to analyse it for wordcount."));

//Coding challenge #32. Create a function that will capitalize the first letter of each word in a text
const testString= "This is my text, it's a string of words and punctuation.  Let's  see what happens    when I try to analyse it for wordcount.";


function capitalizeWords(text) {
    return text
        .trim()
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.slice(1))//returns a new array
        .join(" ");
}


console.log(capitalizeWords(testString));

//Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

const stringNumbers="1, 2, 3, 4, 5, 6";

function sumString(string) {
return string.split(',').map(Number).reduce((accumulator, element)=> accumulator + element,0);
}

console.log(sumString(stringNumbers));

// //Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array
// *****//TURN THIS INTO A FUNCTION- pass in each row
// let my2DArray=[];
// let i=0; 
// let j=0;

// const fs = require('fs');
// const csv = require('csv-parser');

// const filePath = 'data.csv'; // Replace with your CSV file path

// fs.createReadStream(filePath)
//     .pipe(csv())
//     .on('data', (row) => {

//         my2DArray[i] = []; // Initialize the inner array
//         j = 0; // Reset j for each row
//         // Each 'row' is an object where keys are column headers
//          for(let prop in row){
//             my2DArray[i][j++]=row[prop];
//         console.log(row[prop]);}
//         i++;

//         // console.log(row);
        
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed.');
//         console.log(i);
//     })
//     .on('error', (error) => {
//         console.error('Error processing CSV:', error.message);
//     });

// console.log(`my2darray: ${my2DArray}`);

// console.log('\n');


    //Coding challenge #39. Implement the Caesar cypher//chosen to leave digits and non-alpha chars alone.  Retaining caps.

const plaintext ="This is my  112secret! messagez.";
const shift =3;

function isCharUpper(char) {
   return char === char.toUpperCase() && char !== char.toLowerCase();
}

function caesar(string, number){
    let chCyph;
    const isAlphaChar = (char) => /^[a-zA-Z]$/.test(char);
    let arrEncrypted=[];
for (let i=0; i<string.length; i++)
    {
    let ch=Math.floor(string.charCodeAt(i));

    let a = isCharUpper(string[i]) ? Math.floor('A'.charCodeAt(0)): Math.floor('a'.charCodeAt(0));

    // console.log(isAlphaChar(string[i]));
    if(isAlphaChar(string[i]))
        {chCyph= ((ch - a) + number)% 26 + a;}
    else {chCyph= ch;}

    // console.log(`ch: ${string[i]} ${ch} A: ${a} number: ${number} ch - a= ${(ch - a)} mod: ${((ch - a) + number)% 26} final: ${((ch - a) + number)% 26 + a} chCyph: ${chCyph}`);

    arrEncrypted.push(chCyph);
    }
let encryptedChars=arrEncrypted.map(num=>String.fromCharCode(num));
// console.log(encryptedChars);

return encryptedChars.join('');}

console.log(caesar(plaintext,shift));


//Coding challenge #40. Implement the bubble sort algorithm for an array of numbers
unsorted =[-10,-1,-200,5,3,7,8,6];

function bubble_sort(array)
{
for(let i=0; i < array.length; i++)
    {
        
       for (let j=0; j < array.length-1-i; j++)
       {
        if (array[j] > array[j+1])
            {let temp=array[j];
            array[j] = array[j+1];
            array[j+1] = temp;

            // for (let k=0; k<array.length; k++)
            // {console.log(array[k]);
            // }  
        
        }

        }
    }
    return array;
}

console.log(bubble_sort(unsorted));

//Coding challenge #41. Create a function to calculate the distance 
// between two points defined by their x, y coordinates
