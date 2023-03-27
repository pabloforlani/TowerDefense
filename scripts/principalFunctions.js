import * as fs from "./secondaryFunctions.js";

export function start(){
    console.log(fs.randomNumber(100));
}

export function principal(){
    update();
    draw();
    clean();

    requestAnimationFrame(principal);
}

function update(){

}

function draw(){

}

function clean(){

}