describe('Weather', function(){
  var weather;
  describe('it can be stormy', function(){
    it('knows its state', function(){
      weather = new Weather("stormy");
      expect(weather.check()).toBe('stormy');
    });
  });
});