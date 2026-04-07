class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sandeep = new User("sandeep")


console.log(User.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const asusVivobook = new Teacher("asusVivobook", "asus@Vivobook.com")


console.log(Teacher.createId())