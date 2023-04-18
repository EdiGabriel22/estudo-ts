import { Person } from "./Person"
import { Repository } from "./Repository"

const persons = new Repository<Person>()
persons.add(new Person("Bob Martin", 60 ))
console.log(persons)