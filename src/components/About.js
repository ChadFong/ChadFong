var React = require('react');

var aboutContent = require('../about/aboutContent');

var About = React.createClass({
  loadLinks: function() {
    var links = [];
    var spacer;
    aboutContent.websites.forEach(function(website, i, arr){
      links.push ((
        <div>
          <a href={website.href}>{website.name}</a>
        </div>
      ));
      if (i < arr.length - 1) {
        links.push((
          <div>•</div>
        ))
      }
    });
    
    return (
      <div className="websites flex-container">
        <p>{"<"}</p>
        {links}
        <p>{">"}</p>
      </div>
    );
  },
  loadFactoids: function() {
    var list = aboutContent.factoids.map(function(factoid){
      return(
        <li>
          <span className="title">{factoid.title}</span><span>{factoid.details}</span>
        </li>
      )
    });

    return (
      <ul>
        {list}
      </ul>
    )
  },
  render: function(){
    return (
      <div className="About-body">
        {this.loadLinks()}
        <div className="About flex-container">
          <div className="Factoids">
            {this.loadFactoids()}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = About;
