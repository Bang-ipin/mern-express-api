const express       = require('express');
const router        = express.Router();
const userrouter    = express.Router();

const routes        = (app) => {

  /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
  });

  /* GET users listing. */
  userrouter.get('/', function(req, res, next) {
      res.send('respond with a resource');
  });


  // ALIAS ROUTES 
  app.use('/', router);
  app.use('/api/v1/users', userrouter)

}

module.exports = routes;
