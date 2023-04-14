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

    draw = function(context2D){
        context2D.save();
        context2D.fillStyle = this.color;
        context2D.fillRect(this.x, this.y, this.wide, this.high);
        context2D.restore();
    }

    move = function(ancho, alto){
        if(this.x > ancho || this.x < 0){
            this.dx = - this.dx;
        }
    }


}

