const pool = require('../../databasePool');

class userAccountDragonTable {
    static storeUserAccountDragon({userAccountId, dragonId}) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO userAccountDragon("userAccountId", "dragonId") VALUES ($1, $2)',
                [userAccountId, dragonId],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
            )
        });
    }

    static getUserAccountDragons({userAccountId}) {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT "dragonId" FROM useraccountdragon WHERE "userAccountId" =$1',
                [userAccountId],
                (error, response) => {
                    if (error) return reject(error);

                    resolve({userAccountDragons: response.rows});
                }
            )
        })
    }
}

module.exports = userAccountDragonTable;
