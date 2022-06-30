import Lamp from "./Lamp.js";

class DimmerLamp extends Lamp {
  /**
   * Erzeugt eine neue Dimmerlampe
   * @param {int} positionX
   * @param {int} positionY
   * @param {int} radius
   * @param {int} brightness
   * @param {int} maxBrightness
   */
  constructor(positionX, positionY, radius, brightness, maxBrightness) {
    super(positionX, positionY, radius, brightness);
    this.maxBrightness = maxBrightness;
  }

  /**
   * Erhöht die Helligkeit der Lampe um eins bis die maximale Helligkeit erreicht ist
   */
  increaseBrightness() {
    const newBrightness = this.brightness + 1;

    if (newBrightness <= this.maxBrightness) {
      this.brightness = newBrightness;
    }
  }

  /**
   * Reduziert die Helligkeit der Lampe bis diese 0 erreicht hat.
   */
  decreaseBrightness() {
    const newBrightness = this.brightness - 1;

    if (newBrightness >= 0) {
      this.brightness = newBrightness;
    }
  }

  /**
   * Gibt zurück, ob die Helligkeit das Maximun erreicht hat
   * @returns bool
   */
  hasMaximumBrightness() {
    if (this.brightness >= this.maxBrightness) {
      return true;
    } else {
      return false;
    }
  }
}

export default DimmerLamp;
