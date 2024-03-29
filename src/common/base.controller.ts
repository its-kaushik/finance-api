import { Request, Response } from 'express';

export default abstract class BaseController {
  private processor: any;

  protected abstract getProcessor(): any;

  constructor() {
    this.processor = this.getProcessor();
  }

  create = async (req: Request, res: Response) => {
    const { body: payload } = req;
    try {
      const record = await this.processor.create(payload);
      res.json(record);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  };
}
