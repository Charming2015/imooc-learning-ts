// 提取公共特征
interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus():void;
}
interface BatteryWithRadio extends Radio {
  checkBatteryStatus():void;
}

class Car implements Radio {
  switchRadio() {}
}

class Cellphone implements BatteryWithRadio {
  switchRadio() {}
  checkBatteryStatus() {}
}