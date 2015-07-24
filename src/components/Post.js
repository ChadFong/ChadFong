var React = require('react');

var blogPosts = require('../blogPosts/postReferences');

var Post = React.createClass({
  render: function () {
    var topic = this.props.params.topic;
    var name = this.props.params.name;

    return (
        <div dangerouslySetInnerHTML={{__html: blogPosts[topic][name]}} />
      )
  }
});

module.exports = Post;
