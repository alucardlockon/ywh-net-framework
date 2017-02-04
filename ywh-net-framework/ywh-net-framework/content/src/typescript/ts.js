"use strict";
var Person = (function () {
    function Person(name, yearOfBirth, city) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
    }
    Person.prototype.toString = function () {
        return this.name + "-" + this.yearOfBirth;
    };
    return Person;
}());
document.write(new Person("gavin", 1984).toString());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Person;
