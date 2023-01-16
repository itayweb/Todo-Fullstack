import express, { Request, Response } from "express"
import { DocumentStoreBase } from "ravendb"

const app = express()
const port = 3030

app.get('/', (req: Request, res: Response) => {
    res.send("Hey!")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})