import Auto from "./auto.js";

const meinOpel = new Auto("gray", 160, 5);
const deinOpel = new Auto("red", 175, 5);

console.log(meinOpel);

meinOpel.speedUp();
meinOpel.speedUp();
meinOpel.speedUp();
deinOpel.speedUp();

console.log( meinOpel.speed );