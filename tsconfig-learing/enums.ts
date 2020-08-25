enum Status {
  OFFLINE,
  ONLINE,
  DELETED
}

console.log(Status[0])

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }

function getResult(status: number) {
  if (status ===  Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}

const result = getResult(0)
console.log(result)
interface Item {
  name: string;
}
// class DataManager<T> {
//   constructor (private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index]
//   }
// }
// const data = new DataManager([1])
// data.getItem(0)

// 限定只能是string或者number
// class DataManager2<T extends string | number> {
//   constructor (private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index]
//   }
// }

// 用泛型声明一些类型
// function hello<T>(params: T) {
//   return params
// }
// const func: <T>(param: T) => T = hello

