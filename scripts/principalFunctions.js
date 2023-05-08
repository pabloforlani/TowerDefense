import * as secondaryFunctions from "./secondaryFunctions.js";
import * as clases from "./clases.js";

var cvs, ctx, model;
var wide, high;

export function start(){
    model = new clases.Object(20,20,30,30,"red");
    cvs = document.getElementById("cvs");
    ctx = cvs.getContext("2d");

    wide = cvs.width;
    high = cvs.height;
}

export function principal(){
    update();
    clean();
    draw();

    requestAnimationFrame(principal);
}

function update(){
    model.move(wide - model.wide, high - model.high);
}

function draw(){
    model.draw(ctx);
}

function clean(){
    ctx.clearRect(0,0,wide, high);
}