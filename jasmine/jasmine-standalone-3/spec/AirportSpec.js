describe('Airport', function(){
  var airport;
    describe('can land plans', function(){
      it('increases length by 1', function(){
        airport = new Airport();
        plane = new Plane();
        airport.land(plane);
        expect(airport.capacity.length).toBe(1);
      });
    });
});

describe('Airport', function(){
  var airport;
    describe('can allow planes to take off', function(){
      it('descreases length by 1', function(){
        airport = new Airport();
        plane = new Plane();
        airport.land(plane);
        	
        testWeather = new Weather();
        testWeather.check() = jasmine.createSpy("check() spy").andReturn("Sunny");
        airport.takeOff();
        expect(airport.capacity.length).toBe(0);
      });

      it('doesnt allow planes to take off if the weather is stormy', function(){
        airport = new Airport();
        plane = new Plane();
        airport.land(plane);
        airport.takeOff();
        expect(airport.capacity.length).toBe(1);
      });
    });
});
