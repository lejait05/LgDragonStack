const {Router}= require('express');
const userAccountTable = require('../userAccount/table');
const {hash} = require('../userAccount/helper');

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
        .then(()=>res.json({message: 'success!'}))
        .catch(error => next(error));
});

module.exports =router;
