import { Router } from 'express';
import OwnersController from './owners.controller';

const OwnersRouter = Router();
const Controller = new OwnersController();

OwnersRouter.post('/', Controller.create);

export default OwnersRouter;
