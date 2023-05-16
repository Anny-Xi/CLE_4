import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from "../images/player.png"
import backgroundImage from "../images/background.jpg"

//update 

const Resources = {
    Player: new ImageSource(player),
    Background: new ImageSource(backgroundImage)
}

const ResourceLoader = new Loader([
    Resources.Player, 
    Resources.Background
])

export { Resources, ResourceLoader }