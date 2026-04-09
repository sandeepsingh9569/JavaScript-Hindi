// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((ele) => {
//     console.log(ele);
// });

// arr.map((ele) => {
//     console.log(ele * 2);
// });

// fun(a , cb)

// salary.map((ele) => {
//     console.log(ele * 2);
// });


let salary = [1000, 2000, 3000, 400];
let arr2 = [200 ,300, 400, 500]

function tenPercent(salary) {
    return salary * 0.1;
}

function twentyPercent(salary) {
    return salary * 0.2;
}

// function calculateTex(salary, cb) {
//     let res = [];
//     for (let i = 0; i < salary.length; i++) {
//         // res.push(salary(i)(cb));
//         res.push(cb(salary[i]));
//     }
//     return res;
// }
// console.log(calculateTex(arr2, twentyPercent));

// Array.prototype.calculateTex = function(cb) {
//     let res = [];
//     for(let i = 0; i < this.length; i++){
//         res.push(cb(this[i]));
//     }
//     return res;
// }
// let res = arr2.calculateTex(tenPercent);
// console.log(res);


("use strict");
// console.log(this);

function abcd () {
    console.log(this);
}
// abcd();

// const abc = () => {
//     let a =10;
//     console.log(this.a);
// };
// abc();
// console.log(this.a);

// let obj1 = {
//     fname: "sandeep",
//     a: 10,
//     abc: () => {
//         console.log(this.a);
//     },
// };
// obj1.abc();




// a

// let arr = [1, 2, 3, 4, 5];
// arr.filter((ele) => {
//     if ( ele % 2 == 0) {
//         console.log(ele);
//     }
// }); 

//  arr. reduce((acc, ele) => acc + ele);

// arr2.map().filter().reduce();