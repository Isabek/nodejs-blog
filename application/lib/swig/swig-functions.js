module.exports = {
    "url": {
        create: {
            module: require('./functions/url.js')
        },
        init: {
            setRouter: [{ $ref: "router" }]
        }
    }
};