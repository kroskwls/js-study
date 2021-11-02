const outerFunc = (someValue: number) => (multiplier: number) => someValue * multiplier;
console.log(outerFunc);

const innerFunc = outerFunc(10);
console.log(innerFunc);

let result2 = innerFunc(5);
console.log(result2);

type numFunc<T> = (arg: T) => (c: number) => number;
const noArgFunc: numFunc<void> = () => (c: number) => c + 5;
const numArgFunc: numFunc<number> = (someValue: number) => (multiplier: number) => someValue * multiplier;
const stringArgFunc: numFunc<string> = (someText: string) => (padding: number) => someText.length + padding;
const createSumString: numFunc<void> = () => (x: number) =>  x;