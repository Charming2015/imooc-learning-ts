class Animal {
  name: string;
  constructor (name: string) {
    this.name = name
  }

  run() {
    return `${this.name} is running`;
  }
}

// const snake = new Animal('snake')
// console.log(snake.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}
