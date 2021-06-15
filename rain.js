class DROP {

    constructor() {
        this.body = Matter.Bodies.circle(random(20,400), 0, 5)
        Matter.World.add(world,this.body)
    }

    display() {
        fill("lightblue")
        ellipse(this.body.position.x, this.body.position.y, 10)
    }

}