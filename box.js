class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        this.image = loadImage("")
        World.add(world, this.body);
      }
  display() {
    if (this.body.speed < 5) {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke(5);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      strokeWeight(4);
      stroke(100, 200, 100);
      rect(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
}