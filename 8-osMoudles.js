const os = require('os') // build in module  about the os (os modules)

// info about current user
const user = os.userInfo()
console.log(user);

// method reuturns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)