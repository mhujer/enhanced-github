Enhanced Github Chrome Extension
================================

@tomasfejfar has created following [Git aliases](https://git.wiki.kernel.org/index.php/Aliases#Introduction)
to allow easier Pull Requests review. And because copying the branch name from the PR is tricky, I created 
a Google Chrome extension that adds fancy buttons to the PR page. (And I have some stuff planned for the future.)

![Enhanced Github Chrome Extension](preview.png)

Fetch PR:
--------
In case you just need to test the PR locally, add this alias:

`fpr = "!f() { git stash; git fetch upstream pull/$1/head:review/$1; git checkout review/$1; git stash pop; }; f"`

And use it like this: `git fpr [pr-number]`


Fetch Remote Branch
--------------------
In case you want to fetch someone's branch and work on it, add this alias:

`frb = "!f() { git stash; git fetch $1 $2:refs/remotes/$1/$2; git branch $1-$2 $1/$2 --track; git checkout $1-$2; git stash pop; }; f"`

And use it like this: `git frb [remote] [branch-name]`