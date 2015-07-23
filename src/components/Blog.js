var React = require('react');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var Blog = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Blog </h3>
        <div>
          <p>Sidebar</p>
          <Link to="post" params={{name: "git"}}> Click HERE</Link>
        </div>
        <main>
          <RouteHandler/>
        </main>
      </div>
    )
  }
});

module.exports = Blog
