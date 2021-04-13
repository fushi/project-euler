import { factorsOf, isPrime } from '../lib/math';

export default function () {
    return Math.max(...factorsOf(600851475143)
        .filter((element: number) => isPrime(element)));
}