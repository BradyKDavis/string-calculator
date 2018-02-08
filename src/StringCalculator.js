import IntegerParser from './IntegerParser'

export default class StringCalculator {
  static add(...input) {
      const addAll = (sum, element) =>
      {
          const num = IntegerParser.parse(element);
          return sum + (isNaN(num) ? 0 : num);
      };
      return input.reduce(addAll, 0);
  }
}
