import appDataSource from '../../database/dataSource';
import User from './users.entity';
import { ProcessorUtils } from '../../utils/processor.utils';
import { CreateUserDTO } from './users.dto';
import { customError } from '../../utils';
import { NOT_FOUND } from '../../constants/error';

export default class UsersProcessor {
  private repo = appDataSource.getRepository(User);

  constructor() {
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(payload: CreateUserDTO): Promise<User> {
    const record = this.repo.create(payload);

    await ProcessorUtils.validateAndSave(this.repo, record);

    return record;
  }

  async delete(query: any) {
    const record = await this.repo.delete(query);

    if (record?.affected === 0) {
      NOT_FOUND.message = 'User not fount !';
      throw customError(NOT_FOUND);
    }
    return record;
  }
}
