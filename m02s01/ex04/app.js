class Car {
  areHazardsOn = false;
  areLightsOn = false;

  constructor(
    left = 0,
    top = 0,
    color = 'black',
    capColor = 'white',
    wheelColor = 'black',
    bodyColor = 'red',
    topColor = 'red',
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.capColor = capColor;
    this.wheelColor = wheelColor;
    this.bodyColor = bodyColor;
    this.topColor = topColor;

    this.intervalId = -1;

    this.frame = this.createElement('div', ['frame']);
    this.changePosition(this.left, this.top);

    this.createFragment();
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.frame.append(this.car);

    // roof?
    this.carTop = this.createElement('div', ['car__top']);
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = this.createElement('div', ['car__body']);
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = this.createElement('div', ['light', 'light--front']);
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--back',
    ]);
    this.carBody.append(this.wheelBack);
    this.wheelCapBack = this.createElement('div', ['wheel__cap']);
    this.wheelBack.append(this.wheelCapBack);

    // wheel front
    this.wheelFront = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--front',
    ]);
    this.carBody.append(this.wheelFront);
    this.wheelCapFront = this.createElement('div', ['wheel__cap']);
    this.wheelFront.append(this.wheelCapFront);
  }

  turnLightsOn() {
    this.lightFront.classList.add('light--on');
    this.areHazardsOn = true;

    return this;
  }

  turnLightsOff() {
    this.lightFront.classList.remove('light--on');
    this.areLightsOn = false;

    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');

    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');

    return this;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;

    // nu inteleg de ce, cand apelez changePosition() cu valori noi pt left si top,
    // nu apare niciun efect de ease-in-out si miscarea se produce instant. Sigur uit ceva :)

    return this;
  }

  changeBodyColor(bodyColor) {
    this.carBody.style.backgroundColor = bodyColor;

    return this;
  }

  changeTopColor(topColor) {
    this.carTop.style.backgroundColor = topColor;

    return this;
  }

  changeTireColor(wheelColor) {
    this.wheelFront.style.backgroundColor = wheelColor;
    this.wheelBack.style.backgroundColor = wheelColor;

    // aici, in mod ciudat, imi pune culoarea noua doar pe wheelFront
    // am scos wheelFront de tot si am lasat doar wheelBack si tot pe wheelFront in pune culoarea :))

    return this;
  }

  changeCapColor(capColor) {
    this.wheelCapFront.style.backgroundColor = capColor;
    this.wheelCapBack.style.backgroundColor = capColor;

    return this;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    return element;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }

  // toggleHazards() {
  //   setInterval(() => {
  //     this.lightFront.classList.toggle('light--on');
  //     this.lightBack.classList.toggle('light--on');
  //   }, 500);
  // }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      // stop hazards
      clearInterval(this.intervalId);
      this.areHazardsOn = false;
    } else {
      // v2 for "this"
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff();
        } else {
          this.turnLightsOn();
        }
      }, 800);
      this.areHazardsOn = true;
    }

    return this;
  }
}

const car = new Car(0, 250, 'red');
car.render();
car.turnLightsOn();
car.engageBreak();
car.disengageBreak();
car.turnLightsOff();

car.changeTireColor('blue');
car.changeCapColor('magenta');
car.changeBodyColor('yellow');
car.changeTopColor('green');

car.changePosition(300, 300);

car.toggleHazards();
car.toggleHazards();
car.toggleHazards();
car.toggleHazards();

const car2 = new Car(50, 45, 'blue', 'red').render();
car2.changeTopColor('black');
car2.changeBodyColor('yellow');
car2.changeCapColor('blue');

// car2.changeTireColor('magenta');

car2.toggleHazards();
car2.toggleHazards();
car2.toggleHazards();
car2.toggleHazards();
