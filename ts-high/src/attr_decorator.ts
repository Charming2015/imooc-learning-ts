// 属性装饰器

// 普通方法target对应的是类的prototype
// 静态方法target对应的是类的构造函数

// descriptor控制函数的desc的
// function nameDecorator(target: any, key: string): any {
//   console.log(target, key)
//   // 这个name改动会在prototype上
//   target[key] = 'chen'

//   // 让name不可修改。会让初始赋值也失败
//   // const descriptor: PropertyDescriptor = {
//   //   writable: false
//   // }
//   // return descriptor
// }

// // name在实例上
// class Test {
//   @nameDecorator
//   name = "charming"
// }

// const test = new Test()
// // test.name = '12313123'
// console.log(test.name);


