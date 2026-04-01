// let myName = "sandeep     "
// let mychannel = "ram     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sandeep = function(){
    console.log(`sandeep is present in all objects`);
}

Array.prototype.heySandeep = function(){
    console.log(`Sandeep says hello`);
}

// heroPower.sandeep()
// myHeros.sandeep()
// myHeros.heySandeep()
// heroPower.heySandeep()

// inheritance

const User = {
    name: "ram",
    email: "ram@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "RamAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sandeep".trueLength()
"iceTea".trueLength()