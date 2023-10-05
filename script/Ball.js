
export default  class Ball{

    constructor(ballELe){
        this.ballEle=ballELe;
    }

    get x(){
        return  parseFloat(getComputedStyle(this.ballEle).getPropertyValue("--x"))

    }
    set x(value){
        this.ballEle.style.setProperty("--x",value)
    }
    update(delta){
        this.x=5;

    }
}