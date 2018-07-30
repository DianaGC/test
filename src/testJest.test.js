import Number from './Numbers'
describe('sum suite', function() {
    test('Should add 2 positive numbers together and return the result', function() {
        var numbers = new Number();
        expect(numbers.isNumber(10)).toBe(true)
    });
});