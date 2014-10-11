var load = require("env-config-loader").load;

module.exports = {
    // Application
    'swig-bridge': {
        create: {
            module: require('./lib/swig-bridge'),
            args: [
                { cache: false }
            ]
        },
        init: {
            setSwigFunctions: [
                { $ref: "swig-functions" }
            ]
        }
    },
    'swig-functions': {
        wire: require('./lib/swig/swig-functions.js')
    },

    'app': {
        create: {
            module: require('./lib/express-bridge'),
            args: [
                {
                    renderer: { $ref: "swig-bridge" },
                    viewsDir: global.ROOT_DIR + 'views',
                    staticDir: global.ROOT_DIR + 'public'
                }
            ]
        }
    },
    'routes': require('./routes'),
    'router': {
        create: {
            module: require('express-router')
        },
        ready: {
            setRoutes: [
                { $ref: 'routes' }
            ],
            setApp: [
                { $ref: 'app' }
            ],
            setLogger: [ console ]
        }
    },


    // Database stuff
    'mongo-config': require('./config/db-config.json'),
    'mongo-client-bridge': {
        create: {
            module: require('./lib/mongo-client-bridge'),
            args: [
                { $ref: 'mongo-config' }
            ]
        }
    },

    //Project Configs
    'config': load("./config/config.json"),

    // CONTROLLERS
    "post-controller": {
        create: {
            module: require('./controllers/post')
        },
        init: {
            setPlaceActions: [
                { $ref: 'post-actions' }
            ]
        }
    },

    "post-actions": {
        create: {
            module: require("./app/actions/posts")
        },
        init: {
            setFactory: [
                { $ref: 'post-factory' }
            ],
            setRepository: [
                { $ref: 'post-repository' }
            ]
        }
    },

    "post-factory": {
        create: {
            module: require("./app/ports/factory/post")
        }
    },

    "post-repository": {
        create: {
            module: require("./app/ports/repository/post")
        },
        init: {
            setAdapter: [
                { $ref: 'post-mongo-adapter' }
            ],
            setFactory: [
                { $ref: 'post-factory' }
            ]
        }
    },

    "post-mongo-adapter": {
        create: {
            module: require("./adapters/mongo-adapter"),
            args: [
                { $ref: 'post-collection-options' },
                { $ref: 'mongo-client-bridge' }
            ]
        }
    },

    "post-collection-options": require("./config/db-post-collection-config.json")
};