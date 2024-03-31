import { validate } from 'class-validator';
import { BAD_REQUEST } from '../constants/error';
import { customError } from './error.utils';

export class ProcessorUtils {
  static async validateAndSave(repo: any, record: any): Promise<void> {
    const validationErrors = await validate(record);
    if (validationErrors.length > 0) {
      const errorMessages = validationErrors
        .map(
          (error, index) =>
            `${index + 1}) ${Object.values(error.constraints || {})}. `
        )
        .join(' ');

      BAD_REQUEST.message = errorMessages;
      throw customError(BAD_REQUEST);
    } else {
      await repo.save(record);
    }
  }
}
