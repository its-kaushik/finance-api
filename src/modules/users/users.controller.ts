import { NextFunction, Response } from 'express';
import { SerializerRequest } from '../../common/common.interfaces';
import UsersProcessor from './users.processor';
import { SuccessResponse } from '../../utils';
import { StatusCodes } from 'http-status-codes';

export default class UsersController {
  private processor = new UsersProcessor();

  constructor() {
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req: SerializerRequest, res: Response, next: NextFunction) {
    const { body: payload } = req;
    try {
      const record = await this.processor.create(payload);

      SuccessResponse(res, record, StatusCodes.CREATED);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: SerializerRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await this.processor.delete({
        id,
      });

      SuccessResponse(res, undefined, StatusCodes.NO_CONTENT);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
