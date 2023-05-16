import { Actor, Vector, SpriteSheet, Animation, range } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {
    constructor() {

        super({ width: Resources.Player.width, height: Resources.Player.height })

        // this.pos = new Vector(400, 300)
        // the venter of the image position  400 is the half of the window with 

        const idleSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })

        // test of alle sprites er zijn
        console.log(idleSheet.sprites);

        const idle = Animation.fromSpriteSheet(idleSheet, range(1, 5), 70) //idle animatie
        // const runLeft = Animation.fromSpriteSheet(runSheet, range(1, 10), 80);
        // const runRight = Animation.fromSpriteSheet(runSheet, range(11, 20), 80);

        this.graphics.add("idle", idle);
        // this.graphics.add("runleft", runLeft);
        // this.graphics.add("runright", runRight);

        this.graphics.use(idle);

    }

    onInitialize(engine) {

        // this.anchor = new Vector(0, 0)
        this.pos = new Vector(100, 500)
        this.vel = new Vector(0, 0)
        // this.scale = new Vector(3.0, 3.0) //scale of the image, (1.0, 1.0) = 100%
        // this.graphics.use(Resources.Player.toSprite())

    }

    onPostUpdate(engine){
        this.graphics.use("idle")
    }
}