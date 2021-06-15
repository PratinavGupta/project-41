class UMBRELLA {

    constructor() {
        this.body = Matter.Bodies.circle(200, 430, 70,{isStatic :true})
        Matter.World.add(world,this.body)
    }

}