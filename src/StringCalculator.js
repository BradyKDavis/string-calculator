import IntegerParser from './IntegerParser'

export default class StringCalculator {
  static add(args) {
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum += IntegerParser.parse(arguments[i]);
    }
      return sum;
  }
}
