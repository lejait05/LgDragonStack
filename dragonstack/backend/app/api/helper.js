const Session = require("../userAccount/session");
const userAccountTable = require('../userAccount/table');
const {hash} = require('../userAccount/helper');


const setSession = ({username, res, sessionId})=> {
    return new Promise((resolve, reject)=> {
        let session, sessionString;
        if (sessionId){
            sessionString = Session.sessionString({username, id: sessionId});

            setSessionCookie({sessionString,res});
            resolve({message: 'session restored'});
        }else {
            session = new Session({username});
            sessionString = session.toString();

            userAccountTable.updateSessionId({
                sessionId: session.id,
                usernameHash: hash(username)
            })
                .then(()=>{
                  setSessionCookie({sessionString, res});
                    resolve({message: 'session created'});
                })
                .catch(error => reject(error));
        }
    });
}
const setSessionCookie = ({sessionString, res})=> {
    res.cookie('sessionString', sessionString, {
        expire: Date.now() + 3600000,
        httpOnly: true
        // secure: true// use with https
    });
}

const authenticatedUserAccount = ({sessionString})=>{
    return new Promise((resolve, reject)=> {
        if (!sessionString || !Session.verify(sessionString)){
            const error = new Error('Invalid session');
            error.statusCode = 400;
            return reject (error);
        }else {
            const {username, id} = Session.parse(sessionString);

            userAccountTable.getUserAccount({usernameHash: hash(username)})
                .then(({userAccount})=> {
                    const authenticated = userAccount.sessionId === id;
                    resolve({userAccount, authenticated});
                })
                .catch(error=> reject(error));
        }
    })
}

module.exports = {setSession, authenticatedUserAccount};
