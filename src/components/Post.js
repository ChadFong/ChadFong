var React = require('react');
var posts = require('./posts');


var HTMLPages = {
  Git: {
    "Merge vs. Rebase": require('../blogPosts/MergeRebase'),
    "Rebase in depth": require('../blogPosts/Rebase')
  }
};

var Post = React.createClass({

  render: function () {
    var topic = this.props.params.topic;
    var name = this.props.params.name;

    return (
        <div dangerouslySetInnerHTML={{__html: HTMLPages[topic][name]}} />
      )
  }
});

module.exports = Post;
