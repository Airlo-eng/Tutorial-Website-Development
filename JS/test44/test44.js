// super = reference to the parent class (super class)
// very similar to "this" keyword
// can use a super classes: constructor, methods

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log("Hello", this.name);
        console.log("You are", this.age, "years old");
    }

}

class Student extends Person {

    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }

    hello() {
        super.welcome();
        console.log("Your gpa is", this.gpa);
    }

}

class Teacher extends Person {

    constructor(name, age, classSize) {
        super(name, age);
        this.classSize = classSize;
    }

    hello() {
        super.welcome();
        console.log("Your gpa is", this.classSize);
    }

}

let student = new Student("Steve", 21, 2.0);
let teacher = new Teacher("Bob", 45, 30);

//console.log(student.name, student.age, student.gpa);
//console.log(teacher.name, teacher.age, teacher.classSize);

student.hello();
teacher.hello();