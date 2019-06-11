var Airport = function() {
  this.capacity = [];
};

Airport.prototype.land = function(plane){
  this.capacity.push(plane);
}

Airport.prototype.takeOff = function(){
  weather = new Weather();
  console.log(weather.check());
  if (weather.check() === 'stormy') {
    console.log('the weather is bad');
  }
    else {
    this.capacity.pop();
    }
    console.log(this.capacity);
}
