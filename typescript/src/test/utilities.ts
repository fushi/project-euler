import 'jasmine';

import { isPalindrome, leftPad, range } from '../lib/utilities';

describe('lib/math', () => {
    it('isPalindrome', () => {
        expect(isPalindrome(10)).toBeFalsy();

        expect(isPalindrome(1234321)).toBeTruthy();

        expect(isPalindrome(12344321)).toBeTruthy();

        expect(isPalindrome(1234564321)).toBeFalsy();
    });

    it('leftPad', () => {
        expect(leftPad('foo', 4, ' ')).toEqual(' foo');
    })

    it('range', () => {
        expect(range(1,11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    })
});