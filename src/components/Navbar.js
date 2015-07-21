var React = require('react');

var Navbar = React.createClass({
  getInitialState: function(){
    return null;
  },
  render: function(){
    return (
      <div>
        <div className="nav"> About </div>
        <div className="nav"> Other </div>
      </div>
    )
  }
});

module.exports = Navbar;