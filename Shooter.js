class Shooter {
    constructor(x,y) {
        var options = {
            restitution:0.8,
            density:0.4
        }

        this.shooter1 = Bodies.rectangle(x,y,70,10,options);
        this.w = 70;
        this.h = 10;

        World.add(world, this.shooter1)
    }

    display() {
        var pos = this.shooter1.position;
        var angle = this.shooter1.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate (angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h)
        pop();
    }
}