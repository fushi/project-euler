export default function () {
    let divisors: number[] = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];

    for(let i: number = 2*3*5*7*11*13*17*19; true; i++) {
        if (divisors.every((divisor: number) => !(i % divisor))) {
            return i;
        }
    }
}