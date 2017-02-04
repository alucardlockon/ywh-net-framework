class Person {
    constructor(public name: string, public yearOfBirth: number,public city?:string) {
    }
    toString() {
        return this.name + "-" + this.yearOfBirth; // City is not a part of the key. 
    }
}

document.write(new Person("gavin", 1984).toString());
export default Person