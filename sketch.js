
drops = []
function preload() {
    manimg = loadAnimation("images/walking1.png", "images/walking2.png", "images/walking3.png", "images/walking4.png", "images/walking5.png", "images/walking6.png", "images/walking7.png", "images/walking8.png")
    thunder1 = loadImage("images/thunder1.png")
    thunder2 = loadImage("images/thunder2.png")
    thunder3 = loadImage("images/thunder3.png")
    thunder4 = loadImage("images/thunder4.png")
}


function setup() {
    createCanvas(600, 700)

    engine = Matter.Engine.create();
    world = engine.world;

    man = createSprite(200, 500)
    man.addAnimation("walking", manimg)
    man.scale = 0.4
    thunder = createSprite(200, 30)
    thunder.scale = 0.6
    ran = Math.round(random(1, 4))

    um1 = new UMBRELLA()

    Matter.Engine.run(engine);
}

function draw() {
    background(0)

    if (frameCount % 5 == 0) {
        for (var i = 0; i <= 3; i++)
            drops.push(new DROP())
    }

    for (var i = 0; i < drops.length; i++)
        drops[i].display();

        switch (ran) {
            case 1:
                thunder.addImage(thunder1)
                if (frameCount % 20 == 0)
                ran = Math.round(random(1, 4))
                break;
            case 2:
                thunder.addImage(thunder2)
                if (frameCount % 20 == 0)
                ran = Math.round(random(1, 4))
                break;
            case 3:
                thunder.addImage(thunder3)
                if (frameCount % 20 == 0)
                ran = Math.round(random(1, 4))
                break;
            default:
                thunder.addImage(thunder4)
                if (frameCount % 20 == 0)
                ran = Math.round(random(1, 4))
                break;
        }

    drawSprites()
}

