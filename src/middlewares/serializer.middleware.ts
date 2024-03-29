import { NextFunction, Response } from 'express';

export type PopulateType = string[] | object | null;

export type SerializerType = {
  populate?: PopulateType;
  select?: string[];
  transform?: (payload: any) => any;
  payloadTransform?: (payload: any, tokenPayload: any) => any;
  queryTransform?: (query: any, tokenPayload?: any | null) => any;
};

export const Serialize =
  (serializer: SerializerType) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const { populate, select, transform, payloadTransform, queryTransform } =
        serializer;
      req['populate'] = populate;
      req['select'] = select;
      req['transform'] = transform;
      req['payloadTransform'] = payloadTransform;
      req['queryTransform'] = queryTransform;
      next();
    } catch (err) {
      next(err);
    }
  };
