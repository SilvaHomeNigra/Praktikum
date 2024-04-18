"use strict";
window.addEventListener("load", handleLoad);
function handleLoad() {
    // Greift auf das komplette Dokument zu
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    // auf Body
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    // auf divs
    let div1 = document.querySelector("#div01");
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
    let div2 = document.querySelector("#div02");
    div2.addEventListener("click", logInfo);
    div2.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let span = document.querySelector("#span");
    span.innerHTML = _event.target + " " + _event.pageX + " " + _event.pageY + " ";
    // + 10 damit der Mauszeiger frei ist
    span.style.top = _event.pageY + 10 + "px";
    span.style.left = _event.pageX + 10 + "px";
}
function logInfo(_event) {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}
//# sourceMappingURL=typeScript.js.map