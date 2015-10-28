#Notes from *The Linux Command Line*
## CHAPTER 1: An Introduction
###A. Why the Command Line?
* A good command line interfaces still provides an elegant way to communicate with the computer.
* "Graphical user interfaces make easy tasks easy; command line interfaces make difficult tasks possible."

###B. What is the Shell?
* The command line = the *shell* (synonyms)
  - Shell is a program that takes keyboard commands and passes them to the OS to carry out
  - Most Linux systems supply a shell program called `bash`, which stands for *bourne again shell*, a reference to the original Unix shell program `sh` for which bash is a replacement/enhancement
  - In graphical user interfaces (like your Mac), you access the shell using a "terminal emulator" -- for you, it's the *terminal* Application.

* Shell Orientation
  - The `Davids-Macbook-Pro:/ davidresnick$` beginning is called the *shell prompt*. It appears whenever the shell is ready to accept input.
    * NOTE: If the last character of the prompt is a hash mark (#) rather than a dollar sign, that means the terminal session has *superuser* privileges
  - **UP ARROW**: Recall last command (up to 500 back)
  - **LEFT/RIGHT ARROWS**: Navigate the command line text

##CHAPTER 2: Navigation: The Terminal and Your Filesystem
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
  * The first directory is called the **root directory**. The root directory contains files and subdirectories, which contain more files and subdirectories, etc....
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

##CHAPTER 3: Exploring the Linux System
###A. `ls`: Linux's Utility Man
  * Besides showing contents in the working directory, `ls` can show contents of another directory too (`ls /movies`).
  * **`ls filepath1 filepath2`**: You can show the contents of *multiple* directories at once by typing two filepaths after the ls: `ls /movies ~` will display the contents of movies as well as the user's home directory (indicated by `~`).
  * **`ls -l`**: Change the display output to long format.

We'll be using `ls` as the main example for the next couple sections.

###B. **Options and Arguments**
As you saw with `ls`, commands are often followed by one or more options that modify their behavior. Many commands are followed further by one or more *arguments*, the items upon which the command acts. So many commands look like this:
    `command -options arguments`
  * For most commands, the options consist of a single character preceded by `-` (e.g. `ls -l`)
  * Often, you can string two commands together. An example of this is `ls -lt`, which strings together the `l` option to produce long format output and the `t` option to sort the result by the file's modification time.
  * Many commands also take *long options*, which consist of a word preceded by two dashes. You can even string these on to other options like so: `ls -lt --reverse` reverses the order of the sort.

Here are the **most common options and arguments** for `ls`:
Option  | Long Option       | Descriptions
--------|-------------------|--------------
-a      | --all             | List all files, including those hidden (i.e. files that begin with a period)
-d      | --directory       | Use in conjunction with the -l option to see details about the directory rather than its contents.
-F      | --classify        | Append an indicator character at the end of each listed name (e.g., a forward slash if the name is a directory vs. an html if the name is an html file)
-h      | --human-readable  | In long format listings, display file sizes in human readable format rather than in bytes.
-l      |                   | Display results in long format.
-r      | --reverse         | Display results in reverse order (by default `ls` displays results in ascending alphabetical order)
-S      |                   | Sort results by file size
-t      |                   | Sort results by modification time

####NOTE: Looking Closer at Long Listings
If we look at the long listings, what do these things mean? Let's take the example `-rw-r--r root root 32059 2012-04-03 11:05 oo-cd-cover.odf`. Here's a breakdown:

Field           | Meaning
----------------|-----------------
-rw-r--r--      | Access rights to the file. The first character indicates the file type -- here, the `-` indicates a regular file; for directories the first character is `d`. The next three characters (`rw-`) are the access rights for the file's owner; the next three (`r--`) are access rights for members of the file's group; and the final three (`r--`) are for everyone else. Can you guess what these mean?? I'm gonna guess rw- = read/write and r-- = read only.
1               | File's number of hard links
root            | User name of the file's owner
root            | Name of the group that owns the file
32059           | Size of the file in bytes
2012-04-03 11:05| Date and time of the file's last modification

###C. Determining a File's Type with `file`
Filenames in Linux are not required to reflect a file's contents. While a filename such as picture.jpg might be expected to contain an image, Linux does not require this. To see what a file actually contains we use the `file` command: `file picture.jpg` (if the picture is a file) will result in a print `picture.jpg: JPEG image data, JFIF standard 1.01`.

###D. Viewing File Contents with `Less`
The `less` command is a program to view text files. Why is it useful? Because *configuration files*--the files that store system settings--are written as text files, and we need a convenient way to read them. Many of the actual programs that the system uses (called *scripts*) are stored as text files well.

####Operating Within `Less`
Once you start the `less` program, you can view the contents of the file by scrolling up/down. To exit less, press `q`.
  * G: Move to the end of the text file
  * g: Move to the beginning of the text file
  * */characters*: Search for the next instance of "characters"
  * n: Search for the next instance of the previous search
  * h: Display help screen
  * q: Quit `less`

####How Does Text Really Work?
An early version: ASCII ("As-Key") encoding scheme maps characters to numbers. Because the computer only understands numbers. Apps like Word are more complex.

###*TASK: Go on a Tour!*
1. cd into a given directory.
2. List the directory contents with ls -l.
3. If you see an interesting file, determine its contents with file.
4. If it looks as if it might be text, try viewing it with less

###E. Directories Overview
Directory   | Explanation
------------|---------------------------------------------------------
/           | The root directory, where everything begins.
/bin        | Contains binaries (programs) that must be present for the system to boot and run.
/boot       | Contains the Linux kernel, initial RAM disk image (for drivers needed at boot time), and the boot loader. Interesting files: `/boot/grub/grub.conf` or `menu.lst`, which are used to ￼￼￼￼configure the boot loader; and `/boot/vmlinuz`, the Linux kernel
/dev        | This is a special directory that contains device nodes. “Everything is a file” also applies to devices. Here is where the kernel maintains a list of all the devices it understands.
/etc        | The /etc directory contains all of the system-wide configuration files. It also contains a collection of shell scripts that start each of the system services at boot time. Everything in this directory should be readable text. While everything in /etc is interesting, here are some of my all-time favorites: `/etc/crontab`, a file that defines when automated jobs will run; `/etc/fstab`, a table of storage devices and their associated mount points; and ` /etc/passwd`, a list of the user accounts
/home       | In normal configurations, each user is given a directory in /home. Ordinary users can write files only in their home directories. This limitation protects the system from errant user activity.
/lib        | Contains shared library files used by the core system programs. These are similar to DLLs in Windows.
/lost+found | Each formatted partition or device using a Linux file- system, such as ext3, will have this directory. It is used in the case of a partial recovery from a filesystem corruption event. Unless something really bad has happened to your system, this directory will remain empty.
/media      | On modern Linux systems the /media directory will contain the mount points for removable media such as USB drives, CD-ROMs, etc. that are mounted automatically at insertion.
/mnt        | On older Linux systems, the /mnt directory contains mount points for removable devices that have been mounted manually.
/opt        | The /opt directory is used to install “optional” software. This is mainly used to hold commercial software products that may be installed on your system.
/proc       | The /proc directory is special. It’s not a real filesystem in the sense of files stored on your hard drive. Rather, it is a virtual filesystem maintained by the Linux kernel. The “files” it contains are peepholes into the kernel itself. The files are readable and will give you a picture of how the kernel sees your computer.
/root       | This is the home directory for the root account.
/sbin       | This directory contains “system” binaries. These are programs that perform vital system tasks that are generally reserved for the superuser.
/tmp        | The /tmp directory is intended for storage of temporary, transient files created by various programs. Some con- figurations cause this directory to be emptied each time the system is rebooted.
/usr        | The /usr directory tree is likely the largest one on a Linux system. It contains all the programs and support files used by regular users.
/usr/bin    | /usr/bin contains the executable programs installed by your Linux distribution. It is not uncommon for this directory to hold thousands of programs.
/usr/lib    | The shared libraries for the programs in /usr/bin.
/usr/local  | The /usr/local tree is where programs that are not included with your distribution but are intended for system-wide use are installed. Programs compiled from source code are normally installed in /usr/local/bin. On a newly installed Linux system, this tree exists, but it will be empty until the system administrator puts some- thing in it.
/usr/sbin   | Contains more system administration programs.
/usr/share  | /usr/share contains all the shared data used by programs in /usr/bin. This includes things like default configuration files, icons, screen backgrounds, sound files, etc. See also `usr/share/doc`: Most packages installed on the system will include some kind of documentation. In /usr/share/doc, we will find documentation files organized by package.
/var        | With the exception of /tmp and /home, the directories we have looked at so far remain relatively static; that is, their contents don’t change. The /var directory tree is where data that is likely to change is stored. Various databases, spool files, user mail, etc. are located here.
/var/log    | /var/log contains log files, records of various system activity. These are very important and should be monitored from time to time. The most useful one is /var/ log/messages. Note that for security reasons on some systems, you must be the superuser to view log files.

###F. Symbolic Links
What? Don't think have the background to understand this, and I don't see its utility yet. The book probably shouldn't waste time explaining this now. NOTE TO SELF: come back to **shared** and **hard links** later.

**##CHAPTER 4: Manipulating Files and Directories**
**These are your main commands!** There are important options to know, as well, but you'll be well-served by remembering these as the main branches of the tree:
COMMAND | ACTION                            |
--------|-----------------------------------|
cp      | Copy files and directories        |
mv      | Move/rename files and directories |
mkdir   | Create directories                |
rm      | Remove files and directories      |
ln      | Create hard and symbolic links    |

###A. Wildcards
You can lookup and manipulate GROUPS of files using wildcards such as `*` (which matches any string of characters). This is a powerful organization tool; if you wanted to change all your old mp3 file extensions (what is this, 2008?) to mp4 or whatever, you could do that all at once. So you can start seeing the importance of having a good file naming system.

Here are the wildcards (NOTE: PRACTICE THESE!):
WILDCARD        | MATCHES                                  |
----------------|------------------------------------------|
 `*`            |Any characters                            |
 `?`            |Any single character                      |
 [*characters*] |Any character of the set *characters*     |
 [!*characters*]|Any character NOT of the set *characters* |
 [[:*class*:]]  |Any character of the specified *class*    |

Example           | Matches
------------------|----------------------------------------
`*`               | All files
Data*             | Any file beginning with *Data*
Data*.html        | Any file beginning with *Data* followed by any characters and ending with *.html.*
Data???           | Any file beginning with *Data* followed by exactly three characters.
[abc]*            | Any file beginning with either *a, b, or c*
`LOVE.[0-9][0-9]` | Any file beginning with *LOVE.* followed by exactly two numerals.
[[:upper]]*       | Any file beginning with an uppercase letter
[![:digit:]]*     | Any file not beginning with a numeral
`*[[:lower:]123]` | Any file ending with a lowercase letter OR the numerals *1, 2 or 3.*

For the aforementioned classes, there are a few common ones you should know. We already saw a few, such as [:upper:] and [:digits:], in the examples above. Here are five to memorize:
####Character Class Types
  * **[:alnum:]** - Any alphanumeric character
  * **[:alpha:]** - Any alphabetic character
  * **[:digit:]** - Any numeral (NOTE: same as using [0-9])
  * **[:lower:]** - Any lowercase letter
  * **[:upper:]** - Any uppercase letter

###B. **`mkdir`**: Create Directories
The command: `mkdir directoryName`.

Note that you can make multiple directories with one command: `mkdir dirName1 dirName2 dirName3...`.

*NOTE: In this book, "..." notation is used to indicate that the command may be repeated for multiple files/directories*.

###C. **`cp`**: Copy Files and Directories
The command: `cp item1 item2 item3...directoryName` copies as many files/directories as you want to a directory of your choice (the directory is the last argument in the command).

`cp` comes with a bunch of options. Here they are:
####`cp` Options
Option (Short/Long)| Meaning
-------------------|--------------------------------------
-a, --archive      | By default, copies take on the attributes of the user performing the copy. `-a` copies the attributes of the files/directories, including ownerships and permissions.
-i, --interactive  | `cp` overwrites duplicate files by default. `-i` Prompts user for confirmation before overwriting. Responding to the prompt by entering a y will cause the file to be overwritten; any other character (for example, n) will cause cp to leave the file alone.
-r, --recursive    | Recursively copies directories and their contents. This option (or the -a option) is required when copying directories.
-u, --update       | Only adds files that (a) don't exist or (b) are newer than the destination's existing files.
-v, --verbose      | Displays messages as the copy is performed

####EXERCISES?


###D. **`mv`**: Move and Rename Files
The `mv` command controls both file moving and renaming.

Rename files: `mv file1 file2`
Rename directories: `mv dir1 dir2`
Move files from one directory to another: `mv file1 file2...dir1`

####`mv` Options
Option (Short/Long)| Meaning
-------------------|--------------------------------------
-i, --ineractive   | Same as `cp`: prompts user before overwriting files
-u, --update       | Same as `cp`: only moves files that are nonexistent or newer than the destination's existing files.
-v, --verbose      | Same as `cp`: display messages

####EXERCISES???

###E. **`rm`**: Remove Files and Directories
The command: `rm item`. Be careful using wildcards with rm!
QUESTION: Didn't understand rf...
EXAMPLE: `rm -rf file1 dir1`
EXPLANATION: "Same as above, except that if either file1 or dir1 does not exist, rm will continue silently." Thought rf was for directories?

####`rm` Options
-i (--interactive)
-r (--recursive)
-v (--verbose)

###F. **`ln`**: Create Links
Mostly need to know about **symbolic links**. Think of them as alias files. You create symbolic links with the command `ln -s fileName linkName` or `ln -s directoryName linkName`.

A file pointed to by a symbolic link is mostly indistinguishable from the symbolic link itself. If you write something to the symbolic link, the reference file is also written to; however, when you delete a symbolic link, only the link is deleted -- not the original file.


###EXERCISE: Create a Playground
