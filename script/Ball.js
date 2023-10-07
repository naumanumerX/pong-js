

const INITIAL_VELOCITY=0.025;
const VELOCITY_INCREASE=0.00001;
export default class Ball {
    constructor(ballEle) {
      this.ballEle = ballEle;
      this.direction = { x: 1, y: 1 };
      this.reset();
    }
  
    get position() {
      return this.ballEle.getBoundingClientRect();
    }
  
    rect() {
      return this.position; // Return the ball's position as its rectangle
    }
  
    reset() {
      this.ballEle.style.left = "50%";
      this.ballEle.style.top = "50%";
    }
  
    update(delta) {
      // Update the ball's position based on delta time
      this.x += this.direction.x * this.velocity * delta;
      this.y += this.direction.y * this.velocity * delta;
      this.velocity += VELOCITY_INCREASE * delta;
      const rect = this.rect();
      if (rect.bottom >= window.innerHeight || rect.top <= 0) {
        this.direction.y *= -1;
      }
      if (paddleRects.some((r) => isCollision(r, rect))) {
        this.direction.x *= -1;
      }
    }
  
    randomNumberBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
  }
  