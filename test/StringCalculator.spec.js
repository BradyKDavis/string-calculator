import {expect} from 'chai';
import StringCalculator from '../src/StringCalculator';
import Chance from 'chance';


describe('StringCalculator', () => {
  it('should do something...', () => {
    expect('testing driven development').to.include('drive');
  });
});

describe('StringCalculator add', () =>{
    it('should return 0 when given no arguments', () => {
        expect(StringCalculator.add()).to.equal(0);
    });

    it('should return number when string number argument passed in', () => {
        expect(StringCalculator.add('7')).to.equal(7);
    });

    it('should return sum when two string number arguments are passed in', () =>{
        expect(StringCalculator.add('55', '11')).to.equal(66);
    });

    it('should treat null arguments as 0 when null is passed in', () => {
        expect(StringCalculator.add(null, '42')).to.equal(42);
    });

    it('should treat malformed string arguments as 0 when it is passed in', () => {
        expect(StringCalculator.add(Chance.sentence, '42')).to.equal(42);
    });
})
