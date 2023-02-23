const pool = require('../../databasePool');

class userAccountTable{
    static storeUserAccount({usernameHash, passwordHash}){
        return new Promise((resolve, reject)=>{
            pool.query(
                'INSERT INTO userAccount("usernameHash", "passwordHash") VALUES ($1, $2)',
                [usernameHash, passwordHash],
                (error, response)=>{
                    if (error) return reject(error);
                    resolve();
                }
            );
        });
    }
    static getUserAccount({usernameHash}){
        return new Promise((resolve, reject)=>{
            pool.query(
                `SELECT id, "passwordHash" FROM useraccount 
                          WHERE "usernameHash" = $1`,
                [usernameHash],
                (error, response)=>{
                    if (error) return reject(error);
                    resolve({userAccount: response.rows[0]});
                }

            )
        });
    }
}
module.exports = userAccountTable;
