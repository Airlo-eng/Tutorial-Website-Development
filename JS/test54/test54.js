// bind() = borrows a function and creates a copy "this"
// keyword replaced with the object passed in as an argument

speak = function(sound) {
    console.log(this.name, "is", sound);
}

let dog = {

    name: "dog",

    bark: function() {
        console.log(this.name, "is barking");
    }

};

let parrot = {

    name: "parrot",

    chirp: function() {
        console.log(this.name, "is chirping");
    }

};

bark = speak.bind(dog, "barking");
chirp = speak.bind(parrot, "chirping");

bark();
chirp();