import {Demo} from '../src';
import chai from 'chai';

let expect = chai.expect;
chai.should();

describe('Demo', () => {
  it('constructor()', () => {
    let d = new Demo();
    expect(d.title).to.be.a('undefined');

    let d2 = new Demo('hello');
    d2.title.should.to.equal('hello');
  });
});
