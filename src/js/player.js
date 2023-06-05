import { Actor, Vector, SpriteSheet, Animation, range, Input, Collider, CollisionType,collision } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    onGround = true;
    jumped = false;


    // class Game object extends Actor


    //colider? 
    //collision start
        // collide uithallen -> contact -> local point


    // collisionType 
        // active -> involved
        // fixed -> vast
        // passive -> no effect but does trigger

    //useGrafity -> false 
        // will be involved

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

        // this.anchor = new Vector(0, 0)
        this.pos = new Vector(100, 200)
        this.vel = new Vector(0, 0)

        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.body.friction = .99

    }

    onPostUpdate(engine) {
        this.graphics.use("idle")
    }

    onPreUpdate(engine) {

        this.vel.x = 0;

        if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
            this.vel.y = -400;
        }
    }

    //No dobbule jump
    collisionCheck(collisionEvent, collisionString){
        console.log(collisionEvent)
    }
    

    //reset posistion

}