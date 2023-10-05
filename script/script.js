import Ball from "./Ball.js"


let ball =new Ball(document.getElementById("ball"));

let lastTime;

function update(time){

    if(lastTime!=null){
        const delta=time-lastTime;
       ball.update(delta);
    }
    lastTime=time;
    window.requestAnimationFrame(update);
}
//console.log("dsds")
window.requestAnimationFrame(update);