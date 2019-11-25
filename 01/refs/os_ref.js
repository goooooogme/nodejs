const os = require('os');

//Платформаа
//инофрмация
//архитектура
//Свободная память
//Сколько всего памяти
//корневая директория
//сколько система работает

console.log(os.platform());
console.log(os.cpus());
console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.uptime());