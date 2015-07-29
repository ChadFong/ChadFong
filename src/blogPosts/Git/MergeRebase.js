var strVar="";
strVar += "<p>This post is powered by <a href=\"http:\/\/pcottle.github.io\/learnGitBranching\/\">Learn Git Branching<\/a>, an awesome resource to learn and visualize how git works.<\/p>";
strVar += "";
strVar += "<p>Parallel to the many git-workflows, there are several ways to coalesce commits into one branch.  This post will explain them.<\/p>";
strVar += "";
strVar += "<h4>Git Merge<\/h4>";
strVar += "<div>";
strVar += "<p>Git merge combines the commit of two separate branches, and drops their combined outcome at the head of the checked out branch: <code>(destination)$ git merge (target)<\/code>";
strVar += "This merged commit will add all of the changes from the develop branch back into the master branch.</div>";
strVar += "<table><tr><th style=\"font-weight:normal;\">Ideally it will look like this:</th>";
strVar += "<th style=\"font-weight:normal;\">But, if you're working with a remote repo, and a lot of work is commited onto your develop branch, your git history may soon look like this:</th></tr>";
strVar += "<tr><td><img src=\"./Assets/BlogImgs/MergeRebase/Merge.png\" alt=\"\" title=\"\" \/><\/p></td>";
strVar += "";
strVar += "<td><img src=\"./Assets/BlogImgs/MergeRebase/ManyMerge.png\" alt=\"\" title=\"\" \/></td></tr></table>";
strVar += "In the latter case, you can work through where branches were made and how they're connected, but it is certainly not intuitive.  This is where git rebase comes in:<\/p>";
strVar += "</br>";

strVar += "<h4>Git Rebase<\/h4>";
strVar += "<div class=\"flex-container\" style=\"align-items: flex-start;\">";
strVar += "<div style=\"flex: 2 1 auto;\"><p>Git rebase allows us to circumvent this tangled web by changing the base commit of our branches to the head of our target.  See my <a href=\"#/blog/Git/Rebase, an in-depth analysis\">other blog post<\/a> if you're interested in the details of git rebase.<\/p>";
strVar += "";
strVar += "<p>This is what the same commit history looks like using git rebase (and merging the feature into develop after rebasing) instead:<\/p>";
strVar += "<p>While this gives us a clean and linear commit history, it becomes difficult to determine at what point in time features were implemented.  Especially if we clean up after ourselves and delete branches as we go.  This is where merge --no-ff comes in.<\/p>";
strVar += "</div><div style=\"flex: 1 1 auto; width: 100px;\"></div>";
strVar += "<div style=\"flex: 1 1 auto; min-width: 200px;\"><img src=\"./Assets/BlogImgs/MergeRebase/Rebase.png\" alt=\"\" style=\"max-height:100%; max-width:100%\" \/></div>";
strVar += "</div>";
strVar += "</br>";

strVar += "<h4>Git Merge --no-ff<\/h4>";
strVar += "<div class=\"flex-container\" style=\"align-items: flex-start;\">";
strVar += "<div style=\"flex: 2 1 auto;\"><p>(to be used after a rebase): <br \/>";
strVar += "<code>(root branch)$ git merge --no-ff (target branch)<\/code> <br \/>";
strVar += "e.g., <code>(develop)$ git merge --no-ff (feature)<\/code>";
strVar += "--no-ff is a merge option that prevents 'fast-forwarding', or moving a branch pointer down a commit tree to the head.  It instead forces git to create a merge commit which encapsulates all of the work from the branch we're merging in into one commit:<\/p>";
strVar += "<p>This makes a very clean commit history, like a rebasing, but also makes is easy to differentiate between features that have been integrated into develop by encapsulating their commits.<\/p>";
strVar += "</div><div style=\"flex: 1 1 auto; width: 100px;\"></div>";
strVar += "<div style=\"flex: 1 1 auto; min-width: 250px;\"><img src=\"./Assets/BlogImgs/MergeRebase/MergeNoFF.png\" alt=\"\" title=\"\" \/><\/div>";
strVar += "";
strVar += "</div>";

module.exports = strVar;
