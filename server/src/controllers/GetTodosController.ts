import { Request, Response } from "express"
import { store } from "../index"
import Todo from "../models/Todo"

export async function GetTodos(req: Request, res: Response) {
    const session = store.openSession()
    const todos = await session.query(Todo).all()
    return res.send(todos)
}