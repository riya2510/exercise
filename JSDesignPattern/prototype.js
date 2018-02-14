//prototype pattern
let vehiclePrototype = {
  init : function(modelName) {
    this.modelName = modelName;
  },
  displayModel : function() {
    console.log("The model of vehicle is "+this.modelName);
  }
};
function vehicle(model) {
  function funcProto() {};

  funcProto.prototype = vehiclePrototype;
  
  let funcProtoObj = new funcProto();
  
  funcProtoObj.init(model);
  return funcProtoObj;
}
let car = vehicle('Honda City');
car.displayModel();