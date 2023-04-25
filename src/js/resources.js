import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import catImage from "../images/cat.png"
import cowImage from "../images/cow.png"
import backgroundImage from "../images/background.png"

const Resources = {
    Fish: new ImageSource(fishImage),
    Cat: new ImageSource(catImage),
    Cow: new ImageSource(cowImage),
    Background: new ImageSource(backgroundImage)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Cat, Resources.Cow, Resources.Background])

export { Resources, ResourceLoader }