var MongoClient = require("mongodb").MongoClient;
var when = require("when");



var MongoClientBridge = function(config) {

    var deferred = when.defer();

    MongoClient.connect(config.uri, config.options, function(err, db) {

        if (err) {
            deferred.reject(err);
            throw err;
        }

        deferred.resolve(db);

    });

    return deferred.promise;

};

module.exports = MongoClientBridge;