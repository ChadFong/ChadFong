var React = require('react');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var Blog = React.createClass({
  render: function(){
    return (
      <div>
        <div className="sidebar flex-container">
          <div>Sidebar</div>
          <div>First topic</div>
          <div>
            <Link to="post" params={{name: "git"}}> Click HERE</Link>
          </div>
          <div>
            <Link to="post" params={{name: "javascript"}}> Click HERE</Link>
          </div>

          <div>Next topic</div>
          <div>
            <Link to="post" params={{name: "crawl"}}> Click HERE</Link>
          </div>
          <div>
            <Link to="post" params={{name: "walk"}}> Click HERE</Link>
          </div>
        </div>
        <main>
          <RouteHandler/>
        </main>
      </div>
    )
  }
});

module.exports = Blog
