import appDataSource from '../../database/dataSource';
import User from './users.entity';

export default class UsersProcessor {
  private repo = appDataSource.getRepository(User);

  async create(payload: User): Promise<User> {
    const record = this.repo.create(payload);
    await this.repo.save(record);

    return record;
  }
}
