var when = require("when");

var MongoAdapter = function (collectionOptions, db) {
    this._collectionName = collectionOptions.name;
    this._collection = db.collection(this._collectionName);

    if (collectionOptions.hasOwnProperty("indexes")) {
        this.ensureIndexes(collectionOptions.indexes);
    }
};

MongoAdapter.prototype.ensureIndexes = function (indexes) {
    var indexData;

    for (var i = 0; i < indexes.length; i++) {
        indexData = indexes[i];

        this._collection.ensureIndex(indexData.index, indexData.options, function (err, indexName) {
            if (err) {
                console.error(err);
                throw(err);
            }
        });
    }
};

MongoAdapter.prototype.find = function (query) {
    var deferred = when.defer();

    this._collection.find(query).toArray(function (error, documents) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(documents);
        }
    });

    return deferred.promise;
};

MongoAdapter.prototype.count = function (query) {
    var deferred = when.defer();

    this._collection.count(query, function (error, result) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(result);
        }
    });

    return deferred.promise;
};

MongoAdapter.prototype.findOne = function (query) {
    var deferred = when.defer();

    this._collection.findOne(query, function (error, document) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(document);
        }
    });

    return deferred.promise;
};

MongoAdapter.prototype.add = function (document) {
    var deferred = when.defer();

    this._collection.insert(document, function (error, documents) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(documents);
        }
    });

    return deferred.promise;
};

MongoAdapter.prototype.update = function (query, update, options) {
    var deferred = when.defer();

    this._collection.update(query, update, options, function (error, result) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(result);
        }
    });

    return deferred.promise;
};

MongoAdapter.prototype.remove = function (query) {
    var deferred = when.defer();

    this._collection.remove(query, function (error, numberOfRemovedDocs) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(numberOfRemovedDocs);
        }
    });

    return deferred.promise;
};

MongoAdapter.prototype.findAndModify = function (query, sort, document, options) {
    var deferred = when.defer();
    this._collection.findAndModify(query, sort, document, options, function (error, data) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(data);
        }
    });

    return deferred.promise;
};


module.exports = MongoAdapter;