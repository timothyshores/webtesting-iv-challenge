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
        });

        it('should insert a two users with unique ids and names', async () => {
            let users = await Users.insert({ name: 'User 1' });
            expect(users).toEqual({ id: 1, name: 'User 1' });

            users = await Users.insert({ name: 'User 2' });
            expect(users).toEqual({ id: 2, name: 'User 2' });
        });
    });

    describe('remove()', () => {
        it('should remove a single user', async () => {
            let user = await Users.insert({ name: 'User 1' });
            user.remove(1);
            expect(user).toBeFalsy();
            expect(user).toBeNull();
            expect(user).not.toEqual({ id: 1, name: 'User 1' });
        });
    });
});
