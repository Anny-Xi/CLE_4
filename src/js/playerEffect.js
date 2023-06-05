import { Actor, Vector, SpriteSheet, Animation, range, Input, Collider, PostCollisionEvent, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from "./player.js";

export class Effect extends Player {

    constructor() {

        super({ width: 85, height: 100 })

        const idleSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })

        // test of alle sprites er zijn
        console.log(idleSheet.sprites);

        const idle = Animation.fromSpriteSheet(idleSheet, range(1, 5), 70) //idle animatie

        this.graphics.add("idle", idle);
        this.graphics.use(idle);

    }

    onInitialize(engine) {

    }

    onPostUpdate(engine) {

    }

    onPreUpdate(engine) {

    }


}