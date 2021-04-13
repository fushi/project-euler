export {
    isPalindrome,
    leftPad,
    range
}

let isPalindrome = (input: any) => {
    let stringifiedInput: string = String(input);
    let output: boolean = true;

    for(let i: number = 0; i < stringifiedInput.length/2; i++) {
        if(stringifiedInput[i] !== stringifiedInput[stringifiedInput.length-1-i]){
            output = false;
            break;
        }
    }

    return output;
};

let leftPad = (str: number | string, len: number, ch: number | string) => {
    let cache: string[] = [
        '',
        ' ',
        '  ',
        '   ',
        '    ',
        '     ',
        '      ',
        '       ',
        '        ',
        '         '
    ];
    // convert `str` to `string`
    str = str + '';
    // `len` is the `pad`'s length now
    len = len - str.length;
    // doesn't need to pad
    if (len <= 0) return str;
    // `ch` defaults to `' '`
    if (!ch && ch !== 0) ch = ' ';
    // convert `ch` to `string`
    ch = ch + '';
    // cache common use cases
    if (ch === ' ' && len < 10) return cache[len] + str;
    // `pad` starts with an empty string
    let pad: string = '';
    // loop
    while (true) {
        // add `ch` to `pad` if `len` is odd
        // noinspection JSBitwiseOperatorUsage
        if (len & 1) pad += ch;
        // divide `len` by 2, ditch the remainder
        len >>= 1;
        // "double" the `ch` so this operation count grows logarithmically on `len`
        // each time `ch` is "doubled", the `len` would need to be "doubled" too
        // similar to finding a value in binary search tree, hence O(log(n))
        if (len) ch += ch;
        // `len` is 0, exit the loop
        else break;
    }
    // pad `str`!
    return pad + str;
};

let range = (start: number, stop: number) => {
    let output: number[] = [];

    [...Array(stop - start).keys()].forEach(value => {
        output.push(value + start);
    });

    return output;
};