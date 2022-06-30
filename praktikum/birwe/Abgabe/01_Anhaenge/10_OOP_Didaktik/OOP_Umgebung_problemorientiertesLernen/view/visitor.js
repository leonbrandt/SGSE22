import RGBLamp from "../js/RGBLamp.js";

const SVG_NS = "http://www.w3.org/2000/svg";

class Visitor {
  constructor(svgEl) {
    this.svgEl = svgEl;
  }

  visitRooms(rooms) {
    const OFFSET = 1;

    // +2 wegen Raumbeschriftung
    const svgHeight =
      rooms
        .map((r) => r.height)
        .reduce((prev, cur) => (cur > prev ? cur : prev), 0) + 2;

    const svgWidth =
      rooms.map((r) => r.width).reduce((prev, cur) => prev + cur, 0) +
      (rooms.length - 1) * OFFSET;

    this.svgEl.setAttribute("width", `${svgWidth}px`);
    this.svgEl.setAttribute("height", `${svgHeight}px`);
    this.svgEl.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

    let prevX = 0;
    for (let i = 0; i < rooms.length; i++) {
      console.log(rooms[i]);
      this.visitRoom(rooms[i], [prevX, 0]);

      prevX += rooms[i].width + OFFSET;
    }
  }

  visitRoom(room, offset) {
    const roomGroup = document.createElementNS(SVG_NS, "g");
    roomGroup.classList.add("room_group");
    roomGroup.setAttribute("transform", `translate(${offset[0]},${offset[1]})`);

    // Raum Rechteck
    const roomSvg = document.createElementNS(SVG_NS, "rect");
    roomSvg.setAttribute("x", "0");
    roomSvg.setAttribute("y", "0");
    roomSvg.setAttribute("width", `${room.width}px`);
    roomSvg.setAttribute("height", `${room.height}px`);
    roomSvg.setAttribute("fill", "lightgray");

    roomGroup.appendChild(roomSvg);

    // Raum Beschriftung
    const roomLabel = document.createElementNS(SVG_NS, "text");
    roomLabel.innerHTML = room.name;
    roomLabel.classList.add("room_label");
    roomLabel.setAttribute("x", `${room.width / 2}px`);
    roomLabel.setAttribute("y", `${room.height + 1}px`);
    roomGroup.appendChild(roomLabel);

    this.svgEl.appendChild(roomGroup);

    for (let lamp of room.lamps) {
      const lampEl = this.visitLamp(lamp);
      roomGroup.appendChild(lampEl);
    }
  }

  visitLamp(lamp) {
    if (lamp instanceof RGBLamp) {
      this.visitRGBLamp(lamp);
    } else {
      let lampColor = "yellow";
      let radiusColor = `rgba(255,245,145,${lamp.brightness / 100})`;

      return this.renderLamp(lamp, lampColor, radiusColor);
    }
  }

  visitRGBLamp(lamp) {
    let lampColor = `rgb(${lamp.r},${lamp.g},${lamp.b})`;
    let radiusColor = `rgba(${lamp.r},${lamp.g},${lamp.b},${
      lamp.brightness / 100
    })`;

    this.renderLamp(lamp, lampColor, radiusColor);
  }

  renderLamp(lamp, lampColor, radiusColor) {
    const g = document.createElementNS(SVG_NS, "g");
    const lampEl = document.createElementNS(SVG_NS, "circle");
    lampEl.setAttribute("r", "0.2px");
    lampEl.setAttribute("cx", "0px");
    lampEl.setAttribute("cy", "0px");

    if (lamp.isOn()) {
      lampEl.setAttribute("fill", lampColor);
      const brightnessCircle = document.createElementNS(SVG_NS, "circle");

      brightnessCircle.setAttribute("fill", radiusColor);
      brightnessCircle.setAttribute("r", `${lamp.radius}px`);
      brightnessCircle.setAttribute("cx", "0px");
      brightnessCircle.setAttribute("cy", "0px");
      g.appendChild(brightnessCircle);
    } else {
      lampEl.setAttribute("fill", "darkgray");
    }

    g.setAttribute(
      "transform",
      `translate(${lamp.positionX}, ${lamp.positionY})`
    );
    g.appendChild(lampEl);

    return g;
  }
}

export default Visitor;
