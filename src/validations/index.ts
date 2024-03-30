import Joi from 'joi';

export const createValidation = (schema: any) => Joi.object(schema);

export const stringRequired = Joi.string().required();

export const emailRequired = Joi.string().email().required();

export function enumValidationRequired(enumValidation: string[] | number[]) {
  return Joi.string()
    .valid(...enumValidation)
    .required();
}
