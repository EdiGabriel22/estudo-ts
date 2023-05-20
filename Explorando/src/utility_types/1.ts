interface Todo {
    priorityt: number
    description: string
    done: boolean
}

const todo: Partial<Todo> = {
    // priorityt: 1,
    description: "Todo 1",
    done: false
}

console.log(todo)
