import { isPalindrome } from '../lib/utilities';

export default function () {
    let output: number = 0;

    for(let i: number = 999; i > 99; i--) {
        for(let j: number = 999; j > 99; j--) {
            let product: number = i * j;

            if(product > output && isPalindrome(product)){
                output = product;
            }
        }
    }

    return output;
}