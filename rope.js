class rope{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 200
            
        }
       
        this.bodyA = bodyA;
        this.pointB = pointB;

        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display() {

    var pos = this.rope.bodyA.position
    var posB = this.pointB;

    push();
    strokeWeight(2);
    line(pos.x, pos.y, posB.x, posB.y)

    pop();

        }

}