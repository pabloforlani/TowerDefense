import * as secondaryFunctions from "./secondaryFunctions.js";
import * as clases from "./clases.js";

var cvs, ctx, model, cvsDiv, btn1, btn2, btn3, btn4, btn5;
var wide, high;
var background = new Image(wide,high);
background.src = "./assets/background.jpg";
background.crossOrigin = "*";

export function start(){
    btn1 = document.getElementById("btn1")
    btn2 = document.getElementById("btn2")
    btn3 = document.getElementById("btn3")
    btn4 = document.getElementById("btn4")
    btn5 = document.getElementById("btn5")
    cvsDiv = document.getElementById("divCanvas");

    cvs = document.getElementById("cvs");
    ctx = cvs.getContext("2d");

    canvasDimension();
    
    model = new clases.Object(wide/2 - 10,high/2 - 10,20,20,"red");
}

function canvasDimension(){
    cvs.width = cvsDiv.clientWidth;
    cvs.height = cvsDiv.clientHeight;
    
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
    window.addEventListener("resize",canvasDimension);
    if(wide < 600 || high < 600){
        btn1.innerHTML = "1";
        btn2.innerHTML = "2";
        btn3.innerHTML = "3";
        btn4.innerHTML = "4";
        btn5.innerHTML = "5";
    }else{
        btn1.innerHTML = "Weapond 1";
        btn2.innerHTML = "Weapond 2";
        btn3.innerHTML = "Weapond 3";
        btn4.innerHTML = "Weapond 4";
        btn5.innerHTML = "Weapond 5";
    } 
    model.move(wide - model.wide, high - model.high);
}

function draw(){
    ctx.drawImage(background,0,0, wide, high);
    model.draw(ctx, wide/2 - 10, high/2 - 10);
}

function clean(){
    ctx.clearRect(0,0,wide, high);
}