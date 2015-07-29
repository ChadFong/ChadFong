var strVar="";
strVar += "<p>This post is powered by <a href=\"http:\/\/pcottle.github.io\/learnGitBranching\/\">Learn Git Branching<\/a>, an awesome tool to visualize how git works.<\/p>";
strVar += "";
strVar += "<p>Throughout this post I will be designating the current branch via a faux bash terminal: <code>(current branch)$<\/code> and creating syntax definitions with <code>[your variable here]<\/code>.<\/p>";
strVar += "";
strVar += "<p>Git rebase is a powerful tool in the git arsenal that changes the history of your commits.  It compares commits between your target and destination branches and moves the the divergent commits from your target branch to the head of your destination branch.<\/p>";
strVar += "";
strVar += "<p>There are two primary reasons to rebase your code:<\/p>";
strVar += "";
strVar += "<ul>";
strVar += "<li>(<a href=\"#local\">Locally<\/a>) before merging a branch<\/li>";
strVar += "<li>(<a href=\"#remote\">Remotely<\/a>) updating your local repository with a remote repositories changes.<\/li>";
strVar += "<\/ul>";
strVar += "";
strVar += "<h3><a name=\"local\"><\/a>Local Rebase:<\/h3>";
strVar += "";
strVar += "<p>The syntax for a local rebase is:";
strVar += "<code>(target branch)$ git rebase [destination branch]<\/code> <br \/>";
strVar += "Which branch are we rebasing?  <strong>The branch you currently have checked-out<\/strong>.  Local rebase determines which branch to rebase <em>implicitly<\/em> based on where you are looking.  Here is an example of a local rebase:<\/p>";
strVar += "";
strVar += "<p>Say we have the following git structure:<\/p>";
strVar += "";
strVar += "<pre><code>Branch: develop  A &lt;-- B &lt;-- C &lt;-- D\n";
strVar += "                        \\ \n";
strVar += "Branch: feature          1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>We want to ensure that our feature branch commits (1 &amp; 2) are functional with the new changes to the master branch (commits C &amp; D).";
strVar += "Our goal:  Move the divergent commits from our target branch (feature) to the head of the master branch (destination).  So we call: <code>(feature)$ git rebase develop<\/code> and we get:<\/p>";
strVar += "";
strVar += "<pre><code>Branch: develop  A &lt;-- B &lt;-- C &lt;-- D\n";
strVar += "                                    \\ \n";
strVar += "Branch: feature                      1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>This can also be visualized inline, it is the same thing.  I will be staggering for clarity henceforth.<\/p>";
strVar += "";
strVar += "<pre><code>Branch: develop  A &lt;-- B &lt;-- C &lt;-- D &lt;-- 1 &lt;-- 2\n";
strVar += "                                        \/ \n";
strVar += "                         Branch: feature";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>This is what we wanted to do.  After resolving any merge conflicts our feature branch will reflect the current master branch with the alterations made by the feature branch.<\/p>";
strVar += "";
strVar += "<p>Now, what do you think would happen if we were to call rebase with our syntax reversed? <code>(develop)$ git rebase feature<\/code> <br \/>";
strVar += "We'd go from here:<\/p>";
strVar += "";
strVar += "<pre><code>Branch: develop  A &lt;-- B &lt;-- C &lt;-- D\n";
strVar += "                        \\ \n";
strVar += "Branch: feature          1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>To here:<\/p>";
strVar += "";
strVar += "<pre><code>Branch: develop  A &lt;-- B\n";
strVar += "                        \\ \n";
strVar += "Branch: feature          1 &lt;-- 2 &lt;-- C &lt;-- D";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>Git took the divergent commits (C &amp; D) from the target branch (develop) and moved them to the destination branch (feature).  This is not what we wanted, and this is the danger of rebase.  So long as you mind your syntax and handle merge conflicts correctly everything should go fine.<\/p>";
strVar += "";
strVar += "<p>In summary, the local rebase works as follows:";
strVar += "<code>(FROM HERE)$ git rebase (TO HERE)<\/code><\/p>";
strVar += "";
strVar += "<table class=\"gif\"><tr><th><p>Correctly:";
strVar += "<code>(feature1)$ git rebase develop<\/code></th>";
strVar += "<th>Incorrectly:";
strVar += "<code>(develop)$ git rebase feature1<\/code></th></tr>";
strVar += "<tr><td><img src=\"./Assets/BlogImgs/RebaseInDepth/git-rebase.gif\" alt=\"\" title=\"\" \/></td>";
strVar += "<td><img src=\"./Assets/BlogImgs/RebaseInDepth/git-rebase_Incorrect.gif\" alt=\"\" title=\"\" \/><\/p></td></tr></table>";
strVar += "";
strVar += "<h3><a name=\"remote\"><\/a> Remote Rebase:<\/h3>";
strVar += "";
strVar += "<p>You can also rebase remotely, by attaching rebase as on option to your pull request.  It takes the following syntax: ";
strVar += "<code>(destination branch)$ git pull --rebase [remote repo's name] [remote repo's branch]<\/code>";
strVar += "e.g., <code>(develop)$ git pull --rebase upstream develop<\/code>";
strVar += "This is a key command when multiple people are working off of the same repo because of the way that it handles the pull.  We will examine this in more detail shortly.<\/p>";
strVar += "";
strVar += "<p>Say you had the following repos:<\/p>";
strVar += "";
strVar += "<pre><code>Upstream:\n";
strVar += "Branch: develop  A &lt;-- B &lt;-- C &lt;-- D\n";
strVar += "\n";
strVar += "Local:\n";
strVar += "Branch: develop  A &lt;-- B &lt;-- 1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>In this case, a conventional <code>(develop)$ git pull upstream develop<\/code> will take the divergent commits from the upstream branch and apply them to the local branch, like so:<\/p>";
strVar += "";
strVar += "<pre><code>Local:\n";
strVar += "Branch: develop A &lt;-- B &lt;-- 1 &lt;-- 2 &lt;-- C &lt;-- D";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>If we were following the git workflow we would push this to our personal repo and made a pull request to the upstream repo.  This pull request would not be automatically mergeable because our repo has a different commit history than that of our upstream repo.<\/p>";
strVar += "";
strVar += "<p>This is where the magic of rebase comes in.  If we were to rebase our personal commits on the commits coming in from the pull request we would share a common history with the upstream repo and our pull request could be merged automatically.  This is what the pull request's --rebase option accomplishes. So we instead command: <code>(develop)$ git pull --rebase upstream develop<\/code> and we get:<\/p>";
strVar += "";
strVar += "<pre><code>Local:\n";
strVar += "Branch: develop A &lt;-- B &lt;-- C &lt;-- D &lt;-- 1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>In summary, this is the difference between pull, and pull --rebase:<\/p>";
strVar += "";
strVar += "<pre><code>Upstream:\n";
strVar += "Branch: develop A &lt;-- B &lt;-- C &lt;-- D\n";
strVar += "\n";
strVar += "Local:\n";
strVar += "Branch: develop A &lt;-- B &lt;-- 1 &lt;-- 2\n";
strVar += "\n";
strVar += "Local: (develop)$ git pull upstream develop\n";
strVar += "Branch: develop A &lt;-- B &lt;-- 1 &lt;-- 2 &lt;-- C &lt;-- D\n";
strVar += "\n";
strVar += "Local: (develop)$ git pull --rebase upstream develop\n";
strVar += "Branch: develop A &lt;-- B &lt;-- C &lt;-- D &lt;-- 1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>As you can see, rebasing makes the local commit history mimic the upstream's commit history by placing all divergent commits from upstream at the point of divergence on local.  All of our local commits are then added afterwards.  This allows our pull requests to be automatically mergeable because we resolve all conflicts locally.<\/p>";
strVar += "";
strVar += "<p>The challenge in this comes when we start to use multiple branches.  Like local rebases, git implicitly sets the destination based on which branch you have currently checked out.  Let us examine the syntax again:";
strVar += "<code>(destination branch)$ git pull --rebase [remote repo's name] [remote repo's branch]<\/code>. The destination for the pull request is implicitly decided by our current branch.  The changes we pull down will be applied to our current branch.  So let's return to our example, and add a branch on local:<\/p>";
strVar += "";
strVar += "<pre><code>Upstream:\n";
strVar += "Branch: develop A &lt;-- B &lt;-- C &lt;-- D\n";
strVar += "\n";
strVar += "Local:\n";
strVar += "Branch: develop A &lt;-- B &lt;-- E &lt;-- F\n";
strVar += "                       \\ \n";
strVar += "Branch: feature         1 &lt;-- 2            \n";
strVar += "\n";
strVar += "Local: (develop)$ git pull --rebase upstream develop\n";
strVar += "Branch: develop A &lt;-- B &lt;-- C &lt;-- D &lt;-- E &lt;-- F\n";
strVar += "                       \\ \n";
strVar += "Branch: feature         1 &lt;-- 2\n";
strVar += "\n";
strVar += "Local: (feature)$ git pull --rebase upstream develop\n";
strVar += "Branch: develop A &lt;-- B &lt;-- E &lt;-- F\n";
strVar += "                       \\ \n";
strVar += "Branch: feature         C &lt;-- D &lt;-- 1 &lt;-- 2";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>As with the local rebase, having the proper branch checked out is imperative, but if you are careful, this is a powerful tool, and a must-have in your git workflow.<\/p>";
strVar += "";
strVar += "<table><tr><th><p>Here's a git pull (technically a fetch, followed by a merge, it applies the pulled commits in after your work, and makes your history differ from the remote's):</th>";
strVar += "<th><p>And here's a git pull --rebase.  You can see how it changes your history, but when you push up to your remote there will be no conflicts:</th></tr>";
strVar += "<tr><td><img src=\"./Assets/BlogImgs/RebaseInDepth/git-pull-no-rebase.gif\" alt=\"\" title=\"\" \/><\/p></td>";
strVar += "";
strVar += "<td><img src=\"./Assets/BlogImgs/RebaseInDepth/git-pull--rebase.gif\" alt=\"\" title=\"\" \/><\/p></td></tr></table>";
strVar += "";

module.exports = strVar;
