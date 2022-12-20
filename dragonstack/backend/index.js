const Dragon = require('./dragon');

const fooey = new Dragon({
    birthdate: new Date(),
    nickname: 'fooey'
});
const baloo = new Dragon({
    birthdate: new Date(),
    nickname: 'baloo'
});

const yomomma = new Dragon();

setTimeout(() => {
    const gotcha = new Dragon();
    console.log('gotcha',gotcha);
}, 3000);


console.log('fooey', fooey);
console.log('baloo', baloo);
console.log('yomomma', yomomma);

