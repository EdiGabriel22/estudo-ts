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

function updateTodo(updatedTodo: Omit<Todo, "priority" | "description">) {
    return { ...todo, ...updatedTodo }
}

const updatedTodo = {
    done: true
}