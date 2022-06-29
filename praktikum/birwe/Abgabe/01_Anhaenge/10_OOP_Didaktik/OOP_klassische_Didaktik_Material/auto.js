class Auto {
  constructor(color, maxSpeed, doorCount) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.doorCount = doorCount;
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

export default Auto;
