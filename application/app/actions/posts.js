var PostActions = function () {

};

PostActions.prototype.setFactory = function (factory) {
    this._factory = factory;
};

PostActions.prototype.setRepository = function (repository) {
    this._repository = repository;
};

module.exports = PostActions;