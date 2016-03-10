var os = require('os'),
    ifaces = os.networkInterfaces();

if (!process.env.LOCALADDRESS) {
    for (var dev in ifaces) {

        // ... and find the one that matches the criteria
        var iface = ifaces[dev].filter(function(details) {
            return details.family === 'IPv4' && details.internal === false;
        });
    
        if(iface.length > 0) {
            process.env.LOCALADDRESS = iface[0].address;
            break;
        }
    }
}

module.exports.IPv4 = process.env.LOCALADDRESS;
