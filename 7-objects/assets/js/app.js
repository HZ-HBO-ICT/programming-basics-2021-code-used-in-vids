let myCar = {
  colour: "red",
  engine: 2.0,
  wheels: 4,
  honk: function() {
    console.log("Honk, Honk", this.colour);
  }
};

console.log(myCar);

myCar.height = 1.4;
myCar.drive = function() {
  console.log("driving myCar");
};

myCar.drive();
myCar.honk();

// const me = {};

const me = {
  car: {
    brand: "volvo",
    model: "v70",
    wheels: 4
  },
  familyfriend: ["rimmert", "rozemarijn", "jasper", "nanneke", "streepje"],
  printFriendNames: function() {
    console.log(
      `Mijn favoriete vervoersmiddel is de ${this.car.brand} en die heeft ${this.car.wheels} wielen`
    );
  },
  printTransportation: function() {
    this.familyfriend.forEach(element => {
      console.log(element);
    });
  }
};

me.printFriendNames();
me.printTransportation();