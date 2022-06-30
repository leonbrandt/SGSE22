class Quadrat extends Rechteck {
  constructor(x, y, size, color ) {
    super(x, y, size, size);
    this.color = color;
  }

  printColor() {
    console.log("this square is colored in " + this.color );
  }
}

export default Quadrat