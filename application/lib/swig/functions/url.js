var Url = function() {};

Url.prototype.setRouter = function(router) {
    this._router = router;
};

Url.prototype.getFunction = function() {
    return function(name, parameters) {
        return this._router.reverse(name, parameters);
    }.bind(this);
};

module.exports = Url;