var debug;
for (let i = 0; i < 5; i++) {
    debug = require('debug')('debug:'+i);
    if(!debug.enabled) {
        debug.enabled = true;
    }
    debug(i)
}
