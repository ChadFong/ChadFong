var React = require('react');

var Landing = React.createClass({
  render: function(){
    return (
      <div className="Landing">
        <div className="Prof">
          <img src="./Assets/Photos/HeadCir.png" />
        </div>
        <div className="Landing-text">
          <h1>I am Chad Fong:</h1>
          <ul>
            <li>Developer</li>
            <li>Adventurer</li>
            <li>Boardgamer</li>
            <li>Swing Dancer</li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Landing;