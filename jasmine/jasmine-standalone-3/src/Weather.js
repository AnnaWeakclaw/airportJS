function Weather() {
  this.state = "stormy";
};

Weather.prototype.check = function() {
  return this.state;
};

Weather.prototype.set = function(state) {
  return this.state = state;
};