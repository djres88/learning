#Git Overview
Round Two. Based on http://rogerdudler.github.io/git-guide/ and https://guides.github.com/introduction/flow/

##1. GitHub Workflow: An Overivew
Your local git repository -- the file system that exists on your "local machine" (your computer) -- consists of three "rooms": (1) **WORKING DIRECTORY**, (2) **INDEX/STAGE**, and (3) **HEAD**. We make *changes* in the working directory, *add* changes to the stage, and *commit* changes to the head.

Think of these three rooms as your bedroom, your bathroom, and your bar: Your bedroom is where you do things in private; that's the *working directory*. Your bathroom is where you get ready to go out; that's the *index/stage*. Your bar is where you socialize; that's the *head*.

As you work through github, remember that the macro workflow goes like this:
  * 1. **Working Directory:**  Work on files on your local machine. You then ADD these files to the *stage*.
  * 2. **Stage:** Prepare changed files for GitHub. You then COMMIT these changes to the *head*.
  * 3. **Head:** Maintains a public version of the latest files in your project.

There are details, of course, but those come later (see below). Just keep in mind that your interactions with GitHub work within these rooms.

##2. Create a New Directory/Folder
**Commands Cheat Sheet** |
----------------------------------------------------|
**`mkdir tree`**                                    |

First, navigate in the terminal to the location where you'd like to place your new repository. I keep a folder called "code" on my desktop, so I'll navigate to `cd desktop` then `cd code.`

Let's say we want to create a new repository called "tree". We first want to create a directory using the **mkdir** command. In the terminal, we would type the command `mkdir tree`.

##3. Initialize a Git Repository
**Commands Cheat Sheet** |
--------------------------------------------------------------------|
**`git init tree`**                                                 |
**`git clone [SSH Key Here]`** (for existing repository on GitHub)  |

Now we have an empty folder called "tree". Navigate to this folder in your finder and behold the emptiness. Sad, right?

The first step to filling our directory is initializing a git repository. Meet the command **git init**. To initialize a git repository in our tree folder, write the command `git init tree`. You should see a confirmation message similar to "Initialized empty Git repository in /.../tree"

###Note: Clone a Repository
More often you'll want to copy/work with a repository that's on GitHub but not on your local machine. In cases such as these, you'll want to **clone** the repository.

Navigate to the main page of your repository on GitHub.com. On the right side of the page, you'll see a little field that says "SSH key". The SSH key refers to the URL of your repository, and that's what you'll use to copy the repository over to your machine.

Copy/paste the URL (GitHub includes a handy copy/paste button for you). In your terminal, write the command `git clone <URL>.` Congratulations! Your repository has been copied from GitHub to your computer.

##4. Create and Edit Files
**Commands Cheat Sheet** |
------------------------------------------------------|
**`touch tree-about`**                                |
**`echo "text to put in file" >> tree-about`**        |

Again, GitHub is only for viewing and storage; the real work happens on your local machine. Most of that work involves creating and editing files in your repository.

