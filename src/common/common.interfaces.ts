export interface SerializerRequest extends Request {
  file?: any;
  select?: string[];
  transform?: any;
  payloadTransform?: any;
  queryTransform?: any;
}
