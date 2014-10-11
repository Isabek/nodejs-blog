var express = require('express');
var bodyParser = require('body-parser');

var ExpressBridge = function (options) {

    var app = express();

    app.engine('html', options.renderer.getRenderer());
    app.set('view engine', 'html');
    app.set('views', options.viewsDir);
    app.set('view cache', false);

    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

    app.use(express.static(options.staticDir));

    return app;
};

module.exports = ExpressBridge;
