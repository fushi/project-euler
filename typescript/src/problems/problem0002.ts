import { fibonacci } from '../lib/math';

export default function () {
    return fibonacci([1, 2], 4000000)
        .filter(number => !(number % 2))
        .reduce( (acc, num) => acc + num);
}