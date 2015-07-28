var React = require('react');

var Navbar = require('./components/Navbar');
var Landing = require('./components/Landing');
var About = require('./components/About');
var Blog = require('./components/Blog');
var Post = require('./components/Post');
var Projects = require('./components/Projects');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

var App = React.createClass({
  render: function(){
    return (
      <div id="app">
        <Navbar />
        <div className="body">
          <RouteHandler/>
        </div>
      </div>
    )
  }
});

var routes = (
  <Route handler={App}>
    <Route handler={Landing}/>
    <Route name="about" handler={About}/>
    <Route name="blog" handler={Blog}>
      <Route name="post" path=":topic/:name" handler={Post}/>
    </Route>
    <Route name="projects" handler={Projects}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root/>, document.body);
});

