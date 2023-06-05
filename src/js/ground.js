import { Actor, Vector, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Floor extends Actor {


    constructor() {

        super({ 
            width: Resources.Floor.width, 
            height: Resources.Floor.height,
            collisionType: CollisionType.Fixed
        })

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Floor.toSprite())
        // this.anchor = new Vector(0,0)
        this.pos = new Vector(Resources.Floor.width/2, 650)
        this.vel = new Vector(0, 0)
    }


}