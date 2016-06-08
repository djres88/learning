#LESSON 16: The Express Generator
- Express comes with a generator that does a lot of the setup work for us

SEE ~/Desktop/code/learning_node/myFirstApp

1. Go to the folder in which you'd like to create your project
2. Install express-generator using `sudo npm install -g express-generator`
  * Figure out a way around the sudo
3. Create project using `express -e myFirstApp`
  * **-e** Installs the ejs version of the templating system
  * The rest creates a series of folders
4. Open the folders and do some cleanup work (specific to this project)
  * app.js: Delete favicon, delete require static favicon
  * app.js: Delete users stuff
  * routes folder: delete users route
5. In the package.json file, edit whatever you want (e.g. change the project name, versions, etc.)
6. Instructions tell you to install dependencies in the main folder. Do that.
  * You may need to do this on two lines, i.e. `cd myFirstApp` THEN `npm install`
7. Preview the project with `DEBUG=myFirstApp:* npm start`

##Look around
