const hbs = require('hbs');

//helpres
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})