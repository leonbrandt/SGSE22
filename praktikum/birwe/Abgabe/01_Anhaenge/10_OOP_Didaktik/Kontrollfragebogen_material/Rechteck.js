class Rechteck {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = 0;
  }

  rescale(factor) {
    this.width = this.width * factor;
    this.height = this.height * factor;
  }

  rotate(rotateDegree) {
    const newRotation = this.rotation + rotateDegree;

    if (newRotation >= 360) {
      this.rotation = newRotation - 360;
    } else if (newRotation < 0) {
      this.rotation = 360 + newRotation;
    } else {
      this.rotation = newRotation;
    }
  }
}

export default Rechteck