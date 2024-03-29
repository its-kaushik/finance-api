import { NextFunction, Response } from 'express';

export type SerializerType = {
  select?: string[];
  transform?: (payload: any) => any;
  payloadTransform?: (payload: any, tokenPayload: any) => any;
  queryTransform?: (query: any, tokenPayload?: any | null) => any;
};

export const Serialize =
  (serializer: SerializerType) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const { select, transform, payloadTransform, queryTransform } =
        serializer;
      req['select'] = select;
      req['transform'] = transform;
      req['payloadTransform'] = payloadTransform;
      req['queryTransform'] = queryTransform;
      next();
    } catch (err) {
      next(err);
    }
  };
