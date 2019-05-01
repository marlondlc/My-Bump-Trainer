const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:3001/api/' }));
  app.use(proxy('/user_token', { target: 'http://localhost:3001/user_token' }));

};

