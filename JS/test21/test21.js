// useful string properties and methods

var nyName = "Airlo the Avatar";
var myStreet = "123 Fake st."
var myCity = "Nowhere XY 12345"
var myPhone = "123-456-7890"

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("o"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// var firstName = myName.slice(0, 3);
firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-","");
console.log(myPhone);