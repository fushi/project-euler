import 'jasmine';

import { factorsOf, fibonacci, isPrime } from '../lib/math';

describe('lib/math', () => {
    it('factorsOf', () => {
        expect(factorsOf(10)).toEqual([1, 2, 5, 10]);

        expect(factorsOf(19)).toEqual([1, 19]);

        expect(factorsOf(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
    });

    it('fibonnaci', () => {
        expect(fibonacci([1,1], 30)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });

    describe('isPrime', () => {
        it('Primes', () => {
            expect(isPrime(2)).toBeTruthy();
            expect(isPrime(3)).toBeTruthy();
            expect(isPrime(5)).toBeTruthy();
            expect(isPrime(7)).toBeTruthy();
            expect(isPrime(11)).toBeTruthy();
            expect(isPrime(13)).toBeTruthy();
            expect(isPrime(17)).toBeTruthy();
            expect(isPrime(19)).toBeTruthy();
        });

        it('Non-primes', () => {
            expect(isPrime(4)).toBeFalsy();
            expect(isPrime(6)).toBeFalsy();
            expect(isPrime(8)).toBeFalsy();
            expect(isPrime(9)).toBeFalsy();
            expect(isPrime(10)).toBeFalsy();
            expect(isPrime(12)).toBeFalsy();
            expect(isPrime(14)).toBeFalsy();
            expect(isPrime(15)).toBeFalsy();
            expect(isPrime(16)).toBeFalsy();
            expect(isPrime(18)).toBeFalsy();
        });
    });
});