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
                `SELECT id, "passwordHash" , "sessionId" FROM useraccount 
                          WHERE "usernameHash" = $1`,
                [usernameHash],
                (error, response)=>{
                    if (error) return reject(error);
                    resolve({userAccount: response.rows[0]});
                }

            )
        });
    }
    static updateSessionId({sessionId, usernameHash}){
        return new Promise((resolve, reject)=> {
            pool.query(
                'UPDATE userAccount SET "sessionId" =$1 WHERE "usernameHash" =$2',
                [sessionId, usernameHash],
                (error, response)=> {
                    if (error) return reject(error);
                    resolve();
                }
            )
        })
    }
}
module.exports = userAccountTable;
