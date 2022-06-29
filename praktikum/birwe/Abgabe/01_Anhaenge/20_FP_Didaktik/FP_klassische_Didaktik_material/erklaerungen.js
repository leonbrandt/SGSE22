// Arrow Function
// const greet1 = function (name) {
//     return "Hallo, ich bin " + name;
// }
// console.log( greet1('Frederic') );

// const greet2 = (name) => {
//     return "Hallo, ich bin " + name;
// }
// console.log( greet2('Frederic') );

// const greet3 = name => {
//     return "Hallo, ich bin " + name;
// }
// console.log( greet3('Frederic') );

// const greet4 = name => "Hallo, ich bin " + name;
// console.log( greet4('Frederic') );

// Pure Functions
// not pure
const username = "Frederic"
const greet1 = function() {
    return "Hallo, ich bin " + username;
}

// pure
const greet2 = function(username) {
    return "Hallo, ich bin " + username;
}

console.log( greet1() );
console.log( greet2('Frederic') );

