module.exports = {
    'posts': {
        httpMethod: 'all',
        path: '/',
        controller: 'post-controller',
        method: 'index'
    },
    'post_add': {
        httpMethod: 'all',
        path: '/post/add',
        controller: 'post-controller',
        method: 'add'
    }
};