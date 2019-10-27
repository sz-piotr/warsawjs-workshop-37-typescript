export function sayHi (name: string) {
  console.log('Hi ' + name.toUpperCase())
}

function useAnyValue (value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
  }
}

function callLater (callback: () => void) {
  callback();
}

let myName: any = 'Paulina'

sayHi(myName)
let anyValue = useAnyValue(myName)
callLater(() => console.log("called"))
callLater(() => undefined)

function exception (): never {
  throw new Error('Error')
}

function doStuff (): number {
  if (Math.random() < 0.5) {
    return exception()
  } else {
    return 5
  }
}
