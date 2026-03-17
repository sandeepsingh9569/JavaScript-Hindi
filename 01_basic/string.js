const name = "sandeep"
const repoCount = 50

// console.log(name+ repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandeep')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 5)
console.log(anotherString);

const newStringOne = "sandeep"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sandeep.com/sandeep%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sandeep'))

console.log(gameName.split('-'));
