import Lamp from "./Lamp.js";

class Room {
  /**
   * Legt einen neuen Raum an. Dieser Raum hat einen Namen,
   * sowie eine Breite und Höhe
   * @param {String} name
   * @param {int} width
   * @param {int} height
   */
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.lamps = [];
  }

  /**
   * Fügt dem Raum eine Lampe hinzu.
   * @param {Lamp} lamp
   */
  addLamp(lamp) {
    if (lamp instanceof Lamp) {
      this.lamps.push(lamp);
    }
  }

  addMultipleLamps( lampArray ) {
    for(let i=0; i < lampArray.length; i++ ) {
      this.addLamp( lampArray[i] );
    }
  }

  turnAllLampsOn() {
    for(let i=0; i < this.lamps.length; i++ ) {
      this.lamps[i].turnOn();
    }
  }
}

export default Room;
