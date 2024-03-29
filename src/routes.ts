import { Router, Request, Response } from 'express';
import ExampleRouter from './modules/example/example.router';
//import appDataSource from './database/dataSource';
//import Example from './modules/example/example.entity';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  res.json({ health: 'ok' });
});

router.use('/example', ExampleRouter);

export default router;
