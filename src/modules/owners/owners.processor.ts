import appDataSource from '../../database/dataSource';
import { USER_ROLES } from '../users/users.constants';
import UsersProcessor from '../users/users.processor';
import { CreateOwnerDTO } from './owners.dto';
import Owner from './owners.entity';
import { ProcessorUtils } from '../../utils/processor.utils';

export default class OwnersProcessor {
  private repo = appDataSource.getRepository(Owner);
  private usersProcessor = new UsersProcessor();

  constructor() {
    this.create = this.create.bind(this);
  }

  async create(payload: CreateOwnerDTO): Promise<Owner> {
    const { user, ...ownerDetails } = payload;

    const userRecord = await this.usersProcessor.create({
      ...user,
      role: USER_ROLES.OWNER,
    });

    const record: Owner = this.repo.create({
      ...ownerDetails,
      user: userRecord,
    });

    //TODO: Do the rollback using transactions
    try {
      await ProcessorUtils.validateAndSave(this.repo, record);
    } catch (err) {
      await this.usersProcessor.delete({
        id: userRecord.id,
      });
      throw err;
    }
    return record;
  }
}
