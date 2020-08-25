// 类的装饰器
// 装饰器本身是一个函数
// 装饰器通过 @ 符号来使用

// 泛型变成构造函数:<T extends new (...args: any[]) => {}>

// 返回函数这种方式比较高端
// function testDecorator() {
//   return function<T extends new (...args: any[]) => {}>(constructor: T) {
//     return class extends constructor {
//       name = 'chen'
//       getName () {
//         return this.name
//       }
//     }
//   }
// }


// const Test = testDecorator()(
//   class {
//     name: string;
//     constructor (name: string) {
//       this.name = name
//     }
//   }
// )
// class Test {
//   name: string;
//   constructor (name: string) {
//     this.name = name
//   }
// }

// const test = new Test('charming')
// console.log(test.getName());


