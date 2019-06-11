describe('Airport', function(){
  var airport;
    describe('can land plans', function(){
      it('increases length by 1', function(){
        airport = new Airport();
        airport.land("plane");
        expect(airport.capacity.length).toBe(1);
      });
    });
});