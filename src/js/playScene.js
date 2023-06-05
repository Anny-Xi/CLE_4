import '../css/style.css'
import { Background } from './background'
import { Player } from './player'
import { Actor, Engine, Physics, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

//Size images
// player ( 85, 100)
// background -> sky 550, ground 150

export class PlayScene extends Scene {

    player

    constructor() {
        super()
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0,900)
    }

    onInitialize(engine){
        this.player = new Player()
        this.add(this.player)
    }

    onActivate(engine){
        this.player.vel = new Vector(0,0)
    }
}

new Game()
