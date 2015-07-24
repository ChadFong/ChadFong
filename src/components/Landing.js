var React = require('react');

var Landing = React.createClass({
  render: function(){
    return (
      <div className="Landing flex-container">
        <img src="../src/Assets/HeadCir.png" />
        <h1>Welcome!</h1>
        <h2>My name is Chad, and I am a software developer</h2>
        <h3>Feel free to explore my site to learn more about me</h3>
      </div>
    )
  }
});

module.exports = Landing;