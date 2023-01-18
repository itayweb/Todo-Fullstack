import { Request, Response } from "express"
import { store } from "../index"
import Todo from "../models/Todo"

export async function CreateTodo(req: Request, res: Response) {
    const todo = new Todo(
        req.body.title,
        req.body.desc
    )
    const session = store.openSession()
    await session.store(todo)
    await session.saveChanges()
    return res.json()
}