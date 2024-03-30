import { Router } from 'express';
import UsersController from './users.controller';
import { Validate } from '../../middlewares/validations.middleware';
import { createUserValidation } from './users.validations';

const UsersRouter = Router();
const Controller: UsersController = new UsersController();

UsersRouter.post('/', Validate({ b: createUserValidation }), Controller.create);

export default UsersRouter;
