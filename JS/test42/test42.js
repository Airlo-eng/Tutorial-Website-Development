// inheritance = useful for code reusability
// reuse properties and methods of an existing class
// children classes inherit from parent classes

class Animal {

    constructor() {
        this.alive = true;
    }

    eat() {
        console.log("This animal is eating");
    }

}

class Rabbit extends Animal {

    run() {
        consle.log("This rabbit is running");
    }

}

class Fish extends Animal {

    swim() {
        consle.log("This fish is swimming");
    }

}

class Hawk extends Animal {

    fly() {
        console.log("This hawk is flying");
    }

}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

rabbit.run();
fish.swim();
hawk.fly();