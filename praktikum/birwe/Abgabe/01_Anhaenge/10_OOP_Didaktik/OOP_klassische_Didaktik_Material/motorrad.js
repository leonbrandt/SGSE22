class Fahrzeug {
  constructor(color, maxSpeed, wheelCount) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.wheelCount = wheelCount;
    this.speed = 0;
  }

  speedUp() {
    const newSpeed = this.speed + 1;

    if (newSpeed <= this.maxSpeed) {
      this.speed = newSpeed;
    }
  }

  brake() {
    const newSpeed = this.speed - 1;

    if (newSpeed >= 0) {
      this.speed = newSpeed;
    }
  }
}

class Auto extends Fahrzeug {
  constructor(color, maxSpeed, doorCount) {
    super(color, maxSpeed, 4);
    this.doorOpen = false;
  }

  openDoor() {
    this.doorOpen = true;
  }

  closeDoor() {
    this.doorOpen = false;
  }
}

class Motorrad extends Fahrzeug {
  constructor(color, maxSpeed) {
    super(color, this.maxSpeed, 2);
  }
}
