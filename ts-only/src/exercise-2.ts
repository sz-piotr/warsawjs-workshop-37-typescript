console.log('2')

let x: 1 | 2 | 3 | null = 1 as any;
if (x != null && x != 2) console.log(x);

export enum AnimalType {
  DOG = 1,
  CAT,
  MOUSE
}

interface Dog {
  type: AnimalType.DOG;
  name: string;
  favouriteBone: string;
}
interface Cat {
  type: AnimalType.CAT;
  name: string;
  favouriteMouse: string;
}
interface Mouse {
  type: AnimalType.MOUSE;
  name: string;
  favouriteHome: string;
}

function saySthNice (animal: Dog | Cat | Mouse) {
  if(animal.type === AnimalType.DOG) {
    console.log(`${animal.name} lubi ${animal.favouriteBone}`)
  }
  console.log('here u go ' + giveFood(animal.type))
}

function giveFood (animalType: AnimalType) {
  switch (animalType){
    case AnimalType.DOG: return 'cats';
    case AnimalType.CAT: return 'mouse';
    case AnimalType.MOUSE: return 'dogs';
  }
}

saySthNice({
  name: 'Reksio',
  favouriteBone: 'bone',
  type: AnimalType.DOG,
})

let foo = {
  name: 'Foo',
  id: 42
}

function bar (baz: { name?: string }) {
  return baz.name
}
function createAnimal (value: {name: string, type: 1 | 2 | 3}): Dog | Cat | Mouse {
  if (value.type === 1) {
    return {
      ...value, favouriteBone: "?"
    }
  } else if (value.type === 2) {
    return {
      ...value, favouriteMouse: "?"
    }
  } else {
    return {
      ...value, favouriteHome: "?"
    }
  }
}
