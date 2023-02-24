const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const GenerationEngine = require('./generation/generationEngine');
const app = express();
const engine = new GenerationEngine();
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const userAccountRouter = require('./api/userAccount');

app.locals.engine = engine;

app.use(cors({origin: 'http://localhost:1234', credentials: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/userAccount', userAccountRouter);
app.use('/dragon', dragonRouter);
app.use('/generation',generationRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
    type: 'error', message: err.message
    })
});


engine.start();


module.exports = app;

// setTimeout(()=>{
//     engine.stop();
// }, 20000);
// app.get('/dragon/new',(req, res) =>{
//     res.json({dragon: engine.generation.newDragon()});
// });
// const Dragon = require('./dragon');
//
// const fooey = new Dragon({
//     birthdate: new Date(),
//     nickname: 'fooey'
// });
// const baloo = new Dragon({
//     birthdate: new Date(),
//     nickname: 'baloo'
// });
//
// const yomomma = new Dragon();
//
// setTimeout(() => {
//     const gotcha = new Dragon();
//     console.log('gotcha',gotcha);
// }, 3000);
//
//
// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('yomomma', yomomma);
//
// const Generation = require('./generation');
// const generation = new Generation ();
// console.log('generation', generation);
// const gooby = generation.newDragon();
// console.log('gooby', gooby);
//
// setTimeout(() => {
//     const mimar = generation.newDragon();
//     console.log('mimar', mimar);
// }, 15000);
