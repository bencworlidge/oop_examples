// INHERITANCE

// Aquiring one class receiving methods and props from another.

class Car {
  wheels = 4;
  color = "red";
  automatic = true;

  setOwner(name) {
    this.name = name;
  }

  startEngine() {
    console.log(this.name + "'s car has started");
  }
}

class BlueCar extends Car {
  color = "blue";
}

let barryCar = new BlueCar();
barryCar.setOwner("Barry");

console.log(barryCar);
barryCar.startEngine();
