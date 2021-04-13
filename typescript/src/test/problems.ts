import 'jasmine';

import { problems } from '../problems';

describe('problems', () => {
    it('0001', () => {
        expect(problems['p0001']()).toEqual(234168);
    });

    it('0002', () => {
        expect(problems['p0002']()).toEqual(4613732);
    });

    it('0003', () => {
        expect(problems['p0003']()).toEqual(6857);
    });

    it('0004', () => {
        expect(problems['p0004']()).toEqual(906609);
    });

    it('0005', () => {
        expect(problems['p0005']()).toEqual(232792560);
    });

    it('0006', () => {
        expect(problems['p0006']()).toEqual(25164150);
    });
});