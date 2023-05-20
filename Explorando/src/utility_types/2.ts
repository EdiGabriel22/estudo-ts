interface Book {
    title: string
    author: string
    price: number
}

let book: Book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 39.99
}

function updateBook( update: Pick<Book, "price">) {
    // book = { ...book, ...update }
    return Object.assign(book, update)
}

const updateProperties = {
    price: 49.99
}

updateBook(updateProperties)

console.log(book)