#Git Branches
Preface: Creating folders and files in the terminal:

Command | Action
--------------------------|--------------------------------------|
mkdir folder_name         | creates a folder                     |
touch file_name           | creates a file                       |
echo "text" >> monkeybutt | places "text" in the monkeybutt file |
rm new_file               | deletes new_file                     |
rm -rf folder/            | deletes folder/ (must be in right dir|

* After you create a directory, the first thing you need to do is create a git repository. You do this with the command **git init**. This initializes a new repository in the folder.


**Workflow: Creating a Branch**
  * 1. Create a new branch:
    * - Navigate to the master branch in which you're working
    * - Use **git checkout -b [branchname]** to create a new branch.
  * 2. Make a commit within the branch. Potential changes include: creating/deleting folders; creating/deleting files; and edits within existing files.
    * — Create a new folder in a branch: **mkdir newFolder**
    * - Create a new file in a branch: **touch newFile**
    * — Edits to a file in a branch: **echo "text" >> newFile**
  * 3. Add the commits along with a note (this part you've done before):
    * - git add .
    * - git commit -m "Your note goes here"
  * 4. After you're done working on the branch, *merge* the branch with the master.
    * — Navigate to master: **git checkout master**
    * - Merge the branch: **git merge [branchname]**
  * 5. Delete the branch:
    * **git branch -d [branchname]**

Other useful pieces of information:
* **git log** shows all the recent commits you've made
* To see all the different branches that exist in any given moment, type **git branch**.
* To change between (existing) branches, command **git checkout [branchname]**. Note that you do not need the "-b", as the branch will already exist.
* https://backlogtool.com/git-guide/en/stepup/stepup2_1.html
