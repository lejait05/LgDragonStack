const uuid = require('uuid');
const {hash} = require('./helper');


const SEPARATOR = '|';

class Session {
    constructor({username}){
        this.username = username;
        this.id = uuid;
    }

  static  userAccountData({username, id}){
        return `${username}${SEPARATOR}${id}`;
    }
    static parse(sessionString){
        const sessionData = sessionString.split(SEPARATOR);
        return {
            username: sessionData[0],
            id: sessionData[1],
            sessionHash: sessionData[2]
        };
    }

    static verify(sessionString){
        const {username, id, sessionHash} = Session.parse(sessionString);
        const userAccountData = Session.userAccountData({username, id});
        return hash(userAccountData)=== sessionHash;
    }

    toString(){
        const{username, id} = this;
        return Session.sessionString({username, id});
    }

    static sessionString({username, id}){
        const userAccountData = Session.userAccountData({username, id});
        return `${userAccountData}${SEPARATOR}${hash(userAccountData)}`;
    }
}
module.export = Session;
