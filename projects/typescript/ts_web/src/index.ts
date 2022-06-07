import express, { Express, Request, Response } from 'express';
import Calculator from '@libs/calculator';

const app: Express = express();
const calculator = new Calculator();

app.listen(8080, () => {
  console.log('listening on port 8080');
});

app.get('/', (_req: Request, res: Response) => {
  res.send(`did you know that 1 + 2 = ${calculator.add(1, 2)}`);
});
