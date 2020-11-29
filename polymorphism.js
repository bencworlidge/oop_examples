// POLYMORPHISM

// Many Forms - An object sharing a common interface for multiple types, but implementating differently.

let boat = {
  move() {
    console.log("The Boat is Sailing");
  },
};

let helicopter = {
  move() {
    console.log("The Helicopter is Flying");
  },
};

let car = {
  move() {
    console.log("The Car is Driving");
  },
};

// Same method being used for all but output is different
boat.move();
helicopter.move();
car.move();
