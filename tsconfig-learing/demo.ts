// my name is charming
// const myName: string = 'charming'

interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {}
}

function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing()
  } else {
    (animal as Dog).bark()
  }
}
// 类型断言
// in 语法来做类型保护
// instance 语法来做类型保护
