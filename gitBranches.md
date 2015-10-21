#Git Branches
USE git_learning instead. https://github.com/djres88/learning_git/blob/master/git_learning.md

~~Resources:
GitHub: https://guides.github.com/introduction/flow/
Other: http://rogerdudler.github.io/git-guide/




When you're working on a project, you're going to have a bunch of different features or ideas in progress at any given time – some of which are ready to go, and others which are not. *Branching* exists to help you manage this workflow.

When you create a **branch** in your project, you're creating an environment where you can try out new ideas. Changes you make on a branch don't affect the master branch, so you're free to experiment and commit changes. Later, once the changes are QA'd, you can re-combine the branch with the master.

NOTE: Branching is a core concept in Git, and the entire GitHub Flow is based upon it. There's only one rule: *anything in the master branch is always deployable ("ready-to-go").* When you're working on a feature or a fix, you should be working off a branch. Your branch name should be *descriptive* so that others know what you're working on.

##1. Create Your Directory &
###b. Create a New Local Directory
On the other hand, if your master branch doesn't exist yet, you will first need to create a new local directory. You do this by navigating to the directory's desired location and typing the command `mkdir [folderName]`. This creates a new directory called `folderName`.

Now we need to initialize the folder as a git repository. To create a git repository in the folder `folderName`, type the command `git init [folderName]`.
Don't see anything in the folder yet? That's okay. If you open folderName in a text editor (such as atom), you'll see a folder called **.git**. Success! Your folder is now a git repository!

###c. Alternative: Create a Repository on GitHub (and Clone to Your Local Machine)
You can also create a new repository on github and clone to your local machine using the command `git clone [SSH Key]`.

Before you clone the repository to your local machine, make sure you first navigate to your repository's desired location. The command will then copy a github repository to your machine, and we can make branches from there.

You can find the SSH key (along with a handy copy/paste button) on the main page of the repository on github.

##2. Create a Branch
REPEAT: If you're creating a new local directory on your machine (see 1.b), you'll need to initialize a git repository before moving on. You do this with `git init [directoryName].`

Now you're ready to create your branch! First, make sure you've navigated to the master branch in your terminal.

For example, let's say your master branch is `tree-trunk`, and you want to make a branch called `tree-limb-one`. First, you'll navigate to the main branch using `cd tree-trunk`. You will then **create a new branch using** `git checkout -b tree-limb-one.`

You should see a confirmation message that says "Switched to a new branch 'tree limb one'".

##3. Make Commits to Your Branch



**Workflow**
  1. First, create a new branch:
    * Navigate to the master branch in which you're working
    * Use **git checkout -b [branchname]** to create a new branch.
  2. Make a commit within the branch. Potential changes include: creating/deleting folders; creating/deleting files; and edits within existing files.
    * Create a new folder in a branch: **mkdir newFolder**
    * Create a new file in a branch: **touch newFile**
    * Edits to a file in a branch: **echo "text" >> newFile**
  3. Add the commits along with a note (this part you've done before):
    * git add .
    * git commit -m "Your note goes here"
  4. After you're done working on the branch, *merge* the branch with the master.
    * Navigate to master: **git checkout master**
    * Merge the branch: **git merge [branchname]**
  5. Delete the branch:
    * **git branch -d [branchname]**

Other useful pieces of information:
* **git log** shows all the recent commits you've made
* To see all the different branches that exist in any given moment, type **git branch**.
* To change between (existing) branches, command **git checkout [branchname]**. Note that you do not need the "-b", as the branch will already exist.
* https://backlogtool.com/git-guide/en/stepup/stepup2_1.html

**Quick Guide:**

Command | Action
--------------------------|--------------------------------------|
mkdir folder_name         | creates a folder                     |
touch file_name           | creates a file                       |
echo "text" >> monkeybutt | places "text" in the monkeybutt file |
rm new_file               | deletes new_file                     |
rm -rf folder/            | deletes folder/ (must be in right dir|

* After you create a directory, the first thing you need to do is create a git repository. You do this with the command **git init**. This initializes a new repository in the folder.~~
