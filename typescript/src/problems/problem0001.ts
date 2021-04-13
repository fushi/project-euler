import { range } from '../lib/utilities';

export default function () {
    return range(1,1001)
        .filter(number => !(number % 3) || !(number % 5))
        .reduce((a, b) => a + b, 0);
}