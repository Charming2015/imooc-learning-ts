// // 类的装饰器
// // 装饰器本身是一个函数
// // 装饰器通过 @ 符号来使用

// function testDecorator(flag:boolean) {
//   if (!flag) {
//     return function(constructor: any) {}
//   }
//   return function testDecorator(constructor: any) {
//     constructor.prototype.getName = () => {
//       console.log('charming');
//     }
//   }
// }


// @testDecorator(true)
// class Test {}

// const test = new Test()

