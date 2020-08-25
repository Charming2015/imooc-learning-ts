// 泛型
// 解决：传入和输出是统一的（定义时不确定类型，使用时才确定）

function echo<T>(arg:T):T {
  return arg
}

const str = echo('123')
const abc = echo(111)

function swap<T,U>(tuple:[T,U]):[U,T] {
  return [tuple[1], tuple[0]]
}

function echoWithArr<T>(arg: T[]):T[] {
  console.log(arg.length)
  return arg
}
const arr1 = echoWithArr([1,2,3])
console.log(arr1)

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T):T {
  console.log(arg.length)
  return arg
}

const str2 = echoWithLength('str')
const obj = echoWithLength({length: 10})
const arr2 = echoWithLength([1,2,3])


class Queue<T> {
  private data = []

  push(item: T) {
    return this.data.push(item)
  }

  pop(): T {
    return this.data.shift()
  }
}


const queue = new Queue<number>()
queue.push(1)
// queue.push('str')

const queue2 = new Queue<string>()
queue2.push('str')

interface keyPair<T,U> {
  key: T;
  value: U;
}

let kp1: keyPair<number, string> = {key: 123, value: 'str'}
let kp2: keyPair<string, number> = {key: '123', value: 123}

let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]


interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a:number, b: number):number {
  return a + b;
}

const aa: IPlus<number> = plus
aa(1,2)

function connect(a: string, b: string):string {
  return a + b
}
const bb:IPlus<string> = connect
bb('a', 'b')