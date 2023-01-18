import express from "express"
import { DocumentStore } from "ravendb"
import cors from "cors"
import { CreateTodo } from "./controllers/CreateTodoController"
import { GetTodos } from "./controllers/GetTodosController"

const app = express()
const port = 3030

app.use(cors({
    origin: "*",
}))
app.use(express.json())

export const store = new DocumentStore('http://localhost:8080', 'Todo-Project')
store.conventions.findCollectionNameForObjectLiteral = () => "Todos"
store.initialize();

app.post('/todos/add', CreateTodo);
app.get('/todos/get', GetTodos)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})