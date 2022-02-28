class School{
    constructor(name,address,type){
        this.name = name
        this.address = address
        this.type = type
        this.grades = {}
        this.teachers = []
        this.students = []
    }

    hireTeacher(firstName,lastName,userName,passWord,age,gender,subject,salary){
        const teacher = new Teachers(firstName,lastName,userName,passWord,age,gender,subject,salary)
        this.teachers.push(teacher)
    }

    registerStudent(firstName,lastName,userName,passWord,age,gender,grade,tuition){
        const student = new Students(firstName,lastName,userName,passWord,age,gender,grade,tuition)
        this.students.push(student)
    }
    
}

class Users{
    constructor(firstName,lastName,userName,passWord,age,gender){
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.passWord = passWord
        this.age = age
        this.gender = gender
        this.isLoggedIn = false
        this.isActive = true
        this.lastLoggedIn = 0
    }
    signIn(){
        if(this.isActive){
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now()
        }else{
            alert('This User Has Been DeActivated')
        }
    }
    signOut(){
        this.isLoggedIn = false
    }
    getLastLoggedInDate(){
        const date = Date(this.lastLoggedIn)
        return date.toLocaleTimeString()

    }
    deActivateUser(){
        this.isActive = false
    }
    reActivateUser(){
        this.isActive = true
    }
}

class Teachers extends Users{
    constructor(firstName,lastName,userName,passWord,age,gender,subject,salary){
        super(firstName,lastName,userName,passWord,age,gender)
        this.subject = subject
        this.salary = salary
    }
}

class Students extends Users{
    constructor(firstName,lastName,userName,passWord,age,gender,grade,tuition){
        super(firstName,lastName,userName,passWord,age,gender)
        this.grade = grade
        this.tuition = tuition
    }
}

const school = new School('OmAminSchool','Wadi-Al-Joz','Fuckers School')

school.registerStudent('Ahmad','Kawasmi','iahmad2','276609',18,'male','12','male',5600)
school.hireTeacher('ibrahim','sharif','pobdda','2919',22,'male','scince',4600)

console.log(school);