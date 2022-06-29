import Auto from "./auto.js";

class Cabrio extends Auto {
  constructor(color, maxSpeed, doorCount) {
    super(color, maxSpeed, doorCount);
    this.roofOpen = false;
  }

  openRoof() {
    this.roofOpen = true;
  }

  closeRoof() {
    this.roofOpen = false;
  }
}

export default Cabrio;
