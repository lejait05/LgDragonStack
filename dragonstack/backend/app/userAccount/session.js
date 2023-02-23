const uuid = require('uuid/v4');
const {hash} = require('./helper');

class Session {
    constructor({username}){
        this.username = username;
        this.id = uuid();
    }

  static  userAccountData({username, id}){
        return `${username}|${id}`;
    }
    toString(){
        const{username, id} = this;
        return Session.sessionString({username, id});
    }

    static sessionString({username, id}){
        const userAccountData = Session.userAccountData({username, id});
        return `${userAccountData}|${hash(userAccountData)}`;
    }
}

module.export = Session;
