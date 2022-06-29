class Kreis {
    constructor( cx, cy, r ) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.rotation = 0;
    }

    rescale(factor) {
        this.r = this.r * factor;
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

export default Kreis;