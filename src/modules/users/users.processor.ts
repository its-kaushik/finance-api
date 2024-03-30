import BaseProcessor from '../../common/base.processor';
import User from './users.entity';

export default class UsersProcessor extends BaseProcessor {
  protected getEntity() {
    return User;
  }
}
