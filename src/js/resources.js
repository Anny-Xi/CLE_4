import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import player from "../images/player.png"
import cowImage from "../images/cow.png"
import backgroundImage from "../images/background.jpg"

//update 

const Resources = {
    Fish: new ImageSource(fishImage),
    Player: new ImageSource(player),
    Cow: new ImageSource(cowImage),
    Background: new ImageSource(backgroundImage)
}
const ResourceLoader = new Loader([
    Resources.Fish, 
    Resources.Player, 
    Resources.Cow, 
    Resources.Background
])

export { Resources, ResourceLoader }