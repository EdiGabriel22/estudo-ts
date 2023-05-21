import { Headphone } from "./Headphone"
import { translate} from "./Translator"

console.log(translate("Hi"))
// console.log(translate(10))
// console.log(translate(true))

const headphone = new Headphone("Sony", "USB-C", "Black")
console.log(headphone)
