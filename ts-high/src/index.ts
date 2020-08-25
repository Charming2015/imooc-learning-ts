// 装饰器-实际使用
const userInfo: any = undefined;
function catchError(msg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = function() {
      try {
        fn()
      } catch (e) {
        console.log(msg);
      }
    }
  }
}
class Test {
  @catchError('name 不存在')
  getName() {
    return userInfo.name
  }
  @catchError('age 不存在')
  getAge() {
    return userInfo.age
  }
}

const test = new Test()
test.getName()
test.getAge()
