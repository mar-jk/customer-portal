// personClass.js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person('Bob', 40);
person.introduce(); // Output: Hi, I'm Bob and I'm 40 years old.
