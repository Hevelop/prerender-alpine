const prerender = require('prerender');
const server = prerender();

server.use(require('prerender-aws-s3-cache'))

server.start();
