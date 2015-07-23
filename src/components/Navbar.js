var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function(){
    return (
      <div className="navbar flex-container">
        <div>
          <Link to="about">About</Link>
        </div>
        <div>
          <Link to="blog">Blog</Link>
        </div>
        <div>
          <Link to="projects">Projects</Link>
        </div>
      </div>
    )
  }
});

module.exports = Navbar;
