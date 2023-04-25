import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        // const fish = new Actor({
        //     width: Resources.Fish.width,
        //     height: Resources.Fish.height
        //     //this have to be add to be clickable
        // })
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(400, 300)
        // fish.vel = new Vector(-10, 0)
        // this.add(fish)

        const background = new Actor({
            z: -1000,
        });
        background.pos = new Vector(400, 300)
        // the venter of the image position  400 is the half of the window with 
        background.graphics.use(Resources.Background.toSprite())
        background.scale = new Vector(1.36, 0.86)
        this.add(background)

        for (let i = 0; i < 100; i++) {
            let cat = new Actor({
                width: Resources.Cat.width,
                height: Resources.Cat.height
            })
            cat.graphics.use(Resources.Cat.toSprite())
            cat.pos = new Vector(Math.random() * 800, Math.random() * 600)
            cat.vel = new Vector(Math.random() * 20 -10, Math.random() * 20 -10)
            //direction and speed how it moves
            // cat.vel = new Vector(10, 10);
            cat.scale = new Vector(3.0, 3.0) //scale of the image, (1.0, 1.0) = 100%
            cat.enableCapturePointer = true // subscribe to input

            cat.pointer.useGraphicsBounds = true;
            cat.enableCapturePointer = true;
            cat.on("pointerup", (event) => {
                cat.kill();
            });

            this.add(cat)

        }
    }
}

new Game()
