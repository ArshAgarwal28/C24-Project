class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.w = width;
     this.h = height;

     this.image = loadImage("assets/Tank.png");
     //this.image.resize(10,10);
     World.add(world, this.body);

    // console.log(this.body)
  };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
  };
}
