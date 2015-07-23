var React = require('react');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var posts = require('./posts');

var Blog = React.createClass({

  componentDidMount: function() {
    console.log(posts);
  },

  loadPosts: function() {
    return posts.map(function(topic) {
      var posts = topic.posts.map(function(post){
        return (
          <div className="post">
            <Link to="post" params={{name: post.name}}>{post.name}</Link>
          </div>
        );
      });
      return (
        <div className="topicBlock">
          <div className="topic">{topic.topic}</div>
          {posts}
        </div>
      );
    });
  },
  render: function(){
    return (
      <div>
        <div className="sidebar flex-container">
          <div className="title">Blog</div>
          {this.loadPosts()}
        </div>
        <main className="blog">
          <RouteHandler/>
        </main>
      </div>
    )
  }
});

module.exports = Blog
