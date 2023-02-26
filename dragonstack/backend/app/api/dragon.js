const {Router} = require('express');
const DragonTable = require('../dragon/table');
const {authenticatedAccount} = require("./helper");
const accountDragonTable = require("../accountDragon/table");
const accountTable = require('../account/table');
const Breeder = require('../dragon/breeder');
const {getPublicDragons, getDragonWithTraits } = require('../dragon/helper');


const router = new Router();

router.get('/new', (req, res, next) => {
    let accountId, dragon;
    authenticatedAccount({sessionString: req.cookies.sessionString})
        .then(({account})=> {
            accountId = account.id;

           dragon = req.app.locals.engine.generation.newDragon();

          return DragonTable.storeDragon(dragon);
        })
        .then(({dragonId})=>{
            dragon.dragonId = dragonId;

            return accountDragonTable.storeAccountDragon({accountId, dragonId});
        })
        .then(()=>res.json({dragon}))
        .catch(error=> next(error));
});

module.exports = router;
