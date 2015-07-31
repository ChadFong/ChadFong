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
          <li className="Post">
            <Link to="post" params={{topic:topic, name:post}}>{post}</Link>
          </li>
        );
      });
      return (
        <div className="Topic">
          <div className="TopicName">{topic}</div>
          <ul>
          {posts}
          </ul>
        </div>
      );
    });
  },

  render: function(){
    return (
      <div>
        <div className="sidebar flex-container">
          <h3 className="Title">Blog</h3>
          {this.loadPosts()}
        </div>
        <div className="Instructions">
          <h1>Welcome to my technical blog!</h1>
          <p>Choose a post from the sidebar to get started.</p>
        </div>
        <RouteHandler/>
      </div>
    )
  }
});

module.exports = Blog
