const os = require('os')
// console.log(os);
// console.log(os.totalmem());   // 총 메모리

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`total - ${totalMemory}`);
console.log(`free - ${freeMemory}`);