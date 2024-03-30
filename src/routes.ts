import { Router, Request, Response } from 'express';
import ExampleRouter from './modules/example/example.router';
import UsersRouter from './modules/users/users.router';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  res.json({ health: 'ok' });
});

router.use('/example', ExampleRouter);
router.use('/user', UsersRouter);

export default router;
