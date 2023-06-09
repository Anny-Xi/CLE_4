import '../css/style.css'
import { Background } from './background'
import { Player } from './player'
import { Blocks } from './blocks'
import { Floor} from './ground'
import { Flower } from './flower'
import { Actor, Engine, Physics, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

//Size images
// player ( 85, 100)
// background -> sky 550, ground 150

export class Game extends Engine {

    constructor() {
        super({ width: 1000, 
            height: 700,         
            fixedUpdateFps: 60,
            antialiasing: false 
        }) //background 550 , ground 150

        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0,900)

        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true)


    }

    startGame() {

        console.log("start de game!")

        const background = new Background()
        this.add(background)

        const player = new Player()
        this.add(player)

        const ground = new Floor()
        this.add(ground)

        const blocks = new Blocks()
        this.add(blocks)

        const flower = new Flower()
        this.add(flower)


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
