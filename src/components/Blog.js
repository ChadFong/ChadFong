var React = require('react');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var Blog = React.createClass({
  render: function(){
    return (
      <div>
        <div className="sidebar flex-container">
          <div className="title">Blog</div>
          <div className="topic">
            <div className="name">First topic</div>
            <div className="post">
              <Link to="post" params={{name: "git"}}> Click HERE</Link>
            </div>
            <div className="post">
              <Link to="post" params={{name: "javascript"}}> Click HERE</Link>
            </div>
          </div>
          <div className="topic">
            <div className="name">Next topic</div>
            <div className="post">
              <Link to="post" params={{name: "crawl"}}> Click HERE</Link>
            </div>
            <div className="post">
              <Link to="post" params={{name: "walk"}}> Click HERE</Link>
            </div>
          </div>
        </div>
        <main className="blog">
          <RouteHandler/>
        </main>
      </div>
    )
  }
});

module.exports = Blog
