var React = require('react');

var Post = React.createClass({
  componentDidMount: function () {
    // from the path `/inbox/messages/:id`
    // var id = this.props.params.id;
    console.log(this.props);
    // fetchMessage(id, function (err, message) {
    //   this.setState({ message: message });
    // })
  },
  render: function () {
    return (
      <div>
        <p>HEY!</p>
      </div>
      )
  }
  // ...
});

module.exports = Post;
