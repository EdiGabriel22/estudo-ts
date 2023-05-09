class ORM {
    async save(entity: Entity) {

    }
}

class Entity {

}


class Book {
    title: string
    author: string

    constructor(title: string, author: string) {
        this.title = title,
        this.author = author
    }
}

async function init() {
    const book = new Book("Teste da Silva", "Teste author")
    const orm = new ORM()
    orm.save(book)
}

init()
