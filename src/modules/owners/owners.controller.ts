import { NextFunction, Request, Response } from 'express';
import OwnersProcessor from './owners.processor';
import { SuccessResponse } from '../../utils';

export default class OwnersController {
  private processor = new OwnersProcessor();

  constructor() {
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const { body: payload } = req;
    try {
      const record = await this.processor.create(payload);

      SuccessResponse(res, record);
    } catch (err) {
      next(err);
    }
  }
}
