var util = require("util");

var BaseController = require("./base");

var PostController = function () {

};

util.inherits(PostController, BaseController);

PostController.prototype.setPlaceActions = function (placeActions) {
    this._placeActions = placeActions;
};

PostController.prototype.index = function (request, response, next) {
    response.render("post/index.html", {

    });
};

PostController.prototype.show = function (request, response, next) {
};

PostController.prototype.new = function (request, response, next) {
};

module.exports = PostController;