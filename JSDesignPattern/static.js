//Static method
class StaticMethodCall {
    constructor() {
      console.log(StaticMethodCall.staticMethod());
      
    }
  
    static staticMethod() {
      return 'static method has been called.';
    }
  }
  
let staticMethodObj =  new StaticMethodCall();