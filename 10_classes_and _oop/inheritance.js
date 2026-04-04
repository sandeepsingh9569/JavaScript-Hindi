class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const ram  = new Teacher("ram ", "ram@teacher.com", "123")

ram.logMe()
const masalaRam = new User("ram ")

ram.logMe()

console.log(ram instanceof User);