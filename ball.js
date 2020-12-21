class ball{
    constructor(x,y, width, height, angle) {
        var options = {
            restitution: 1,
            friction: 1,
            density: 1
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.body = Bodies.rectangle(x,y,width,height, options)
        World.add(world, this.body);

    }

    display() {

    var pos = this.body.position
    var angle = this.body.angle 

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    ellipse(0,0, this.width, this.height)
    pop();
        }

}