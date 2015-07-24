var strVar="";
strVar += "<p>Have you been wondering if there is a quick and easy way to pull down remote branches to your local repository?  Because I have, and I found out how.  You can specify a branch to pull down using this syntax: ";
strVar += "<code>(desired base)$ git pull &lt;remote repo&gt; &lt;remote branch&gt;:&lt;local branch&gt;<\/code><\/p>";
strVar += "";
strVar += "<p>For example, say we have this remote:<\/p>";
strVar += "";
strVar += "<pre><code>Upstream:";
strVar += "master: A &lt;-- B &lt;-- C &lt;-- D";
strVar += "               \"";
strVar += "develop:        1 &lt;-- 2 &lt;-- 3 &lt;-- 4";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>If we use <code>git clone<\/code> we are only given the master branch:";
strVar += "<code>Local:  master: A &lt;-- B &lt;-- C &lt;-- D<\/code> <br \/>";
strVar += "But we want the develop branch too!  What do we do?  We tell git to pull the develop branch to our own develop branch.  Git will see our lack, and create the branch for us.  (If you want to avoid merge conflicts, be sure to checkout the commit that develop branches from). i.e.,";
strVar += "<code>(B)$ git pull upstream develop:develop<\/code> <br \/>";
strVar += "which will give us:<\/p>";
strVar += "";
strVar += "<pre><code>Local:";
strVar += "master: A &lt;-- B &lt;-- C &lt;-- D";
strVar += "               \"";
strVar += "develop:        1 &lt;-- 2 &lt;-- 3 &lt;-- 4";
strVar += "<\/code><\/pre>";
strVar += "";
strVar += "<p>Now, whichever location we have checked out is where the commits we are targeting will be appended to.  So if we had commits A, C, or D checked out develop would have branched from there.  While a neat trick, it is best practice to maintain the structure of the remote repo, so don't have too much fun.<\/p>";
strVar += "";
strVar += "<p>Notice, you can name your new local branch anything you want to.  We could have said <code>(B)$ git pull upstream develop:arbitraryName<\/code> and we would have the same commits as our remote, but under a different branch name (it would point to the correct remote, it would just be confusing).  You have to specify the remote branch correctly to pull what you want, but you can name it whatever you like locally (again, I recommend you maintain the same naming conventions as your remote).<\/p>";
strVar += "";

module.exports = strVar;
