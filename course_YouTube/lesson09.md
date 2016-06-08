#LESSON 9: INSTALL EXPRESS
* Recall two ways to use node package manager:
  1. Globally, so entire system can use it
  2. Locally, on a project-by-project basis

* In the case of Express, we actually want to do both.
  - When we install Express as an application, it's also going to install command line interface tools (CLIs)
  - That's going to let us execute commands from the timeline, much like we do with node (?)

* To install express globally, use `sudo npm install -g express-generator` (for versions 4.0 and later)
  - check using `express --version`
  - NOTE: Find a way to do this without SUDO ("super user do"). You'll probably need the linux book

* Just like in LESSON 7, you also want to create a package.json file in your project folder
  - See the project folder lesson-9-exercises
  - Again use `npm init`

* Now add express as a dependency
  - In the terminal, type `npm install express --save`
  - This will add the latest version of express to the project
