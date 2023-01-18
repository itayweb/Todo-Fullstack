import Todo from "./Todo"

class User {
    username: string;
    password: string;
    todos: Todo[];

    constructor(user: string, pass: string, todosList: Todo[]) {
        this.username = user
        this.password = pass
        this.todos = todosList
    }
}

export default User