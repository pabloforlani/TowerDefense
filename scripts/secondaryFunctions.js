export function randomNumber(max){
    return Math.random() * max;
}

export function changeColor(color){
    let background = document.getElementsByTagName("body");
    
}

export function distance(x1, y1, x2, y2){
    let distX = Math.abs(x1 - x2);
    let distY = Math.abs(y1 - y2);
    let dist = Math.sqrt(distX ** 2 + distY ** 2)

    return {
        distX, distY, dist
    }
}