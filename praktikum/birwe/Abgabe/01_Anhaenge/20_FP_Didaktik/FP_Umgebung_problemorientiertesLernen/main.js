import data from "./data/data.js";
import view from "./view/fill_table.js";

document.addEventListener("DOMContentLoaded", () => {
  // Unterhalb dieser Zeile beginnt der relevante Bereich
  // Die Begrüßungszeile wird gesetzt
  const username = "Frederic";
  
  /**
   * Die Funktion erzeugt einen String, der die in 
   * der Variable username spezifizierte Person grüßt
   * @returns String
   */
  const greeting = function () {
    return "Willkommen " + username + '!';
  }

  view.setGreeting(greeting());

  // Die Liste der angezeigten Produkte wird generiert.

  /**
   * Die Funktion filtert aus einer Liste nur diejenigen Einträge heraus,
   * die im Schenke erworben wurden.
   */
  const schenkeFilter = filter((row) => {
    if (row.geschaeft == "Schenke") {
      return true;
    }

    return false;
  });

  /**
   * Die Funktion filtert aus einer Liste von Objekten
   * diejenigen Einträge heraus, die im Mai 2022 erworben wurde
   */
  const mai2022Filter = filter((row) => {
    if (
      row.datum >= new Date(2022, 4, 1) &&
      row.datum <= new Date(2022, 4, 31)
    ) {
      return true;
    } else {
      return false;
    }
  });

  /**
   * Die Funktion filtert aus einer Liste von Objekten
   * diejenigen Einträge heraus, die als Kategorie "Käse" haben
   */
  const kaeseFilter = filter((row) => {
    return row.kategorie == "kaese";
  });

  const suessigkeitenFilter = filter(row => row.kategorie == 'suessigkeiten')

  const filteredData = mai2022Filter(schenkeFilter([...kaeseFilter(data), ...suessigkeitenFilter(data)]));
  const sumPreis = sum(map((el) => el.preis)(filteredData));

  function getMaxPreis( array ) {
    let maxPreis = 0;

    for( let i=0; i < array.length; i++ ) {
      if ( maxPreis < array[i].preis ) {
        maxPreis = array[i].preis;
      }
    }

    return maxPreis;
  }

  // const getMaxPreis = reduce((previousValue,currentValue) => {
  //   if( previousValue === null || previousValue < currentValue.preis ) {
  //     return currentValue.preis;
  //   }

  //   return previousValue;
  // });


  // Diese Funktionen steuern die Ansicht im Browser
  // Wie diese funktionieren ist egal, du darfst aber die übergebenen
  // Parameter ändern
  view.fillTable(filteredData);

  // Listenbeschreibungen
  let color="red";
  view.setSumPreis(sumPreis, color);

  color = "blue";
  view.setMaxPreis(getMaxPreis(filteredData), color);

  color = "green";
  view.setMinPreis( "x. xx", color );

  view.setOutput( getUnique(map(el => el.produkt)(filteredData)) );
  view.setOutput(  "" );

});


function reduce( func ) {
  return (arr) => {
    let startValue = null;

    for(let i=0; i < arr.length; i++) {
      startValue = func(startValue, arr[i])
    } 

    return startValue;
  }
}

/**
 * Die Funktion bekommt ein Array übergeben und 
 * liefert eine Liste zurück, in der jedes einzigartige Elemente aus
 * der Ursprungsliste einmal vorhanden ist.
 * Anderherum formuliert filtert die Funktion Duplikate aus einer Liste heraus 
 * 
 * @param {*[]} arr Eine Liste von Objekten 
 * @returns Eine Liste von Objekten
 */
function getUnique(arr) {
  const uniqueVals = [];

  for(let i=0; i < arr.length; i++) {
    if( uniqueVals.includes(arr[i]) == false ) {
      uniqueVals.push( arr[i] );
    }
  }

  return uniqueVals;
}

/**
 * Die liefert eine Funktion zurück.
 * Die returnte Funktion führt eine bestimmte Aktion auf jedes Element
 * des übergebenen Arrays aus.
 * Welche Aktion für jedes Element ausgeführt werden soll, legt die als Parameter übergebene
 * Funktion "func" fest. Diese bekommt ein einzelnes Element eines Arrays als Parameter übergeben
 * und liefert die transformierte Version des selben zurück.
 * @param {function} func 
 * @returns function
 */
function map(func) {
  return (arr) => {
    const out = [];
    for (let i = 0; i < arr.length; i++) {
      out.push(func(arr[i]));
    }

    return out;
  };
}

/**
 * Die Funktion gibt eine Funktion zurück, die ein Array
 * nach bestimmten Kriterien filtert.
 * Nach welchen Kriterien gefiltert wird, legt die Funktion func fest,
 * die als Parameter übergeben wird.
 * Diese erhält als Parameter ein einzelnes Arrayelement und liefert einen
 * boolschen Wert zurück. True steht dabei für "verbleibt im Ausgabearray" und 
 * false für "wird herausgefiltert".
 * @param {function} func 
 * @returns function
 */
function filter(func) {
  return (arr) => {
    const out = [];

    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i]) == true) {
        out.push(arr[i]);
      }
    }

    return out;
  };
}

/**
 * Die Funktion bekommt eine Liste von Zahlen übergeben
 * und summiert diese auf.
 * @param {Number[]} arr Eine Liste von Zahlen
 * @returns Number
 */
function sum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}
