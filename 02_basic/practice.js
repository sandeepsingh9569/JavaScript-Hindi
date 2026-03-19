// {
//     firstName = "sandeep",
//     lastName = "singh",
//     city = "noida"
// }
// console.log(firstName, lastName, city);

// const accountId = "123456789"
// const accountEmail = "sandeep@google.com"
// const accountPassword = "123"
// const accountCity = "noida"
// let accountState;

// // accountId = 2

// // console.log(accountId);
// console.table({accountId, accountEmail, accountPassword, accountCity, accountCity, accountState});

//  function greet(name, callback) {
//     console.log("Hello" + name);
//     callback();
//  }
//  greet("sandeep", () => console.log("callback executed"));

// function outer() {
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     };
// }

// const fn = outer();
// fn();
// fn();


// let user = {
//     name: "sandeep",
// greet () {
//     console.log(this.name);
// }
// };
// user.greet();

// object

// let user = {
//     name: "sandeep",
//     age: 22,
//     city: "gonda",
//     state: "utter pradesh"
// }
// console.log("state");

//Reverse a String

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("hello"));

// Check Palindrome

// function isPalindrome(str) {
//     let reversed = str.split("").reversed().join("");
//     return str === reversed;
// }
// console.log(isPalindrome("madam"));

// Count Vowels in String

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiou";

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) count++;

//     }
//     return count;
// }

// console.log(countVowels("hello"));


// Factorial of Number

// function factorial(n) {
//     if(n === 0) return 1;
//     return n * factorial(n -1);
// }
// console.log(factorial(5));


// Fibonacci Series
// function fibonnaci(n) {
//     let arr = [0, 1];

//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr;
// }

// console.log(fibonnaci(10));

// Check Prime Number

// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7));

// Sum of Array
// function sumArray(arr) {
//     return arr.reduce((sum, num ) => sum + num, 0);
// }
// console.log(sumArray([1,2,3,4,5]));/

// Flatten Nested Array

// function flattenArray(arr) {
//     return arr.flat(Infinity);
// }

// console.log(flattenArray([1,[2,[3,[4,[5,6]]]]]));

// Capitalize First Letter

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalize("sandeep"));

// Find Missing Number

// function missingNumber(arr) {
//     let n = arr.length + 1;
//     let total = (n* (n + 1)) / 2;
//     let sum = arr.reduce((a, b) => a + b, 0);
//     return total - sum;
// }
// console.log(missingNumber([1,2,4,5]))

// Count Occurrences in Array

// function countOccurrences(arr) {
//     let obj = {};
//     for(let num of arr) {
//         obj[num] = (obj[num] || 0) + 1;
//     }
//     return obj;

// }
//  console.log(countOccurrences([1,2,2,3,3,3]));

// Anagram Check

// function isAnagram(str1, str2) {
//     let s1 = str1.split("").sort().join("");
//     let s2 = str2.split("").sort().join("");
//     return s1 === s2;

// }

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));

// Debounce Function

// function debounce (fn, delay) {
//     let timer;
//     return function(...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// function search(query) {
//     console.log("API Call:", query);
// }

// const debouncedSearch = debounce(search, 1000);

// // simulate typing

// debouncedSearch("h");
// debouncedSearch("he");
// debouncedSearch("hel");
// debouncedSearch("hell");
// debouncedSearch("hello");

// group Array Items by Property

const user = [
    {name: "Rajit", city: "Delhi"},
    {name: "Sandeep", city: "Delhi"},
    {name: "Kamaljeet", city: "Noida"}
];
const grouped = user.reduce((acc, user) => {
    (acc[user.city]=acc[user.city] || []).push(user);
    return acc;
}, {});
console.log(grouped);