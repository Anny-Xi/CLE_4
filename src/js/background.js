// const fish = new Actor({
//     width: Resources.Fish.width,
//     height: Resources.Fish.height
//     //this have to be add to be clickable
// })
// fish.graphics.use(Resources.Fish.toSprite())
// fish.pos = new Vector(400, 300)
// fish.vel = new Vector(-10, 0)
// this.add(fish)


import { Actor, Vector, GraphicsGroup } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    position

    constructor() {

        super({ width: Resources.Background.width, height: Resources.Background.height })

        // this.pos = new Vector(400, 300)
        // the venter of the image position  400 is the half of the window with 

    }

    onInitialize(engine) {

        const background = Resources.Background.toSprite()

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: background,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: background,
                    pos: new Vector(background.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group) 

        this.pos = new Vector(0, 0)
        this.vel = new Vector(-90, 0)

    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -1000) {
            this.pos = new Vector(0, 0)
        }
    }
}