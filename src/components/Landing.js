var React = require('react');

var Landing = React.createClass({
  render: function(){
    return (
      <div className="Landing">
        <div className="Prof">
          <img src="./Assets/Photos/HeadCir.png" />
        </div>
        <div className="Landing-text">
          <h1>Chad Fong</h1>
          <div>
            <span>Developer</span>
            <span>Adventurer</span>
            <span>Boardgamer</span>
            <span>Swing Dancer</span>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Landing;