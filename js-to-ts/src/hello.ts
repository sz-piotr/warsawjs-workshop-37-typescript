interface Person {
  firstName: string,
  lastName?: string,
  age: number,
  male?: boolean
}

function getMe (people: Person[]): Person | undefined {
  for (const person of people) {
    if (person.firstName === 'Kasia') {
      return person
    }
  }
}

function sayHello (person: string) {
  console.log('Hello ' + person)
}

function getFullName (person?: Person): string {
  if(person !== undefined) {
    return person.firstName + ' ' + person.lastName
  } else {
    return ''
  }
}

let me = {
  firstName: 'Piotr',
  lastName: 'Szlachciak',
  age: 23,
  male: true
}

let fullName = getFullName(me)

sayHello(fullName)

let kasia = getMe([
  me,
  {
    firstName: 'Kasia',
    lastName: 'Izak',
    age: 18,
    male: false
  }
])

function getAge (person?: Person): number | undefined {
  if(person)
    return person.age
}

console.log(getFullName(kasia), getAge(kasia))
