class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }

    this.body = Bodies.circle(x, y, 20, options);
    this.r = 20;
    
    World.add(world, this.body);
  };

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();

    translate(pos.x, pos.y);

    rotate(angle);
    
    ellipseMode(CENTER);
    ellipse(0, 0, this.r, this.r);

    pop();
  };
};
