var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var HelloWorld = require('../containers/Main');
var Home = require('../containers/Home');


var hashHistory = ReactRouter.hashHistory;

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HelloWorld}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
