class Attach {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness:0.5
        }

        this.attach1 = Constraint.create(options);
        World.add(world, this.attach1);
    }
}