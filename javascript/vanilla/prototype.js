////////////////////////////////
//// What are prototypes in JS?
////////////////////////////////

// Prototypes are a powerful and very flexible feature of JavaScript, 
// making it possible to reuse code and combine objects.


////////////////////////////////
//// Getting a prototype.
////////////////////////////////

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid

Object.getPrototypeOf(myObject); // Object { }



////////////////////////////////
//// Setting a prototype.
////////////////////////////////

// Using Object.create.
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#using_object.create

const personPrototype = {
    greet() {
        console.log("hello!");
    },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

console.log('personPrototype', personPrototype);

// Using a constructor
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#using_a_constructor

const personPrototype2 = {
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype2);
// or
// Person.prototype.greet = personPrototype2.greet;

const reuben = new Person("Reuben");
reuben.greet(); // Hello, my name is Reuben!

console.log('personPrototype2', personPrototype2);


// Properties that are defined directly in the object, like name here, are called own properties, 
// and you can check whether a property is an own property using the static Object.hasOwn() method:
const irma = new Person("Irma");
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false