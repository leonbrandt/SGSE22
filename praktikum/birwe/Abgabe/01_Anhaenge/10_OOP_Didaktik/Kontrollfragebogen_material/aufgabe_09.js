import Rechteck from './Rechteck.js'
import Quadrat from './Quadrat.js';
import Kreis from './Kreis.js';

const rechteck = new Rechteck(5,5,10,15);
const quadrat = new Quadrat(10,5, 10, 'blue');
const kreis = new Kreis(5,15, 5);

if ( rechteck instanceof Rechteck ) {
    console.log("rechteck ist ein Rechteck");
}

if ( quadrat instanceof Rechteck ) {
    console.log("quadrat ist ein Rechteck");
}

if ( kreis instanceof Rechteck ) {
    console.log("kreis ist ein Rechteck");
}