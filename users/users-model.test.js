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
            let removedUser = await Users.remove(1);
            expect(removedUser).toEqual(1);
        });

        it('should remove a two users', async () => {
            await Users.insert({ name: 'User 1' });
            await Users.insert({ name: 'User 2' });
            let removedUser2 = await Users.remove(1);
            expect(removedUser2).toEqual(1);
            let removedUser1 = await Users.remove(0);
            expect(removedUser1).toEqual(0);
        });
    });
});
