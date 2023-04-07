// commonJS, every file is module (by default)
// Modules -> encapsulated code (only share minimum)
const {bibek, ghimire} = require('./4-firstmodules.js')
const sayHi = require('./5-secondModule.js')

require('./7-mind-grenade.js')  // mind grenade


// sayHi(bibek);
// sayHi(ghimire);
// or const names = require ('./4-firstmodules.js)
// sayHi(names.bibek);
// sayHi(names.ghimire);