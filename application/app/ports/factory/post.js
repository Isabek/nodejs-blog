var Post = require("../../entities/post");

var PostFactory = function () {
};

PostFactory.prototype.createFromInput = function (input) {
    var post = new Post();
    post.title = input.title || null;
    post.content = input.content || null;
    post.tags = input.tags || [];
    post.slug = input.slug || null;
    post.createAt = input.createAt || null;
    post.updateAt = input.updateAt || null;

    return post;
};

module.exports = PostFactory;