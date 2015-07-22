var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function(){
    return (
      <div>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
        <Link to="projects">Projects</Link>
      </div>
    )
  }
});

module.exports = Navbar;
