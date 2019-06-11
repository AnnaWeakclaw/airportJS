var Airport = function() {
  this.capacity = [];
};

Airport.prototype.land = function(plane){
  this.capacity.push(plane);
}