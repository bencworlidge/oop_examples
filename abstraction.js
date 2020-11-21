// ABSTRACTION

class Car {
  constructor(make, model, colour, carPrice) {
    (this.make = make),
      (this.model = model),
      (this.colour = colour),
      (this.carPrice = carPrice);
  }

  changeCarColour = (newColour) => {
    this.colour = newColour;
  };

  changeCarPrice = (price) => {
    this.carPrice = price;
  };

  getCarDetails = () => {
    console.log(
      `Make: ${this.make} | Model: ${this.model} | Colour: ${this.colour} | Price: £${this.carPrice}.`
    );
  };
}

let crapCar = new Car("Fiat", "Punto", "Red", 2000);
crapCar.changeCarColour("Pink");
crapCar.changeCarPrice(5);
crapCar.getCarDetails();

//Can easily change parameters without needing to know what's happening inside
