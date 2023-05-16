import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {
    constructor() {

        super({ width: Resources.Player.width, height: Resources.Player.height })

        // this.pos = new Vector(400, 300)
        // the venter of the image position  400 is the half of the window with 

    }

    onInitialize(engine) {

        this.anchor = new Vector(0, 0)
        this.pos = new Vector(100, 500)
        // this.scale = new Vector(3.0, 3.0) //scale of the image, (1.0, 1.0) = 100%
        this.graphics.use(Resources.Player.toSprite())

    }
}