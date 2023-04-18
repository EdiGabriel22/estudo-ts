import Entity, * as x from "./Entity"
import { Person } from "./Person"

export class Repository<T extends Entity> {
    list: T[]

    constructor() {
        console.log(x.max)
        console.log(x)
        this.list = []
    }

    add(element: T) {
        if(element instanceof Person) {
            console.log("Entrou uma person")
        }
        this.list.push(element)
    }
}