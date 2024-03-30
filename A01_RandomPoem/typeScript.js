"use strict";
/*
Aufgabe: L01_Zufallsgedicht
Name: Carolin Albus
Datum: 30.04.24
Quellen: Elisabeth Krum
*/
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
    let randomSubjectIndex = Math.floor(Math.random() * subjekt.length);
    // console.log(randomSubjectIndex);
    let randomSubject = subjekt.splice(randomSubjectIndex, 1)[0];
    vers += randomSubject + " ";
    let randomPredicateIndex = Math.floor(Math.random() * predicate.length);
    // console.log(randomPredicateIndex);
    let randomPredicate = predicate.splice(randomPredicateIndex, 1)[0];
    vers += randomPredicate + " ";
    let randomObjectIndex = Math.floor(Math.random() * object.length);
    // console.log(randomObjectIndex);
    let randomObject = object.splice(randomObjectIndex, 1)[0];
    vers += randomObject;
    return vers;
}
//# sourceMappingURL=typeScript.js.map