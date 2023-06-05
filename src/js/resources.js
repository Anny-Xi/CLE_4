import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from "../images/player.png"
import backgroundImage from "../images/background.jpg"
import floor from "../images/floor.png"
import flower from "../images/flower.png"

//update 

const Resources = {
    Player: new ImageSource(player),
    Flower: new ImageSource(flower),
    Background: new ImageSource(backgroundImage),
    Floor: new ImageSource(floor)

}

const ResourceLoader = new Loader([
    Resources.Player, 
    Resources.Flower,
    Resources.Background, 
    Resources.Floor
])

export { Resources, ResourceLoader }