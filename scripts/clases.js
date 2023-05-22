export class Object {
    constructor(x, y, wide, high, color){
        this.x = x;
        this.y = y;
        this.wide = wide;
        this.high = high;
        this.color = color;
        this.dx = 1;
        this.dy = 1;
    }

    update = function(){

    }

    draw = function(context2D, x, y){
        context2D.beginPath();
        context2D.fillStyle = this.color;
        context2D.fillRect(x, y, this.wide, this.high);
        context2D.closePath();
    }

    move = function(wide, high){
        // if(this.x > wide || this.x < 0){
        //     this.dx = - this.dx;
        // }

        // if(this.y > high || this.y < 0){
        //     this.dy = - this.dy;
        // }

        // this.x += this.dx;
        // this.y += this.dy;
    }


}

export class Weapond {
    constructor(x, y, live){
        this.x = x;
        this.y = y;
        this.life = 0
    }
}

