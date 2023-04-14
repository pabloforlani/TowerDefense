import * as secondaryFunctions from "./secondaryFunctions.js";
import * as clases from "./clases.js";

var cvs, ctx, model;

export function start(){
    model = new clases.Object(20,20,30,30,"red");
    cvs = document.getElementById("cvs");
    ctx = cvs.getContext("2d");
}

export function principal(){
    update();
    draw();
    clean();

    requestAnimationFrame(principal);
}

function update(){
    model.move(100,50);
}

function draw(){
    model.draw(ctx);
}

function clean(){
    ctx.cleanRect
}