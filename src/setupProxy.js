const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://wheyshop-env.eba-bcd3g6mx.us-east-1.elasticbeanstalk.com/',
            changeOrigin: true,
        })
    );
};