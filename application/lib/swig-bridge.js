var swig = require("swig");
var _ = require("underscore");

var SwigBridge = function(options) {
    this._options = options;
};

SwigBridge.prototype.setSwigFunctions = function(functions) {
    this._functions = functions;
};

SwigBridge.prototype._getFunctions = function() {
    var functions = {};

    for (var name in this._functions) {
        if (this._functions.hasOwnProperty(name)) {
            functions[name] = this._functions[name].getFunction();
        }
    }

    return functions;
};

SwigBridge.prototype.getRenderer = function() {

    swig.setDefaults(_.extend(this._options, {
        locals: this._getFunctions()
    }));

    return swig.renderFile;
};

module.exports = SwigBridge;