var person = {
    firstName: "bukhori",
    lastName: "ma-lee"
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}; // Object Literal

// console.log(person.firstName);

console.log(person.fullName().toUpperCase());