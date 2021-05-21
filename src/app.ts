import { NextFunction } from 'connect';
import express from 'express'
import todoRoutes from './routes/todos'
import {json} from 'body-parser'

const app = express();
const PORT = 3000;

app.use(json())
app.use((req, res, next)=>{
    console.log(`Request made: ${req.method} to: ${req.path}, with data:`)
    console.table(req.body)
    next();
})
app.use('/todos', todoRoutes)



app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction)=>{
    res.status(500).json({message: err.message})
})



app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`)
});

