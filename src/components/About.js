var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <div className="websites flex-container">
          <p>{"<"}</p>
          <div>
            <a href="https://www.linkedin.com/in/chadfong">LinkedIn</a>
          </div>
          <div>•</div>
          <div>
            <a href="http://stackoverflow.com/users/4543913/">Stack Overflow</a>
          </div>
          <div>•</div>
          <div>
            <a href="https://github.com/ChadFong">Github</a>
          </div>
          <p>{">"}</p>
        </div>
      </div>
    )
  }
});

module.exports = About;
