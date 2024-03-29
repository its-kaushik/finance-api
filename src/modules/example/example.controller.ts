import BaseController from '../../common/base.controller';
import ExampleProcessor from './example.processor';

export default class ExampleController extends BaseController {
  protected getProcessor() {
    return new ExampleProcessor();
  }
}
