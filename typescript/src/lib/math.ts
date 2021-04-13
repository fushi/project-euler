export {
    factorsOf,
    fibonacci,
    isPrime
}

let factorsOf = (input: number) => {
    let output: number[] = [];

    for (let i: number = 1; i <=  Math.floor(Math.sqrt(input)); i++) {
        if( !(input % i) ) {
            output.push(i);
            output.push(input/i);
        }
    }

    return output.sort((a, b) => a-b);
};

let fibonacci = (list: number[], end: number) => {
    if (list.length !== 2) {
        new Error('Cannot start a fibonacci sequence without exactly 2 numbers');
    }

    let next: number = list.slice(-2).reduce((acc, num) => acc + num );

    if (next < end) {
        list.push(next);
        list = fibonacci(list, end);
    }

    return list;
};

let isPrime = (input: number) => {
    if (input < 1) {
        new Error(`Primeness of ${input} cannot be determined`)
    }

    let output: boolean = true;

    for (let i: number = 2; i <=  Math.floor(Math.sqrt(input)); i++) {
        if( !(input % i) ) {
            output = false;
            break;
        }
    }

    return output;
};