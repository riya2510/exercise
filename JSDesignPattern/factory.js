//Factory pattern
function factory() {
    this.createVehicle =function(vehicleType) {
        let vehicle;
        if(vehicleType == "car") {
            vehicle =  new Car();
        }
        else if(vehicleType == "bike") {
            vehicle = new Bike();
        }
        else if(vehicleType == "truck") {
            vehicle = new Truck();
        }
        vehicle.vehicleType = vehicleType;

        vehicle.print = function() {
            log.add("Vehicle Type : "+this.vehicleType +",  Model : "+ this.model +",  Color : "+ this.color);
        }

        return vehicle;
    }
}
let Car =function() {
    this.model = "Honda City";
    this.color = "White";
};
let Bike =function() {
    this.model = "Royal Enfield";
    this.color = "Black";
};
let Truck = function() {
    this.model = "abc";
    this.color = "Yellow";
};

let log = (function() {
    let log = "";
    return {
        add : function(msg) { log += msg + "\n" },
        show : function() { 
            console.log(log);
            log = "";
        }
    }
})();

let vehicles = [];
let factoryObj = new factory();
vehicles.push(factoryObj.createVehicle("car"));
vehicles.push(factoryObj.createVehicle("bike"));
vehicles.push(factoryObj.createVehicle("truck"));

for(let i = 0; i<vehicles.length; i++) {
    vehicles[i].print();
}
log.show();