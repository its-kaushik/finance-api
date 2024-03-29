import { NextFunction, Response } from 'express';
import { SuccessResponse } from '../utils';
import { SerializerRequest } from './common.interfaces';

//TODO: Add CRUD base controller & processor functions with select and populate serializer support
export default abstract class BaseController {
  private processor: any;

  protected abstract getProcessor(): any;

  constructor() {
    this.processor = this.getProcessor();
  }

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
      console.log(err);
      next(err);
    }
  };
}
