let subjekt:string[]= ["Maria","Thomas","Laura","Niklas","Lotta","Sarah"]
let predicate:string[]= ["läuft","spielt","kocht","liest","schläft","tanzt"]
let object:string[]= ["Spaghetti","ein Buch","Zumba","ganz schnell","ein Spiel","tief und fest"]

console.log("Subjekte:", subjekt);
console.log("Prädikate:", predicate);
console.log("Objekte:", object);

// For-Schleife
for (let i = subjekt.length; i >= 1; i--) {
    console.log(i); 
    let verse: string = getVerse(subjekt, predicate, object);
    console.log(verse); 
}

function getVerse(subjekt:string[], predicate:string[], object:string[]): string {
    let vers: string = "";
    
    
    return "HalliHallo"; 
}

// Aufruf der Funktion
//const generatedVerse = getVerse(subjekt, predicate, object);
//console.log("Generierter Vers:", generatedVerse);
 