import pgp from 'pg-promise'

interface Connection {
    quer(statement: string, params: any): Promise<any>
    close(): Promise<void>
}

class PostgresSQLConnection implements Connection {
    pgp: any

    constructor() {
        this.pgp = pgp()("postgres://postgres:123456789@localhost:5432/postgres")
    }

    quer(statement: string, params: any): Promise<any> {
        return this.pgp.query(statement, params)
    }
    close(): Promise<void> {
        return this.pgp.$pool.end()
    }
}

class ORM {

    constructor(readonly connection: Connection) {

    }

    async save(entity: Entity) {
        const columns = entity.columns.map(column => column.column).join(", ")
        const params = entity.columns.map((column, index) => `$${index + 1}`).join(",")
        const values = entity.columns.map(column => entity[column.property])

        const statement = `insert into ${entity.schema}.${entity.table} values (${columns}) values (${params})`

        this.connection.quer(statement, [...values])
    }

    async list(entity: Function) {
        return await this.connection.quer(`select * from ${entity.prototype.schema}.${entity.prototype.table}`, [])
    }
}

class Entity {
    declare schema: string
    declare table: string
    declare columns: {property:string, column: string}[]
    [key: string]: any
}

function entity(config: { schema: string, table: string }) {
    return (contructor: Function) => {
        contructor.prototype.schema = config.schema
        contructor.prototype.table = config.table
    }
}

function column(config: { name: string}) {
    return (target: Entity, propertyKey: string) => {
        target.columns = target.columns || []
        target.columns.push({property: propertyKey, column: config.name})
    }
}

@entity({ schema: "edi", table: "book" })
class Book extends Entity {
    @column({ name: "title"})
    title: string
    @column({ name: "author"})
    author: string

    constructor(title: string, author: string) {
        super()
        this.title = title,
        this.author = author
    }
}

@entity({ schema: "edi", table: "car" })
class Car extends Entity {
    @column({ name: "br" })
    brand: string
    @column({ name: "md" })
    model: string

    constructor(brand: string, model: string) {
        super()
        this.brand = brand  
        this.model = model
    }
}

async function init() {
    const connection = new PostgresSQLConnection()
    const orm = new ORM(connection)

    const book = new Book("Teste da Silva", "Teste author")
    await orm.save(book)
    const books = await orm.list(Book)
    console.log(books)

    const car = new Car("Fiat", "Uno")
    await orm.save(car)
    const cars = await orm.list(Car)
    console.log(cars)

    await connection.close()
}

init()
