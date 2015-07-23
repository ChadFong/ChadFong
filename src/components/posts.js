var React = require('react');

module.exports = [];
module.exports.push ( 
  {
    topic: "Git",
    posts: [
      {
        name: "Merge vs. Rebase",
        class: React.createClass({
          render: function(){
            return (
              <div>
                <p>This post is powered by <a href="http://pcottle.github.io/learnGitBranching/">Learn Git Branching</a>, an awesome resource to learn and visualize how git works.</p>
                <p>Parallel to the many git-workflows, there are several ways to coalesce commits into one branch.  This post will explain them.</p>
                <h4 id="git-merge">Git Merge</h4>
                <p>Git merge combines the commit of two separate branches, and drops their combined outcome at the head of the checked out branch: <code>(destination)$ git merge (target)</code>
                This merged commit will add all of the changes from the develop branch back into the master branch. Ideally it will look like this:
                <img alt="" src="/content/images/2015/04/Screen-Shot-2015-04-02-at-11-13-09-AM.png" /></p>
                <p>But, if you're working with a remote repo, and a lot of work is commited onto your develop branch, your git history may soon look like this:
                <img alt="" src="/content/images/2015/04/Screen-Shot-2015-04-02-at-11-15-07-AM.png" />
                You can certainly work through where branches were made, and how they're connected, but it is certainly not intuitive.  This is where git rebase comes in:</p>
                <h4 id="git-rebase">Git Rebase</h4>
                <p>Git rebase allows us to circumvent this tangled web by changing the base commit of our branches to the head of our target.  See my <a href="http://www.chadfong.com/git-rebase-an-in-depth-analysis/">other blog post</a> if you're interested in the details of git rebase.</p>
                <p>This is what the same commit history looks like using git rebase (and merging the feature into develop after rebasing) instead:</p>
                <p><img alt="" src="/content/images/2015/04/Screen-Shot-2015-04-02-at-11-25-42-AM.png" /></p>
                <p>While this gives us a clean and linear commit history, it becomes difficult to determine at what point in time features were implemented.  Especially if we clean up after ourselves and delete branches as we go.  This is where merge --no-ff comes in.</p>
                <h4 id="git-merge-no-ff">Git Merge --no-ff</h4>
                <p>(to be used after a rebase): <br />
                <code>(root branch)$ git merge --no-ff (target branch)</code> <br />
                e.g., <code>(develop)$ git merge --no-ff (feature)</code>
                --no-ff is a merge option that prevents 'fast-forwarding', or moving a branch pointer down a commit tree to the head.  It instead forces git to create a merge commit which encapsulates all of the work from the branch we're merging in into one commit:</p>
                <p><img alt="" src="/content/images/2015/04/Screen-Shot-2015-04-02-at-11-32-37-AM.png" /></p>
                <p>This makes a very clean commit history, like a rebasing, but also makes is easy to differentiate between features that have been integrated into develop by encapsulating their commits.</p>
              </div>
            )
          }
        })
      },
    ]
  }
);

