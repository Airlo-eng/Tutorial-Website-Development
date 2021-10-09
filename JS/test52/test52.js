// call() = predefined method that can call
// a method belonging to another object.

// Whichever object you want to use
// that method with, pass that object
// as an argument withing call()
// this = object passed in

let employee = {
    name: "SpongeBob",

    cook: function() {
        console.log(this.name, "is cooking");
    }
};

let supervisor = {
    name: "Squidward",

    cashier: function() {
        console.log(this.name, "is at the cash register");
    }
};

let boss = {
    name: "Mr. Krabs",

    beInCharge: function() {
        console.log(this.name, "is in charge");
    }
};

//employee.cook();
//supervisor.cashier();
//boss.beInCharge();

employee.cook.call(supervisor);
supervisor.cashier.call(boss);
boss.beInCharge.call(employee);