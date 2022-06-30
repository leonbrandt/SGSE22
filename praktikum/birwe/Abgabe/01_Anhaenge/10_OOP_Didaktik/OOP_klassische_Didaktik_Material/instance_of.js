import Auto from "./auto.js";
import Cabrio from "./cabrio.js";

const meinAuto = new Auto("gray", 150, 5);
const meinCabrio = new Cabrio("red", 250, 3);

console.log(meinAuto instanceof Auto);
console.log(meinAuto instanceof Cabrio);

console.log(meinCabrio instanceof Auto);
console.log(meinCabrio instanceof Cabrio);

if ( meinCabrio instanceof Cabrio ){
    meinCabrio.openRoof();
}

if ( meinCabrio instanceof Auto ) {
    meinCabrio.speedUp();
}
