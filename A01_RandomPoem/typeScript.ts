/*
Aufgabe: L01_Zufallsgedicht
Name: Carolin Albus
Datum: 30.04.24
Quellen: Elisabeth Krum
*/


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

    let randomSubjectIndex: number = Math.floor(Math.random() * subjekt.length);
    // console.log(randomSubjectIndex);
    let randomSubject: string = subjekt.splice(randomSubjectIndex, 1)[0];
    vers += randomSubject + " ";
    
    let randomPredicateIndex: number = Math.floor(Math.random() * predicate.length);
    // console.log(randomPredicateIndex);
    let randomPredicate: string = predicate.splice(randomPredicateIndex, 1)[0];
    vers += randomPredicate + " ";
    
    let randomObjectIndex: number = Math.floor(Math.random() * object.length);
    // console.log(randomObjectIndex);
    let randomObject: string = object.splice(randomObjectIndex, 1)[0];
    vers += randomObject;
    
    return vers;
}

 