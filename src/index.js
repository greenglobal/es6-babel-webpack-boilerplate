import {Hello} from './hello';

export class Demo {
  constructor(st) {
    this.title = st;
    this.hello = new Hello();
  }
}
