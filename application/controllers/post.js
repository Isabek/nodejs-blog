var util = require("util");

var BaseController = require("./base");

var PostController = function () {

};

util.inherits(PostController, BaseController);

PostController.prototype.setPlaceActions = function (postActions) {
    this._postActions = postActions;
};

PostController.prototype.index = function (request, response, next) {
    response.render("post/index.html", {

    });
};

PostController.prototype.add = function (request, response, next) {
    if (request.method === "POST") {
        this._postActions.addPost(request.body).then(function (post) {
        });
    }

    response.render("post/add.html", {
    });
};

PostController.prototype.show = function (request, response, next) {
};

module.exports = PostController;