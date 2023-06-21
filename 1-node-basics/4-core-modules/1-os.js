const os = require("os");

const sysInfo = os.cpus();

console.log(sysInfo);

const additionalInfo = {
  type: os.type(),
  uptime: os.uptime(),
  version: os.version(),
};

console.log(additionalInfo);
