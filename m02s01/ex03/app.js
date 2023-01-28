const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    // this.speed++;

    this.setSpeed(this.speed + 1);

    this.displaySpeed();
  },

  decelerate: function () {
    // this.speed--;

    this.setSpeed(this.speed - 1);

    this.displaySpeed();
  },

  setSpeed: function (speed = 0) {
    // nu inteleg de ce aici, in VS Code,
    // apare setSpeed in codul de culori cu verde
    // similar mai jos, turnLightsOn si turnLightsOff

    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
    this.displaySpeed();
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    this.turnLightsOn();
    const self = this;

    setTimeout(function () {
      console.log(self);
      self.turnLightsOff();
    }, 5000);

    // sau arrow function use cu this
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

audi.setSpeed(140);
audi.accelerate();

audi.setSpeed(200);

audi.decelerate();
audi.decelerate();

audi.flashLights();
