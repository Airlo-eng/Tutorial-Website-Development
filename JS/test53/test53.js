// apply() = borrow an object's functions.
// similar to call(), but pass an array
// in place of extra individual arguments

let classRoom = {

    takeAttendance : function(...students) {
        console.log(this.name, "is taking attendance");

        for (let i in students) {
            console.log(students[i]);
        }
    }
    
};

let teacher = {

    name: "Mrs. Puff"

};

let students = ["SpongeBob", "Patrick", "Sandy"];
students.push("Squidward");

classRoom.takeAttendance.apply(teacher, [students]);
