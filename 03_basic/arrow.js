const user = {
    username: "sandeep",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function Ram(){
//     let username = "sandeep"
//     console.log(this.username);
// }

// Ram()

// const ram = function () {
//     let username = "sandeep"
//     console.log(this.username);
// }

const ram =  () => {
    let username = "sandeep"
    console.log(this);
}


// ram()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "sandeep"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()