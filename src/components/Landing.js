var React = require('react');
var Navbar = require('./Navbar');


var Landing = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <h3> Landing Page </h3>
      </div>
    )
  }
});

module.exports = Landing;