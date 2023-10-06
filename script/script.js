import Ball from "./Ball.js"


let ball =new Ball(document.querySelector("#ball"));

let lastTime;

function update(time){

    if(lastTime!=null){
        const delta=time-lastTime;
      //  console.log("Delta:", delta); 
       ball.update(delta);
     //  console.log("updateDelta"); 
       
    }
    lastTime=time;
  // console.log("Delta:", lastTime); 
    window.requestAnimationFrame(update);
}
//console.log("dsds")
window.requestAnimationFrame(update);