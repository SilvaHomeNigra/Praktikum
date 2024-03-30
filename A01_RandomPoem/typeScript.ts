let subjekt:string[]= ["Maria","Thomas","Laura","Niklas","Lotta","Sarah"]
let predicate:string[]= ["läuft","spielt","kocht","liest","schläft","tanzt"]
let object:string[]= ["Spaghetti","ein Buch","Zumba","ganz schnell","ein Spiel","tief und fest"]

console.log("Subjekte:", subjekt);
console.log("Prädikate:", predicate);
console.log("Objekte:", object);

// For-Schleife, um eine Laufvariable rückwärts zu zählen
for (let i = subjekt.length; i >= 1; i--) {
    console.log(i); // Überprüfung der Ausgabe in der Konsole
}

function getVerse(subjekt:string[], predicate:string[], object:string[]): string {
    return "HalliHallo"; // Beispielhafter Rückgabewert
}

// Aufruf der Funktion
const generatedVerse = getVerse(subjekt, predicate, object);
console.log("Generierter Vers:", generatedVerse);
 