The easies way to create/edit files is in a text editor such as Atom. However, bash commands also offer you a means to create and edit files. This is often much more convenient (especially when we're creating branches -- see \#6, below), so it's a good habit to get into.

We can create new files in our tree-trunk directory using the **touch** command. Let's create an html file called "tree-about":
`touch tree-about.html`
If you navigate to the folder "tree" in your finder, you should see the "tree-about.html" file. Neat!

Let's take things one step further by adding text to our new file. We do this with the **echo** command. Here we'll add the text "text to put in file" to the tree-about file:
`echo "text to put in file" >> tree-about`

If you open up the tree-about file, you should see the following text:
```javascript
test
```

##5. git add & git commit
**Commands Cheat Sheet** |
----------------------------------------------------|
**`git status`**                                    |
**`git add .`**                                     |
**`git commit -m "commit text"`**                   |

Now we have our first file as well as our first changes. Let's send them out into the world! In this step, we'll be pushing our changes to GitHub with git commands.

###Git Status
First, let's to a **git status** check. The git status command shows you all uncommitted changes. If you run this in your terminal, you should see the new repository tree-trunk, the new file tree-about, and a note about one new line of text.

###Git Add & Git Commit

Now we're ready to **add** the changes to our staging area. Recall that staging (or index) is a temporary holding location where we store modified files before *committing* the changes to the head. Once we add a file, we **commit** the file to the head using `git commit -m "I'm making a commit"`.

There are two ways to add/commit changes: as a group or as individual files. To add/command an individual file "tree-about", write the two commands:
`git add tree-about`
`git commit -m "I'm adding the tree-about file."`

Sometimes, however, you will have many changes to different files. Let's create two more files using the terminal: tree-geography.html and tree-lineage.html. `touch tree-geography.html`
`touch tree-lineage.html`
You can add and commit multiple files at once using `add .`:
`add .`
`git commit -m "I'm adding three files: tree-about, tree-geography, and tree-lineage."`
The only downside to adding/commitng as a group is that you're restricted to one comment. But if all your changes are similar, go for it!

##6. Connect Your Repository to GitHub (if neccessary)
**Commands Cheat Sheet** |
----------------------------------------------------|
**(add a remote repository on GitHub)**             |
**`git remote add origin URL`**                     |
**`git push -u origin master`**                     |

If you created a local repository (as opposed to copying an existing repository using **git clone**), you will need to connect your repository to github.

Connect your repository to GitHub in three steps:
  1. Go to GitHub and create a remote repository [here](https://github.com/new).
  2. Connect your local machine to the remote repository. In the command line type `git remote add origin URL`. Your URL will be displayed on GitHub under "push an existing repository from the command line." Here's mine, for example:
  `git remote add origin git@github.com:djres88/tree.git`
  3. Push the local repository to GitHub using `git push -u origin master.`

##7. git push
**Commands Cheat Sheet** |
----------------------------------------------------|
**key command: `git push origin branchName`**       |


Once your local repository is connected to your remote repository on GitHub, you're ready to push those changes! We do this with the command
`git push origin master`. (NOTE: If you're pushing to a branch other than *master*, the command will be `git push origin branchName`).

Remember that our commits are already in the *head* of our local repository, which we completed with the sequence:
`git add .`
`git commit -m "I'm adding three files: tree-about, tree-geography, and tree-lineage."`

But let's quickly check our **git status** to solidify our understanding of how our computer communicates with GitHub.

If you type the command `git status`, you should see a message similar to
`On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working directory clean
`
We'll learn more about what "branch" means in just a second. For now, there are two important points to now:
  * *"ahead of 'origin/master' by 1 commit"*: This means that your local repository (your computer) contains one commit that *has not been added* to your remote repository (GitHub).
  * *"nothing to commit, working directory clean"*: Remember the three "rooms" of a local repository? When you `add .`, you're clearing the working directory -- hence "working directory clean." Similarly, when you `commit -m`, you're clearing the staging room -- hence "nothing to commit".

##8. Branches Workflow
**Commands Cheat Sheet** |
-------------------------------------------------------------------|
**`git checkout -b tree-shake`** (create new branch "tree-shake")  |
**`git add .` , `git commit -m`** (add, commit as usual)           |
**`git checkout master`** (switch to master branch)                |
**`git merge tree-shake`** (merge tree-shake with master branch)   |
**`git branch -d tree-shake`** (delete tree-shake)                 |

When you're working on a project, you're going to have a bunch of different features or ideas in progress at any given time – some of which are ready to go, and others which are not. *Branching* exists to help you manage this workflow.

When you create a **branch** in your project, you're creating an environment where you can try out new ideas. Changes you make on a branch don't affect the master branch, so you're free to experiment and commit changes. Later, once the changes are QA'd, you can re-combine the branch with the master.

###i) Create a Branch
Let's say we want to add a shaking feature to the *tree* repository. We're going to create a new branch, tree-shake, using the command
`git checkout -b tree-shake`

The tree-shake branch is yours and yours alone. No one else can see tree-shake unless you push it to your remote repository (`git push origin tree-shake`). <<???? clarify the *tree-shake* part.>>

###ii) Switch Between Branches
After you create the tree-shake branch, you will be placed on that branch by default. To switch back to the master branch (or any other branch), use the command `git checkout master` (note the absence of the "-b").

###iii) Make Commits to a Branch
The next step is to make our first commit to the new branch using a similar process to the one we went through above. First, make sure you've navigated to the correct branch; you can check this using `git status`.

Potential changes to our branch "tree-shake" include the same things we could do with the master branch: creating/deleting folders; creating/deleting files; and edits within existing files.
  * Create a new folder in a branch: **mkdir newFolder**
  * Create a new file in a branch: **touch newFile**
  * Edits to a file in a branch: **echo "text" >> newFile**
  * Open and add files as normal.

Then go through the same process to add/commit changes:
`git add .`
`git commit -m "I'm making commits to a branch"`

###iv) Merge Branches
All set with our commits! The tree-shake feature is up-and-running. Time to merge our tree-shake branch with the master.

First, navigate to the master using the command `git checkout branch master`. Next, merge your branch with the master using `git merge branch tree-shake`.

###v) Delete the Branch
After you're done working on/merging a branch, delete it using the command `git branch -d tree-shake`.



##Appendix
**Quick Guide: Basic Bash Commands**

Command | Action
--------|-----------------------------------------------------------|
ls      | Lists the contents of the current directory.              |
cd      | Navigate to a new directory (cd [directoryName])          |
cd ..   | Navigate one level up (backwards) from current directory  |
mkdir   | Create a new folder/directory (*mkdir directoryName*)     |
touch   | Create a new file (*touch fileName*)                      |
echo    | Add text to a file (*echo "text" >> fileName)             |

**Quick Guide: Basic Git Commands**

Command | Action
----------------------------|-----------------------------------------------
git init folderName         | Initializes a new git repository in folderName
git clone URL               | Clones a repository from <URL> to your local machine
git checkout -b branchOne   | Creates a new branch, branchOne
git checkout master         | Switches from current branch to the master branch
git add fileName (or .)     | Adds fileName to the staging area (ready to commit)
git commit -m "text"        | Commits files from the staging area and commits them to the HEAD, along with the message "text"
git push origin branchOne   | Pushes files from the head to branchOne
