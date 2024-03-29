import appDataSource from '../database/dataSource';

export default abstract class BaseProcessor {
  repo: any;

  constructor() {
    this.repo = appDataSource.getRepository(this.getEntity());
  }

  protected abstract getEntity(): any;

  async create(payload: any) {
    const record = this.repo.create(payload);
    await this.repo.save(record);
    return record;
  }
}
