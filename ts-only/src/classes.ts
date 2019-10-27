export class Animal {
  constructor(
    public name: string,
    protected anyVariable = ""
  ) {
  }
}

class Dog extends Animal {
  constructor(
    name: string,
    private owner: string
  ) {
    super(name, "test")
  }

  hasSameOwner(dog: Dog) {
    return dog.owner === this.owner;
  }

  static speak(dog: Dog) {
    return `${dog.name}, ${dog.owner}'s dog, says hau!`;
  }

  get isHappy() {
    return Math.random() < 0.5
  }

  set isHappy(value: boolean) {
    console.log('pfff')
  }
}

let dog = new Dog('Fluffy', 'Piotr')
console.log(dog.isHappy)
dog.isHappy = true;
console.log(Dog.speak(dog));
console.log(dog instanceof Dog)
console.log(dog instanceof Animal)
console.log(dog instanceof Array)
