import express from 'express';
import { Response, Request } from 'express';

const app = express()
const PORT = 5000;

app.get('/api', (req: Request, res: Response) => {
    res.send({message: 'Hello world.'})
})

app.get('/name', (req: Request, res: Response) => {
    res.send({name: 'Jovica'})
})

app.listen(PORT, ()=>{
    console.log(`...listening port ${PORT}`);
})

export default app;