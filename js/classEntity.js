class myEntities {
  constructor() {
    this.sprite = 'images/';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

}  //End of myEntities

class Player extends myEntities {
  constructor() {
    super();
    this.x = 2;
    this.y = 5;
    this.sprite += 'char-boy.png';
  }

 handleInput(key) {
    //Logic to move character and make sure it stays on screen
    if(key == 'left' && this.x > 0 && this.x <= 4)
      this.x -= 1;
    if(key == 'up' && this.y > 0 && this.y <= 5)
      this.y -= 1;
    if(key == 'right' && this.x < 4)
      this.x += 1;
    if(key == 'down' && this.y < 5)
      this.y += 1;

    this.update();
 }

 update() {

   //If we're outside of our range, reset to the original position
      if((this.x < 0 || this.x > 4) || (this.y < 0 || this.y > 5)) {
        this.x = 2;
        this.y = 5;
      }

  this.render();

}  //End of update


} //End of Player Class

class Enemy extends myEntities {
  constructor(x,y) {
    super();
    this.sprite += 'enemy-bug.png';
  }

}  //End of Enemies
