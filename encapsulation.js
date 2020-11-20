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
// Can change name property outside of function

const sayHello = () => {
  const greeting = "Hello World";
};
console.log(greeting);
// Can't access variable declared in function due to function scope

const car = () => {
  var name = "Corsa";
  var exp = new RegExp(/\d+/);
  var myObj = {
    setName: function (value) {
      name = value; // The object has access to "name"
    },
    getName: function () {
      return name; // The object has access to "name"
    },
  }; // End of the Object
};
car.getName(); // doesn't work!
