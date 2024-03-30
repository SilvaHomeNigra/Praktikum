"use strict";
let subjekt = ["Maria", "Thomas", "Laura", "Niklas", "Lotta", "Sarah"];
let predicate = ["läuft", "spielt", "kocht", "liest", "schläft", "tanzt"];
let object = ["Spaghetti", "ein Buch", "Zumba", "ganz schnell", "ein Spiel", "tief und fest"];
console.log("Subjekte:", subjekt);
console.log("Prädikate:", predicate);
console.log("Objekte:", object);
// For-Schleife
for (let i = subjekt.length; i >= 1; i--) {
    console.log(i);
    let verse = getVerse(subjekt, predicate, object);
    console.log(verse);
}
function getVerse(subjekt, predicate, object) {
    let vers = "";
    return "HalliHallo";
}
// Aufruf der Funktion
//const generatedVerse = getVerse(subjekt, predicate, object);
//console.log("Generierter Vers:", generatedVerse);
//# sourceMappingURL=typeScript.js.map