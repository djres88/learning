#Git Overview
Round Two. Based on http://rogerdudler.github.io/git-guide/ and https://guides.github.com/introduction/flow/

For an overview on bash commands, see. Here's a quick guide:

Command | Action
--------|-----------------------------------------------------------|
ls      | Lists the contents of the current directory.              |
cd      | Navigate to a new directory (cd [directoryName])          |
cd ..   | Navigate one level up (backwards) from current directory  |
mkdir   | Create a new directory
touch   |
echo    |

And a guide to git commands:

Command | Action
------------------------------|------------------------------------------------
git init folderName           | Initializes a new git repository in folderName
git clone URL                 | Clones a repository from <URL> to your local machine
git add fileName (or .)       | Adds fileName to the staging area (ready to commit)
git commit -m "text"          | Commits files from the staging area and commits them to the HEAD, along with the message "text"
git push origin branchName    | Pushes files from the head to branchName




##1. Create a New Repository
First, navigate in the terminal
