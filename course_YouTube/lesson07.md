#LESSON 7: NODE PACKAGE MANAGER (NPM)
Allows you to install and manage node programs into your platform OR into specific projects.

- Begin project by creating a package.JSON file

## How to create a package.JSON file using the helper
- Create your project folder (mine is lesson7-exercises)
- Use `npm init` command
  * command will take you through a series of questions about the proj.
  * you can always change answers later, so don't worry if u change your mind
- How to answer the prompts:
  * name: (name of project)
  * version: (accept whatever)
  * description: description of app
  * entry point: index.js by default, but choose the javascript file that contains your application -- the one that's going to run.
    - ??? Don't all of them run? Do I just choose the last one?
  * test commands:
  * git:
  * keywords:
  * author: djres88
  Confirm with yes!
- Following those steps, you'll have a properly formatted JSON document
  * You can take things out, but be sure to take out the last comment (just like with regular objects)

##How to Use Modules
1) Installed on your machine
2) Dependencies to your project (like a plug-in)

##Adding Dependencies to Your Project
- Go to your project folder
- `npm install underscore --save`
  * This will install the underscore.js package into your project folder
  * You now have a node modules folder, which should contain an underscore folder
  * In addition, if you look in your package.JSON file, you'll see that underscore has been added as a dependency
- Cool feature: you don't need to give the client/upload to git your npm-modules folder. All you need is the package.JSON file. If you command `npm install` in a folder that contains a package.JSON file, npm will automatically install all the project's dependencies.

##Where can I find modules?
Try this: https://www.npmjs.com/
