import Joi from 'joi';

export const stringRequired = Joi.string().required();

export const createValidation = (schema: any) => Joi.object(schema);
