const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');

describe('users-model', () => {
    afterEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', () => {
        it('should insert a single user', async () => {
            let user = await Users.insert({ name: 'User 1' });
            expect(user).toEqual({ id: 1, name: 'User 1' });
            expect(users).toHaveLength(1);
        });
    });
});
