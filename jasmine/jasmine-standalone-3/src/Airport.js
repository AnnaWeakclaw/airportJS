var Airport = function() {
  this.capacity = [];
};

Airport.prototype.land = function(plane){
  this.capacity.push(plane);
}

Airport.prototype.takeOff = function(){
  this.capacity.pop();
}
