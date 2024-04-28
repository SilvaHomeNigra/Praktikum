

let produktinfo= [
    { name: "Salat", Menge: 2, Kommentar: "nur Frisch"},
    { name: "Nudeln",Menge: 1, Kommentar: "fürs Abendessen"},
    { name: "Küchenrolle", Menge: 2, Kommentar:"" }
]

let list= <HTMLElement> document.querySelector ("#product-list")


for (let entri of produktinfo){

    console.log (entri.name) 

    let newElement=document.createElement ("div")
    newElement.innerHTML=entri.name
    list.appendChild(newElement)

    let chackbox=document.createElement("input")
  chackbox.type="checkbox" 

}


