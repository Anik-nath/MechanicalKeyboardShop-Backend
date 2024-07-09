import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

//parser
app.use(express.json());
app.use(cors());

// test route
const test = (req: Request, res: Response) => {
  res.send('Mechanical Keyboard Shop Server Running...!');
};
app.get('/', test);

export default app;


