import { Router } from 'express';
import ExampleController from './example.controller';

const ExampleRouter = Router();
const Controller: ExampleController = new ExampleController();

ExampleRouter.post('/', Controller.create);

export default ExampleRouter;
