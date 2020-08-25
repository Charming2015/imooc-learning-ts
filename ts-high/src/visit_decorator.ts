// 方法装饰器

// 普通方法target对应的是类的prototype
// 静态方法target对应的是类的构造函数

// descriptor控制函数的desc的
// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(target)
// }

// class Test {
//   private _name: string;
//   constructor (name: string) {
//     this._name = name
//   }
//   // 这种就是访问器
//   get name() {
//     return this._name
//   }
//   @visitDecorator
//   set name (name: string) {
//     this._name = name
//   }
// }

// const test = new Test('charming')
// test.name = '12313123'
// console.log(test.name);


