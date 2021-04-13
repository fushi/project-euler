import { range } from '../lib/utilities';

export default function () {

    let numsSum: number = range(1,101).reduce((a, b) => a + b, 0);

    let sumSquared: number = numsSum * numsSum;

    let squaresSummed: number = range(1,101).reduce((a, b) => a + (b * b), 0);

    return sumSquared - squaresSummed;
}