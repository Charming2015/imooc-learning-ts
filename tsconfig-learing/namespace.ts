namespace Component {
  // 嵌套命名空间
  export namespace SubComponents {
    export class Test{}
  }
  // 可定义接口
  export interface User {
    name: string;
  }
  export class Header {
    constructor() {
      console.log('Header')
    }
  }
  export class Footer {
    constructor() {
      console.log('Footer')
    }
  }
  export class Body {
    constructor() {
      console.log('Body')
    }
  }
  
}