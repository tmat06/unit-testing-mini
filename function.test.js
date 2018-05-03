let fns = require('./function.js');

describe('Math Tests', () => {
    test('2 + 30 should be 32', () => {
        let result = fns.add(2,30);

        expect(result).toBe(32);
    })
    test('2 + "30" should be 32', () => {
        let result = fns.add(2, "30");
        expect(result).toBe(32);
    })
    test('2 * 6 should be 12', () => {
        let result = fns.mult(2, 6);
        expect(result).toBe(12);
    })
})