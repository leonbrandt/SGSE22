class Lamp {
  /**
   * Erzeugt eine neue Lampe an einer bestimmten Position
   * mit einem spezifischen Beleuchtungsradius und einer bestimmten Helligkeit
   * @param {int} positionX
   * @param {int} positionY
   * @param {int} radius
   * @param {int} brightness
   */
  constructor(positionX, positionY, radius, brightness) {
    this.lightOn = false;
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.brightness = brightness;
  }

  /**
   * Schaltet die Lampe an
   */
  turnOn() {
    this.lightOn = true;
  }

  /**
   * Schaltet die Lampe aus
   */
  turnOff() {
    this.lightOn = false;
  }

  /**
   * Prüft, ob die Lampe bereits angeschaltet ist oder nicht
   * @returns bool
   */
  isOn() {
    if (this.lightOn === true) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Setzt den Beleuchtungsradius einer Lampe neu.
   * @param {int} radius
   */
  setRadius(radius) {
    if (radius > 0) {
      this.radius = radius;
    }
  }
}

export default Lamp;
