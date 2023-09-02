// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.



const airplane = {
    name: "",
    isFlying: false,
}  

airplane.initialize = function(name) {
    this.name = name;
    console.log(this.name);
};

airplane.takeOff = function() {
    if (!this.isFlying) {
        this.isFlying = true;    
    }
}

airplane.land = function() {
    if (this.isFlying) {
        this.isFlying = false;
        
    }
}

airplane.initialize("Antonov An-124");
airplane.takeOff();
airplane.land();

