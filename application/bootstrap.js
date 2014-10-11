var wire = require('wire');
var _ = require('underscore');
var loader = require('env-config-loader');
var load = loader.load;

var DEFAULT_ENV = "development";

global.ROOT_DIR = __dirname + '/';
global.LIB_DIR = __dirname + '/lib';
global.CONTROLLERS_DIR = __dirname + '/controllers';

loader.setEnvironment(process.env.NODE_ENV || DEFAULT_ENV);

module.exports = (function () {
    return wire(_.extend(
        load('./spec.js')
    ));
})();