**##CHAPTER 5: Working with Commands**
###Overview: Commands in This Chapter
Command     |  Meaning
------------|-----------------------
`type`      | Indicate how a command name is interpreted.
`which`     | Display which executable program will be executed.
`man`       | Display a command’s manual page.
`apropos`   |  Display a list of appropriate commands.
`info`      | Display a command’s info entry.
`whatis`    | Display brief description of a command.
`alias`     | Create an alias for a command.

###A. What Are Commands?
A command can be one of four things:
  * **A program**. For example, the files in *usr/bin*. Programs can be either:
    - *Compiled binaries*, such as programs written in C and C++; or
    - *Scripting languages*, such as Ruby, Python, PHP, the shell, etc...
  * **A built-in shell command**. Shell builtins include `cd`, `ls`, and others we learned in ch4.
  * **A shell function**. (You'll learn later).
  * **An alias**. A command we define ourselves, built from other commands.

###B. How to Identify a Command
Two ways:

####i. `type command-name`
`type` returns the kind of command the shell will execute. For example, `type cd` returns `cd is a shell builtin`

####ii. `which executable-name`
`which` returns the exact location of a given executable. NOTE that which only works on executables, not shell builtins:
`which ls` --> `/bin/ls`
`which cp` --> `(error message)`

###C. Getting a Command's Documentation
####i. `help command-name`
`help [commandName]` displays all the documentation for commandName, as well as the available options. If we want to see the documentation for `cd`:
`$ help cd`
`cd: cd [-L | -P] [dir]`
`(detailed explanation)`

####ii. `command-name --help`
Many executable programs include a `--help` option. This wil display the commands supported syntax and options.

####iii. `man command-name`
This lists a detailed manual/reference for the executable program. The man page contents include:
Section | Contents
--------|-----------
  1     | User commands
  2     | Programming interfaces for kernel system calls
  3     | Programming interfaces to the C library
  4     | Special files such as device nodes and drivers
  5     | File formats
  6     | Games and amusements such as screensavers
  7     | Miscellaneous
  8     | System admin commands

  We can search for keywords when we call the manual:
  `man [section] [search_term]`
  Example: `man 5 passwd`

Exit the linux manual page by pressing `q`.

####iv. `apropos`: Display appropriate commands??? (page 43)
`$ apropos floppy` displays the list of commands ???

####v. `whatis`: Very brief description of a command
`$whatis mv`
`mv       -move files`

####vi. `info`: Display a program's info entry
GNU provides an alternative to man pages called *info pages*. We could get info for cp by typing `info cp`.

The info program reads info files, which are tree-structured into individual *nodes*, each containing a single topic. Info files contain hyperlinks that can move you from node to node. A hyperlink can be identified by its leading asterisk and is activated by placing the cursor upon it and pressing the ENTER key.

Important info commands:
  * **?** : Display command help
  * **PAGE UP** : previous Page
  * **PAGE DOWN** : next page
  * **n** : next node
  * **p** : previous node
  * **u** : display parent node of currently displayed node (usually a menu)
  * **ENTER** : follow the hyperlink (when cursor is on a hyperlink)
  * **q** : quit

###D. **`alias`** Create Your Own Commands
Before we start, here's a command line trick: you can put more than one command on a line by separating commands with a semicolon:
`$ command1; command2; command3;`
`$ cd ~/Desktop/code; ls` (awesome)

Okay, now we're ready. Here are the steps:
  1. Use `type aliasName` to test whether your desired aliasName is already taken (e.g. you usually don't name your alias `cd`)
  2. Create the alias `itunes` like this:
    * `$ alias itunes='cd /Applications; open iTunes.app; cd -;'`
    * ^ That code will switch to Applications in your root directory; open iTunes; and return to the original directory.
  3. Use `type itunes` to see your alias:
    * `itunes is aliased to 'cd /Applications; open iTunes.app; cd -'`
  4. If you want to remove an alias, use `unalias` (e.g. `unalias itunes`)
  5. To see all the aliases in an environment, use the `alias` command without any arguments.

In step 1, we tested whether our alias already had a name. But sometimes you want to alias a set of commands to an existing command name -- for instance, let's say you wanted to display the contents of a directory every time you changed directories. You could alias `alias cd='ls'` to the `cd` command.

BUT SO HERE'S THE PROBLEM WITH DEFINING ALIASES ON THE COMMAND LINE: *They go away when you end your session.* (Later, you'll learn how to create files that load aliases at every shell login.)
