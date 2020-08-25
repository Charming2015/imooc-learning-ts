// 访问器的装饰器

// 普通方法target对应的是类的prototype
// 静态方法target对应的是类的构造函数

// descriptor控制函数的desc的
// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(target)
//   // descriptor.writable = false // 把方法改为不可改写

//   // 对原来的方法做变更
//   // descriptor.value = () => {
//   //   return 'edit origin func'
//   // }
// }

// class Test {
//   name: string;
//   constructor (name: string) {
//     this.name = name
//   }
//   @getNameDecorator
//   getName() {
//     return this.name
//   }
// }

// const test = new Test('charming')
// // test.getName = () => {
// //   return '123'
// // }
// console.log(test.getName());


