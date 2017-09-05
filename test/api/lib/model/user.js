const assert = require('../../../util/chaiWrapper.js').assert;
const User = require('../../../../api/lib/model/user.js');

describe('user #unit', () => {

    it('should create a user with a name', () => {
        let user = new User('steve');
        assert.equal(user.name, 'steve');
    });

});