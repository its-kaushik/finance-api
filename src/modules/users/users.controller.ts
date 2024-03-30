import { NextFunction, Response } from 'express';
import { SerializerRequest } from '../../common/common.interfaces';
import UsersProcessor from './users.processor';
import { SuccessResponse } from '../../utils';

export default class UsersController {
  private processor = new UsersProcessor();

  create = async (
    req: SerializerRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { body: payload } = req;
    try {
      const record = await this.processor.create(payload);

      SuccessResponse(res, record);
    } catch (err) {
      next(err);
    }
  };
}
