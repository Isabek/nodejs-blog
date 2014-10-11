var when = require("when");
var _ = require("underscore");

var EntityRepository = function () {

};

EntityRepository.prototype.setAdapter = function (adapter) {
    this._adapter = adapter;
};

EntityRepository.prototype.setFactory = function (factory) {
    this._factory = factory;
};

EntityRepository.prototype.find = function (query) {

    return this._adapter.find(query).then(function (documents) {
        var entities = [];

        _.each(documents, function (document) {
            entities.push(this._factory.createFromInput(document));
        }.bind(this));

        return entities;
    });
};

EntityRepository.prototype.findOne = function (query) {
    return this._adapter.findOne(query).then(function (document) {
        return this._factory.createFromInput(document);
    }.bind(this));
};

EntityRepository.prototype.add = function (document) {
    return this._adapter.add(document)
};

EntityRepository.prototype.update = function (query, document, options) {
    return this._adapter.update(query, document, options);
};

EntityRepository.prototype.remove = function (query) {
    return this._adapter.remove(query);
};

EntityRepository.prototype.findAndModify = function (query, sort, update, options) {
    return this._adapter.findAndModify(query, sort, update, options);
};

EntityRepository.prototype.findOneById = function (id) {
    return this.findOne({_id: +id});
};

EntityRepository.prototype.count = function (criteria) {
    return this._adapter.count(criteria);
};

module.exports = EntityRepository;