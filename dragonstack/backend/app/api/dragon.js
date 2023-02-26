const {Router} = require('express');

const DragonTable = require('../dragon/table');
const {authenticatedUserAccount} = require("./helper");
const userAccountDragonTable = require("../accountDragon/table");

const router = new Router();

router.get('/new', (req, res, next) => {
    let userAccountId, dragon;
    authenticatedUserAccount({sessionString: req.cookies.sessionString})
        .then(({userAccount})=> {
            userAccountId = userAccount.id;

           dragon = req.app.locals.engine.generation.newDragon();

          return DragonTable.storeDragon(dragon);
        })
        .then(({dragonId})=>{
            dragon.dragonId = dragonId;

            return userAccountDragonTable.storeUserAccountDragon({userAccountId, dragonId});
        })
        .then(()=>res.json({dragon}))
        .catch(error=> next(error));
});

module.exports = router;
