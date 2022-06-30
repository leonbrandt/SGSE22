function fillTable(data) {
  const tableEl = document.querySelector("#main_table");
  tableEl.innerHTML = "";

  // Headerrow
  tableEl.appendChild(getHeaderRow(data));

  // Inhalt
  const tbody = document.createElement("tbody");

  for (let row of data) {
    tbody.appendChild(getRow(row));
  }

  tableEl.appendChild(tbody);
}

function getHeaderRow(data) {
  const header = document.createElement("thead");
  const tr = document.createElement("tr");
  header.appendChild(tr);

  for (let key in data[0]) {
    const th = document.createElement("th");
    th.innerText = key;

    tr.appendChild(th);
  }

  return header;
}

function getRow(row) {
  const tr = document.createElement("tr");

  for (let key in row) {
    const td = document.createElement("td");
    td.innerText = row[key];

    if (row[key] instanceof Date) {
      td.innerText = `${row[key].getDate()}.${row[key].getMonth()}.${row[
        key
      ].getFullYear()}`;
    }

    tr.appendChild(td);
  }

  return tr;
}

function setListDescribeField( selector, value, color ) {
  const el = document.querySelector( selector );
  el.innerText = value.toString();

  if ( color !== '' ) {
    el.style.color = color;
  }
}

function setSumPreis(sumPreis, color="" ) {
  setListDescribeField( "#sum_preis", sumPreis, color );
}

function setMaxPreis(maxPreis, color="") {
  setListDescribeField( "#max_preis", maxPreis, color );
}

function setMinPreis(minPreis, color="") {
  setListDescribeField( "#min_preis", minPreis, color );
}

function setGreeting(greeting) {
  const greetEl = document.querySelector('#greeting');
  greetEl.innerText = greeting;
}

function setOutput( obj ) {
  const outputEl = document.querySelector('#output');

  if ( obj instanceof Array ) {
    outputEl.innerText = obj.join(', ');
  } else {
    outputEl.innerText = obj;
  }
}

export default { fillTable, setGreeting, setOutput, setSumPreis, setMinPreis, setMaxPreis };
