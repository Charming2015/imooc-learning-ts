interface Person {
  name: string;
  age: number;
  gender: string;
}

// 有点复杂，可以理解为字符串也可以是类型
class Teacher {
  constructor (private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
}
const teacher = new Teacher({
  name: 'charming',
  age: 22,
  gender: 'male'
})

const test = teacher.getInfo('age')