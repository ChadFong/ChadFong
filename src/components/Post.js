var React = require('react');

var blogPosts = require('../blogPosts/postReferences');

var Post = React.createClass({
  render: function () {
    var topic = this.props.params.topic;
    var name = this.props.params.name;

    return (
      <main className="blog markdown-body">
        <h1>{topic}: <br/>{name}</h1>
        <div dangerouslySetInnerHTML={{__html: blogPosts[topic][name]}} />
      </main>
      )
  }
});

module.exports = Post;
