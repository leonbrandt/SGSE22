import Lamp from "./Lamp.js";

class RGBLamp extends Lamp {
  constructor(positionX, positionY, radius, brightness, r,g,b) {
    super(positionX, positionY, radius, brightness);
    this.r = r;
    this.g = g;
    this.b = b;
  }

  setColor( r,g,b ) {
      this.r = r;
      this.g = g;
      this.b = b;
  }
}

export default RGBLamp;
