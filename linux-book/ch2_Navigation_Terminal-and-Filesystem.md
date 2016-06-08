**##CHAPTER 2: Navigation: The Terminal and Your Filesystem**
###A. Your first commands
* Some Simple Commands
  - `date` displays the current time and date
  - `cal` displays the calendar of the current month
  - `df` to see the current amount of free space on your disk drives
  - ~~`free` to see the amount of free memory~~ doesn't work
  - `exit` ends a terminal session (so does closing the window)

* Navigation Commands
  - `pwd` prints the name of the current working directory (print working directory)
  - `cd` changes the directory
  - `ls` lists directory elements

###B. The Filesystem Tree
  * Linux organizes files using a *hierarchical directory structure*. Files are organized into a treelike pattern of directories (a/k/a "folders").
  * The first directory is called the **root directory**. The root directory contains files and subdirectories, which contain more files and subdirectories, etc. The command **`cd /`** provides a shortcut for the root directory.
  * Whereas Windows employs a separate filesystem tree for each storage device, Unix-like systems such as Linux (and OSx) *always have a single filesystem tree*, no matter how many drives or storage devices (such as USBs or CDs) are attached to the computer. Storage devices are not attached but are *mounted* at points along the tree according to the whims of the *system admin.*
  * The **current working directory** is where we are now. From here we can see the filepath above us (`pwd`) as well as the first level of contents within our directory (`ls`).
  * When you first log into your system, you're taken to your **home directory**. On your mac, your home directory is `/Users/davidresnick.` The symbol **`~`** is shorthand for your home directory.
    - Each user is given his/her own home directory
    - This is the only place a regular (non-super) user is able to write files

###C. List Directory Contents Using `ls`
  * If you type only `ls`, you list the contents of the current directory
  * You can also write `ls /directoryName` to print the contents of directory name, no matter which directory you're in now

###D. Change Directories Using `cd /pathname`
  * **Absolute Pathnames** start from the root directory. For example, we can get to my movies folder from *any* directory using the command `cd Users/davidresnick/movies`.
  * **Relative Pathnames** start from the current working directory. If we're already in `Users/davidresnick`, then we can just write the command `cd movies` and, voila, we're in movies.
    - We can also navigate up to a parent directory using `cd ..`
  * Filename Reminders
    - Don't use spaces or special characters in your filenames. Confine punctuation to period, dash(hyphen), and underscore. If you want spaces, use underscore.
    - Filenames are case sensitive.
    - Filenames that begin with a `.` period character are hidden. That just means `ls` will not list the files unless you use ls -a.
