// ENCAPSULATION

const employee = {
  name: "Ben Worlidge",
  setName: function (value) {
    return (this.name = value);
  },
  getName: function () {
    return this.name;
  },
};
console.log(employee.getName());
employee.setName("Not Ben Worlidge");
console.log(employee.getName());
// Can change name property outside of object

////////////////////

const sayHello = () => {
  const greeting = "Hello World";
};
console.log(greeting);
// Can't access variable declared in function due to function scope

////////////////////

const car = () => {
  var name = "Corsa";
  var myObj = {
    setName: function (value) {
      name = value;
    },
    getName: function () {
      return name;
    },
  };
};
car.getName(); // can't use function because myObj is private to the function

////////////////////

const character = (function () {
  let name = "Jon Snow";
  return {
    setName: function (value) {
      name = value;
    },
    getName: function () {
      return name;
    },
  };
})();
console.log(character.getName()); // Jon Snow
character.setName("You Know Nothing");
console.log(character.getName()); // You Know Nothing
// This works as the inner object has been returned

// Simplifies App
// Guards against illegal access
