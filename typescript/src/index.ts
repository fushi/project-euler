import { problems } from './problems';
import { leftPad } from './lib/utilities';

let problemToRun: number = 1;

let problemNumber: string = leftPad(problemToRun, 4, 0);
let timerName: string = `Running problem #${problemNumber}`;

console.time(timerName);
let answer: any = problems[`p${problemNumber}`]();
console.timeEnd(timerName);
console.log(`Answer: ${answer}`);