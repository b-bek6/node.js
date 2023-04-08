// npmjs.com (bootstraps)
/* pre wrtten codes and modules freely available
-> packages dependencies and module are same 
-> 
*/

//npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
 
// less needed
//global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// node install huda npm ni sangai install hunxa

//package.json - manifest file (stores inportant ingo about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// nodemon is a global dependency and can be use in any projects

//npx -> package runner

// create react app (instead of installing globally)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);