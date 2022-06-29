import Visitor from "./view/visitor.js";
import Room from "./js/Room.js";
import Lamp from "./js/Lamp.js";
import DimmerLamp from "./js/DimmerLamp.js";
import RGBLamp from "./js/RGBLamp.js";

function updateView(mainSvg, rooms) {
  const visitor = new Visitor(mainSvg);
  visitor.visitRooms(rooms);
  // setInterval(() => {
  //   mainSvg.innerHTML = "";
  //   visitor.visitRooms(rooms);
  //   console.log("view updated");
  // }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  const kitchen = new Room("Küche", 6, 11);
  const lamp1 = new Lamp(3, 5, 2, 20);
  const lamp3 = new Lamp(1, 10, 2, 20);
  const lamp4 = new Lamp(1, 3, 2, 20);

  kitchen.addMultipleLamps([lamp1, lamp3]);
  kitchen.addLamp( lamp4 )
  kitchen.turnAllLampsOn();

  const livingRoom = new Room("Wohnzimmer", 5, 11);
  const lamp2 = new Lamp(3, 3, 3, 20);
  lamp2.turnOn();
  livingRoom.addLamp(lamp2);

  // neue Lampen


  // Für die Darstellung - Ab hier kann der Bereich ignoriert werden
  const mainSvg = document.querySelector("#main_svg");
  updateView(mainSvg, [kitchen, livingRoom]);
});
