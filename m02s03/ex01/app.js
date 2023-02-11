class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 150;
    this.topReverseSpeed = -80;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate(deltaSpeed = 1) {
    this.setSpeed(this.speed + deltaSpeed);

    return this;
  }

  decelerate(deltaSpeed = 1) {
    this.setSpeed(this.speed - deltaSpeed);

    return this;
  }

  // implementarea binecunoscutei metode
  // setSpeed + protectiile de supra si subaccelerare
  // + chaining

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

audi.accelerate();

audi.setSpeed(70);

audi.displaySpeed();
