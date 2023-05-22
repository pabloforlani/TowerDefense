import * as principalFunctions from "./principalFunctions.js";

window.onload = function(){
    principalFunctions.start();
    principalFunctions.principal();


}

function primaryButton(){
    console.log("primaryButton")
}

var primary = document.getElementById("primary");

primary.addEventListener("onclick", () => console.log("prueba"));