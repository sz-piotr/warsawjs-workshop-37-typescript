let myArray = ['string1', 'stringtwo', 'andonemorestring'];

let myArrayLength = myArray.map((arg) => arg.length)

function myMap <T, U> (array: T[], func: (el: T) => U): U[] {
  return array.map(func);
}

let myArrayLength2 = myMap<string, number>(myArray, (arg) => arg.length)

console.log(myArrayLength2);

function checkAge <T extends {age: number}> (person: T): T {
  if (person.age >= 18) {
    return person
  } else {
    throw new Error('Hello, police!')
  }
}

let person = {
  age: 14,
  name: 'Kiddo'
}

const adult = checkAge(person)

declare let x: { a: 1 } | { b: 2 }

function checkIfA (arg: unknown): arg is { a: 1 } {
  if (typeof arg === 'object' && arg !== null) {
    return (arg as any).a === 1
  }
  return false
}

if (checkIfA(x)) {
  x.a
}

let randomArray = [undefined, 'test'];

let onlyStrings = randomArray.filter(isNotUndefined);

function isUndefined (arg: unknown): arg is undefined {
  return arg === undefined;
}

function isNotUndefined <T> (arg: T): arg is Exclude<T, undefined> {
  return arg !== undefined;
}

function mergeObjects <T, U> (arg1: T, arg2: U): T & U {
  return {...arg1, ...arg2}
}

function zip <T, U> (arr1: T[], arr2: U[]): [T,U][] {
  let arrHandler: [T, U][] = [];
  for(let i = 0; i< Math.min(arr1.length, arr2.length); i++)
    arrHandler.push([arr1[i], arr2[i]]);
  return arrHandler;
}

let res = zip([1,2], [2,3]);
let result = mergeObjects({arg1: 1, arg2: 4}, {arg3: 'rower'})

function howManyStrings(...args:string[]) {
  return args.length
}

function getLastArg<T>(...args: T[]) {
  return args[args.length-1]
}

let lastArg = getLastArg<string|number>()

function havingFun(value: string): number
function havingFun(value: number): boolean
function havingFun(value: string | number): number | boolean {
  if(typeof value === 'string')
    return value.length
  else
    return value>3
}

const xxx = havingFun(2)

class Wrapped <T> {
  constructor (private value: T) {}

  get () {
    return this.value
  }

  map <U> (fun: (val: T) => U) {
    return new Wrapped(fun(this.value))
  }
}

const wrapped = new Wrapped('burrito')
const xxxx = wrapped.map((x)=> x.length)
