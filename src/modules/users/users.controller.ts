import BaseController from '../../common/base.controller';
import UsersProcessor from './users.processor';

export default class UsersController extends BaseController {
  protected getProcessor() {
    return new UsersProcessor();
  }
}
