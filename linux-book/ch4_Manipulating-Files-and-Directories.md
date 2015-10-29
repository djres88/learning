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

NOTE: When moving files, the destination directory must already exist. Otherwise the directory will be renamed instead.

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
EXPLANATION: "Same as above, except that if either file1 or dir1 does not exist, rm will continue silently." Thought rf was for directories? AH BUT use -r for recursive (to delete the directory as well as its subdirectories) and tack on -f for force/override (just for good measure? when to use force?)

####`rm` Options
-i (--interactive)
-r (--recursive)
-v (--verbose)

###F. **`ln`**: Create Links
Two types of links, hard and symbolic. **BUT WHAT IS THEIR USE?**
####i. Hard Links
Example: Create a hard link to the file *linux-notes.md* in the already- existing folder *hard-copies*. Call the hard link *linux-notes_hard.md*:
`ln linux-notes.md hard-copies/linux-notes_hard.md`

If you look at ls-l, you'll see that (*inode numbers? I didn't understand this...*)

####ii. Symbolic Links
Mostly need to know about **symbolic links**. Think of them as alias files. You create symbolic links with the command `ln -s fileName linkName` or `ln -s directoryName linkName`.

A file pointed to by a symbolic link is mostly indistinguishable from the symbolic link itself. If you write something to the symbolic link, the reference file is also written to; however, when you delete a symbolic link, only the link is deleted -- not the original file.


###EXERCISE: Create a Playground
Mess with ls, cp, mkdir, mv, rm, and all the options.
