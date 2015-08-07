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
        <div className="About">
            <h1>I am Chad Fong, and I am a Software Developer</h1>
            <img className="firstImg" src="./Assets/Photos/Headphones.jpg" />
            <p>
              I love working with computer logic, and as such enjoy working with client-side frameworks such as Backbone, Angular and (especially) React.  I have built out several servers in Node.js and Express and also enjoy wiring the client and server together.  I have also worked with Unity3D in C# to build out a local multiplayer computer game with some friends.  I completed Hack Reactor in 2015 and was selected to be a Hacker in Residence. I also graduated from UC Berkeley in 2013 with a B.S. in Environmental Sciences.
            </p>
            <p>
              I enjoy boardgames, swing dancing, and I'm a sucker for a good story, be it a book, movie, or TV show (I'm a Clancy fan, and just started the Song of Ice and Fire series).  I've worked in the sewers, a refrigerator, and the snow and believe that everything in life is an opportunity for adventure.
            </p>
            <p>
              I also have a penchant for adventure sports such as the Goruck Challenge and Tough Mudder.  While a lot of people would consider throwing 6 bricks in a backpack and getting run around SF for 13 hours in the dead of night insane, I thought it sounded like a grand time (and have done 2).  I love a good challenge and will tackle anything that is thrown my way.
            </p>
        </div>
      </div>
    )
  }
});

module.exports = About;
