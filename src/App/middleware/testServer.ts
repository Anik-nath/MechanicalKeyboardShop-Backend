import { Request, Response } from 'express';

const testServer = (req: Request, res: Response) => {
  res.send('Mechanical Keyboard Shop Server Running...!');
};
export default testServer;
