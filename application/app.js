var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

process.on('uncaughtException', function (err) {
    console.log(err, 'isabek');
});


function main(context) {

    if (module === require.main) {
        var app = context.app;
        var router = context.router;

        router.setContext(context);
        router.attachRoutes();

        app.listen(port, host, function () {
            console.log('Server listening on %s:%d', host, port);
        });
    }
}

require('./bootstrap').then(main, console.error);