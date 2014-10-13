var PostActions = function () {

};

PostActions.prototype.setFactory = function (factory) {
    this._factory = factory;
};

PostActions.prototype.setRepository = function (repository) {
    this._repository = repository;
};

PostActions.prototype.addPost = function (input) {
    var post = this._factory.createFromInput({
        title: input.title,
        content: input.content,
        slug: this._slug(input.title),
        createAt: Date.now(),
        updateAt: Date.now()
    });

    return this._repository.add(post).then(function () {
        return post;
    });
};

PostActions.prototype._slug = function (text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

module.exports = PostActions;