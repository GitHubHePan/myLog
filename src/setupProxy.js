const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/sell', { target: 'http://localhost:8080',pathRewrite:{
  	'/sell':''
  } }))
}