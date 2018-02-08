import IntegerParser from './IntegerParser'

export default class StringCalculator {
  static add(input) {
      var args = Array.prototype.slice.call(arguments);
      const addAll = (sum, element) =>
      {
          const num = IntegerParser.parse(element);
          return sum + (isNaN(num) ? 0 : num);
      };
      return args.reduce(addAll, 0);
  }
}
