const {Router}= require('express');
const userAccountTable = require('../userAccount/table');
const Session = require('../userAccount/session')
const {hash} = require('../userAccount/helper');

const {setSession}= require('./helper');

const router= new Router();

router.post('/signup', (req, res, next) =>{
    const {username, password} = req.body;
    const usernameHash = hash(username);
    const passwordHash = hash(password);

    userAccountTable.getUserAccount({usernameHash})
        .then(({userAccount})=>{
            if(!userAccount){
               return  userAccountTable.storeUserAccount({usernameHash, passwordHash})

            }else {
                const error = new Error('This username has already been taken');

                error.statusCode = 409;

                throw error;
            }
        })
        .then(() => {
          return setSession({username, res});

        })
        .then(({message})=>{
            res.json({message});
        })
        .catch(error => next(error));
});

router.post('/login', (req, res, next)=>{
    const {username, password} = req.body;

    userAccountTable.getUserAccount({usernameHash: hash(username)})
        .then(({userAccount})=> {
            if (userAccount && userAccount.passwordHash === hash(password)){
                const {sessionId}= userAccount
             return setSession({username, res})
            }else {
                const error = new Error('Incorrect username/password');
                error.statusCode = 409;
                throw error;
            }
        })
        .then(({message})=>res.json({message}))
        .catch(error=> next(error));
});


router.get('/logout',(req, res, next)=> {
    const {username} = Session.parse(req.cookies.sessionString);

    userAccountTable.updateSessionId({
        sessionId: null,
        usernameHash: hash(username)
    }).then(()=>{
        res.clearCookie('sessionString');
        res.json({message: 'Successful logout'});
    }).catch(error=>next(error));
});

module.exports =router;
