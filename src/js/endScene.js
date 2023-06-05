import '../css/style.css'
import { Background } from './background'
import { Player } from './player'
import { Blocks } from './blocks'
import { Floor} from './ground'
import { Actor, Engine, Physics, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

//Size images
// player ( 85, 100)
// background -> sky 550, ground 150

export class endScenes extends Engine {

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

    }
}

new Game()
