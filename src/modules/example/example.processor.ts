import BaseProcessor from '../../common/base.processor';
import Example from './example.entity';

export default class ExampleProcessor extends BaseProcessor {
  protected getEntity() {
    return Example;
  }
}
