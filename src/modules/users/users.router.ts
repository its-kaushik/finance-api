import { Router } from 'express';
import UsersController from './users.controller';

const UsersRouter = Router();
const Controller: UsersController = new UsersController();

UsersRouter.post('/', Controller.create);

export default UsersRouter;
