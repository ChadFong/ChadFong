var React = require('react');

// module.exports = [];
module.exports = [ 
  {
    topic: "Git",
    posts: [
      {
        name: "Merge vs. Rebase",
        HTML: {__html: require('../blogPosts/MergeRebase')},

      },
      {
        name: "Rebase in depth",
        HTML: {__html: require('../blogPosts/Rebase')}
      }
    ]
  },
];


