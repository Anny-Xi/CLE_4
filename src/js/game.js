import '../css/style.css'
import { Background } from './background'
import { Player } from './player'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

//Size images
// player ( 85, 100)
// background -> sky 550, ground 150

export class Game extends Engine {

    constructor() {
        super({ width: 1000, height: 700 }) //background 550 , ground 150
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        console.log("start de game!")

        const background1 = new Background()
        background1.position = new Vector(-1000,0)
        this.add(background1)

        const player = new Player()
        this.add(player)


        // for (let i = 0; i < 100; i++) {
        //     let cat = new Actor({
        //         width: Resources.Cat.width,
        //         height: Resources.Cat.height
        //     })
        //     cat.graphics.use(Resources.Cat.toSprite())
        //     cat.pos = new Vector(Math.random() * 800, Math.random() * 600)
        //     cat.vel = new Vector(Math.random() * 20 -10, Math.random() * 20 -10)
        //     //direction and speed how it moves
        //     // cat.vel = new Vector(10, 10);
        //     cat.scale = new Vector(3.0, 3.0) //scale of the image, (1.0, 1.0) = 100%
        //     cat.enableCapturePointer = true // subscribe to input

        //     cat.pointer.useGraphicsBounds = true;
        //     cat.enableCapturePointer = true;
            
        //     cat.on("pointerup", (event) => {
        //         cat.kill();
        //     });

        //     this.add(cat)

        // }
    }
}

new Game()
