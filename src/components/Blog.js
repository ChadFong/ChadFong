var React = require('react');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var blogPosts = require('../blogPosts/postReferences');

var Blog = React.createClass({

  loadPosts: function() {
    topics = Object.keys(blogPosts);
    return topics.map(function(topic) {
      var posts = Object.keys(blogPosts[topic]);
      posts = posts.map(function(post){
        return (
          <div className="post">
            <Link to="post" params={{topic:topic, name:post}}>{post}</Link>
          </div>
        );
      });
      return (
        <div className="topicBlock">
          <div className="topic">{topic}</div>
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
