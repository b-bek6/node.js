const { log } = require('console');
const path = require('path'); // build in path module 

console.log(path.sep);
// this is how we get the path of a file
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath)
// get file inside the path
const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);