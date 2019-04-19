# CREA 2019 Skeleton
> This App serves as a starting point with instruction for aspiring developers using the CRAE  stack (create-react-app-express) & uses the following technologies by its completion.

  | Dependency | Description |
  | --- | --- |
  | [Atom](https://atom.io/) | Coding Text Editor |
  | [Node](https://nodejs.org/en/) | Javascript Command Line Interface |
  | [Yarn](https://github.com/yarnpkg/yarn) | Package Manager |
  | [ReactJS](https://reactjs.org/) | Dynamic Front-End View |
  | [Create-React-App](https://github.com/facebook/create-react-app) | Minimal Configuration ReactJS Setup |
  | [Express](https://expressjs.com/) | Back-End Api Routing |
  | [Nodemon](https://nodemon.io/) | Automatic Server Restart |
  | [PostgreSQL](https://www.postgresql.org/) | SQL Database |
  | [Dotenv](https://github.com/motdotla/dotenv#readme) | Allows Use of Environment Variable |
  | [react-router-dom](https://github.com/ReactTraining/react-router#readme) | Front-End 'Router' |
  | [Knex](https://knexjs.org/) | SQL Query Builder |
  | [@babel](https://babeljs.io/) | ES6 Conversion to ES5 for Browser Compatibly |

### Make sure the Basics are installed:
  * [Homebrew](https://brew.sh/)
    * (See site for installation instructions)
  * [Node](https://nodejs.org/en/)
    * (See site for installation instructions)
  * [Atom](https://atom.io/) *(Or any [coding text editor](https://www.elegantthemes.com/blog/resources/best-code-editors) instead)*
    * (See site for installation instructions)
  * [Yarn](https://github.com/yarnpkg/yarn) *(Or use the Node default CLI [NPM](https://github.com/npm/cli) instead)*
    * `brew install yarn`
  * [Create-React-App](https://github.com/facebook/create-react-app)
    * `yarn global add create-react-app`

### Project Directory Setup:
  * Organization from the top of a project down is important, so we will be designing our project as simply as possible.
  * After finishing the *Initial Creation* section, our Project should resemble this example file structure:
  * *Note: Many files from this example structure have been omitted.*
  ~~~
  myproject
  +-- client
  |   +-- package.json
  +-- server
  |   +-- package.json
  +-- package.json
  +-- readme.md
  ~~~

### How to build an organized Project structure:
  * During these step-by-step instructions, always double check that your in the correct directory!
    * In your terminal navigate to wherever you would like to begin building your project (Desktop is never a bad spot!)
      * `cd ~/Desktop`
    * Create your Projects Root Directory (Top-Level Folder):
      * `mkdir <Project_Name>`
    * Navigate into your new directory:
      * `cd <Project_Name>`
    * Create a "package.json" for the Root Directory:
      * "-y" just means to accept all default options.
      * `yarn init -y`
    * Create another directory called "server":
      * This directory will server as your back-end/API later.
      * `mkdir server`
    * User create-react-app to create another directory called "client":
      *  create-react-app generates all the required files automatically for your front-end!
      * `create-react-app client`

  * Now that we've laid the groundwork for our Project, we will need to make some changes & add some new files to the *server* & *client* directories.


### Server Updates:
  * For updates to the *server* we will need to: create a number of files & install standard dependencies.

  * ###### Create package.json:
    * Navigate to your *server* directory in your terminal:
      * `cd ../server`
    * Then create package.json with yarn:
      * `yarn init -y`

  * ###### Installing dependencies with yarn:
    * Copy & paste into your terminal for a one-line installation:
      * `yarn add express nodemon pg knex dotenv @babel/core @babel/cli @babel/node @babel/preset-env`
      * *(For more information on each dependency, see beginning of readme)*
      * *Note: For clarification Babel converts all new ES6 syntax into all browser compatible ES5 syntax.*
      * *Note: [Body-Parser](https://github.com/expressjs/body-parser#readme) is required if using a version of Express from 4.0+ and before 4.16.0 (Specifically as it was bundled with express before 4.0, and due to outcry, was bundled with express again from 4.16.0 forward.). All code provided will use only express, NOT body-parser.*

  * ###### Adding a start script to package.json:
    * Navigate to your *server* directory in your terminal:
    * Then open package.json with Atom:
      * `atom package.js`
    * Then add a scripts section with the following script:
      * `"start": "nodemon server.js --exec babel-node"`
    * OR paste in the following code:
      ```
      "scripts": {
        "start": "nodemon server.js --exec babel-node"
      }
      ```
    * When you use the command `yarn start` in terminal, this script will run:
      * `nodemon` is keeping a watch for any changes & will automatically restart your server (via server.js) any time you save them.
      * `--exec babel-node` runs babel. Don't really know how it works, but it does.

  * ###### Create server.js:
    * Navigate to your *server* directory in your terminal:
    * Create server.js:
      * `touch server.js`
    * Open server.js with Atom:
      * `atom server.js`
    * Then paste in the following code (Overwriting is fine):
    ```
    // Here we import express to create our 'server/API' using ES6 syntax.
    import express from 'express'

    // Create our "app" using express as a backend.
    const app = express()

    // Allow our backend to extract the body from HTTP POST/PUT requests.
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    // A very simple Router to allow us to get information from our server/API.
    const router = express.Router()
    // Loading localhost:3001/ will direct you to this root '/' route.
    router.get('/', (req, res) => {
      // Here we create a variable named 'helloWorld' that holds an object.
      const helloWorld = [
        {message: 'Hello World!'},
        {message: 'This is pretty cool.'},
        {message: 'You got this working!'},
        {message: 'Amazing job!'}
      ]
      // We return the object in JSON to the calling point (Our browser).
      res.json(helloWorld)
    })

    // Tells our app to use the provided router we just made.
    app.use(router)

    // Tells our app what port to use.
    // If a port is provided as a env variaible then use that, or else just use 3001.
    app.set('port', (process.env.PORT || 3001))

    // Now the app is activly listening for requests. It verifys this with a console.log.
    app.listen(app.get('port'), () => {
      console.log(`Listening on ${app.get('port')}`)
    })
    ```

  * ###### Create .babelrc:
    * Navigate to your *server* directory in your terminal:
    * Create .babelrc:
      * `touch .babelrc`
    * Open .babelrc with Atom:
      * `atom .babelrc`
    * Then paste in the following code:
      * `{ "presets": ["@babel/preset-env"] }`
      * This "preset" is what allows for a majority of ES6 to browser friendly ES5 conversions.

  * ##### **_>>> Check your progress <<<_**
    * Now that we have finished our changes and updates to the *server*, we should start it up and make sure it works properly.
      * Navigate to your *server* directory in your terminal and start your backend:
        * `yarn start`
      * **In your browser:** In your browser navigate to: `http://localhost:3001/`.
        * In the browser should see the object from server.js:
        ```
        {id: 1, message: 'Hello World!'},
        {id: 2, message: 'This is pretty cool.'},
        {id: 3, message: 'You got this working!'},
        {id: 4, message: 'Amazing job!'}
        ```
      * **In your terminal:** Your terminal should display something similar to the following:
        ```
        yarn run v1.15.2
        warning ../../../package.json: No license field
        $ nodemon server.js --exec babel-node
        [nodemon] 1.18.11
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching: *.*
        [nodemon] starting `babel-node server.js`
        Listening on 3001
        ```
      * If both your browser and terminal are displaying properly then updating the *server* is complete.

### Client Updates:
  * For updates to the *client* we will need to: remove git, add a front-end router, update our index.js file & add a proxy.

  * ###### Client - Removing Git:
    * For our project, git will be hosted in our *project root* so we will need to remove the automatically generated repository from our *client*:
    * Navigate to your *client* directory in your terminal and enter:
      * `rm -rf .git`
      * *Note: `rm -rf` is a dangerous command to use without understanding its consequences. In this example, we are removing the automatically created git directory that is installed (called .git) so we can initialize git in another directory.*

  * ###### Client - Adding a front-end router:
    * First we will need to add a basic [react-router-dom](https://reacttraining.com/react-router/) (router) to the frontend, allowing us to effectively navigate through all the [React Components](https://reactjs.org/docs/react-component.html) we might need.
      * Navigate to your *client* directory in your terminal.
      * Install react-router-dom using yarn:
        * `yarn add react-router-dom`
    * Once the installation is finished, we will update index.js.

  * ###### Client - Updating index.js in *client*:
    * Navigate to your *client* directory in your terminal & open index.js with Atom.
      * `atom index.js`
    * Paste in the following code over the original code:
    ```
    // We import React here in order to use it.
    import React from 'react';
    // This allows us to render and alter content dynamically on the DOM (https://reactjs.org/docs/react-dom.html)
    import { render } from 'react-dom';
    // This allows us to create a front-end 'Router', to allow the user to navigate throughout our components without having to reload the page each time (https://reacttraining.com/react-router/web/api/BrowserRouter)
    import { BrowserRouter } from 'react-router-dom';
    // This imports our actual App in order to display it to our browser.
    import App from './App.js';

    // 'render' is what allows the App to be displayed. It's held inside of a 'Router' (BrowserRouter) so in the future we can implement additional route options. The entire thing is rendered at the element 'id' via HTML.
    render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ), document.getElementById('root'));
    ```

  * ###### Client - Adding a proxy:
    * A proxy allows our frontend to communicate with our backend in order to retrieve data & information.
    * Navigate to your *client* directory in your terminal & open package.json with Atom.
    * Add the line `"proxy": "http://localhost:3001"` or copy and paste in the code below:
    ```
    {
      "name": "client",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "react": "^16.8.6",
        "react-dom": "^16.8.6",
        "react-scripts": "2.1.8"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },
      "proxy": "http://localhost:3001",
      "browserslist": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
      ]
    }
    ```
    * *My example code removes the `eslintConfig` section of `package.json`.*
    * *Note: While the port does not have to be 3001, it's conventional that the client runs on port 3000 and the server on port 3001. Do not change the port from 3001 unless you understand what your doing.*

  * ###### Client - Updating App.js:
    * Now we will update our App.js with code that allows communication between frontend and backend.
    * Navigate to your *client* directory in your terminal & open App.js with Atom.
      * `atom App.js`
    * Paste in the following code (overwriting is fine):
    ```
    // Import React and allow it to extend Components.
    import React, { Component } from 'react';
    // Import the css file.
    import './App.css';

    // Create the Class 'App' and allow it to be called as a component from other parts of the client. I.E. index.js.
    class App extends Component {
      // State maintains variables until the browser is refreshed
      state = {
        messages: [],
        toggleButtonOn: true
      }

      // componentDidMount runs functions or HTTP calls prior to the page loading in the browser.
      async componentDidMount() {
      };

      // This function is created using ES6 syntax and uses async/await functionality.
      // getInfoFromApi makes a fetch request to `https://localhost:3001/example`, and receieves a "rawResponse" (Stringified JSON).
      getInfoFromApi = async () => {
        // The "rawResponse" is returned to the variable "convertedResponse" after the JSON is converted back into an object.
        const convertedResponse = await fetch('/example')
        .then(rawResponse => {
            return rawResponse.json()
        });
        // convertedResponse is then set as the current 'state' of 'messages' for use elsewhere in our App. We are also setting another state to false to indicate that a specific button was pressed.
        await this.setState({
          messages: convertedResponse,
          toggleButtonOn: false
        })
      };

      // render is where we begin to generate what is displayed to the browser. It is a useful place to add if statements that depend on the state or props of the Component.
      render() {

        // 'displayButton' will only show if the current state of "toggleButtonOn" is set to "true"
        // That means it should show upon the page being loaded/refreshed since state is lost on refresh.
        // When clicked it runs the function "getInfoFromApi", which changes the state of "toggleButtonOn" to false, chaning "displayButton" to "null" (it will display nothing).
        let displayButton;
        if (this.state.toggleButtonOn) {
           // If this.state.toggleButtonOn is 'true'.
          displayButton = <button onClick={this.getInfoFromApi}>Click here to get data from the backend!</button>
        } else {
          // If this.state.toggleButtonOn is 'false'.
          displayButton = null;
        }

        // 'displayData' should only ever be shown AFTER the fetch request to our API is made by clicking our `displayButton`.
        // So in this case, we only display the data when the state 'toggleButtonOn' is 'false', meaning we've already made the call to our API, received data, and saved it into our state.
        let displayData;
        if (!this.state.toggleButtonOn) {
          // If this.state.toggleButtonOn is 'false'.
          displayData = this.state.messages.map( message => {
              return <li key={message.id}>{message.message}</li>
            })
        } else {
          // If this.state.toggleButtonOn is 'true'.
          displayData = null;
        }

        return (
          <div>
            <h1>This is the frontend of the App!</h1>
            {displayButton}
            <ul>
              {displayData}
            </ul>
          </div>
        );
      };

    };

    export default App;
    ```

  * ##### **_>>> Check your progress <<<_**
    * Now that we have finished our changes and updates to the *client*, we should start it up and make sure it works properly.
      * Navigate to your *client* directory in your terminal and start your frontend:
        * `yarn start`
      * **In your browser:** Your browser (should) automatically open `http://localhost:3000/`.
        * In the browser you should see the some large text that reads: "This is the frontend of the App!" along with a button underneath that reads "Click here to get data from the backend!"
        * Clicking on the button should make the button disappear be replaced with our object of messages from the backend.
      * **In your terminal:** Your terminal should display something similar to the following:
        ```
        Compiled successfully!

        You can now view client in the browser.

          Local:            http://localhost:3000/
          On Your Network:  http://<Your_IP>:3000/

        Note that the development build is not optimized.
        To create a production build, use yarn build.
        ```
      * If both your browser and terminal are displaying properly then you've created a working *client*.

#### Project Root Updates:
  * Now that the *client* & *server* are properly setup to send and accept communications, we should update our *project root* and get it onto Github!

  * ###### Create .gitignore:
    * Navigate to your *project root* directory in your terminal:
      * `cd ../`
    * Then create .gitignore:
      * `touch .gitignore`
    * Open .gitignore with Atom:
      * `atom .gitignore`
    * Then paste in the following code:
    ```
    # Compiled source #
    ###################
    *.com
    *.class
    *.dll
    *.exe
    *.o
    *.so

    # Packages #
    ############
    # it's better to unpack these files and commit the raw source
    # git has its own built in compression methods
    *.7z
    *.dmg
    *.gz
    *.iso
    *.jar
    *.rar
    *.tar
    *.zip

    # Dependencies #
    ################
    /.pnp
    .pnp.js

    # Testing #
    ###########
    /coverage

    # Production #
    ##############
    /build

    # Logs and databases #
    ######################
    *.log
    *.sql
    *.sqlite
    node_modules
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    # OS generated files #
    ######################
    .DS_Store
    .DS_Store?
    ._*
    .Spotlight-V100
    .Trashes
    ehthumbs.db
    Thumbs.db

    # Environment Variables #
    #########################
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local
    ```
    * *Note: Github has a suggested list of objects to ignore listed in a gist [here](https://gist.github.com/octocat/9257657). Everything listed in the gist is included in addition to my own file extensions.*
    * *Note: .gitignore tells our git version manager to ignore certain files or directories. This is helpful for online security when working with sensitive data during development that you don't want posted online where other can abuse it.*

  * ###### Client - Initializing Git:
    * For our project, git will be hosted here, in our *project root*. This allows us to commit changes from both our *client* & our *server* in one place instead of maintaining two separate projects.
    * Navigate to your *project root* directory in your terminal:
      * `cd ../`
    * Then initialize git:
      * `git init`
      * *Note: `git init` create a new directory called .git. This houses all your git related information and allows committing to Github (online cloud code storage). There should never be a need to alter any files within .git manually, as all alterations should be make through the git CLI (terminal commands).*
    * Now we need to create a repo on Github to store it in the cloud:
      * *This portion of instruction assumes you've already created a Github account, know how to make a repo & can obtain the HTTP link for it.*
    * After getting the HTTP link for our git repository, we need to add it as a remote repository and commit it to the cloud:
      * `git remote add origin <Link>`
      * `git add .`
      * `git commit -m "Initial Commit. Setup Root, Client, & Server directories."`
      * `git push origin master`

### ===> You've Competed The App! <====
  * At this point, you've created a fully functional **CRAE** stack Application! Congrats!
  * You can begin adding your own content to the current setup
  * **or**
  * You can continue adding additional packages from this tutorial for a more robust App (More to come soon).

<!--
### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ##### **_>>> Check your progress <<<_**
-->
