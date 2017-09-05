const assert = require('../../../util/chaiWrapper.js').assert;
const Trip = require('../../../../api/lib/model/trip.js');

describe('trip #unit', () => {

    it('should create a user with a name', () => {
        let trip = new Trip('San Diego');
        assert.equal(trip.destination, 'San Diego');
    });

});
