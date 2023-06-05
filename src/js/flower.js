import { Actor, Vector, SpriteSheet, Animation, range, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from "./player.js";

export class Flower extends Actor {

    nummer

    constructor() {

        
        super({ width: 70, height: 70 })

        const idleSheet = SpriteSheet.fromImageSource({
            image: Resources.Flower,
            grid: { rows: 1, columns: 5, spriteWidth: 85, spriteHeight: 100 },
        })

        // test of alle sprites er zijn
        console.log(idleSheet.sprites);

        const idle = Animation.fromSpriteSheet(idleSheet, range(1, 5), 120) //idle animatie

        this.graphics.add("idle", idle);
        this.graphics.use(idle);

    }

    onInitialize(engine) {

        this.nummer = 0

        // this.anchor = new Vector(0, 0)
        this.pos = new Vector(1000, 550)
        this.vel = new Vector(-200, 0)

        this.on('collisionstart', (event) => this.hitSomething(event))

    }

    onPostUpdate(engine) {
        this.graphics.use("idle")

        if (this.pos.x < 0) {
            this.pos = new Vector(1000, 550)
        }
    }

    hitSomething(event){

        if(event.other instanceof Player){
            this.nummer ++
            console.log(`You touch a stone voor ${this.nummer} times`)
        }
        if(this.nummer >= 5){
            console.log(`You are dead`)
        }
    }



}