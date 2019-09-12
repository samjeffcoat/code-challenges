const helper = require('./index.js');

describe("longestString", () => {
    it('longestString function exists', () => {
        expect(typeof helper.longestString).toEqual('function');
    });
    it('returns longest string if array has strings of unequal lengths', () => {
        const expected = "really, really long!";
        const actual = helper.longestString(['arr', 'bark', 'c', 'medium', 'really, really long!']);
        expect(actual).toBe(expected);
    })
    it('returns first longest string if there is a tie in longest length', () => {
        const expected = "house";
        const actual = helper.longestString(['house', 'teach', 'c', 'media', 'learn']);
        expect(actual).toBe(expected);
    })
    it('returns a string', () => {
        const expected = "string"
        const actual = typeof helper.longestString(['house', 'teach', 'c', 'media', 'learn']);
        expect(actual).toBe(expected);
    })
})