const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const fizz = {
    name: 'ginger fizz',
    price: 25,
    isAvailable: true,

    orderfizz: function(){
        console.log("fizz nhi hai");
    }
}

console.log(Object.getOwnPropertyDescriptor(fizz, "name"));

Object.defineProperty(fizz, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(fizz, "name"));

for (let [key, value] of Object.entries(fizz)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}