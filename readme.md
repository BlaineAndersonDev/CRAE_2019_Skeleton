# Skyward Therapies
> This App serves as a starting point with instruction for aspiring developers using the CRAE  stack (create-react-app-express) & uses the following technologies by its completion.

|  |  |
| --- | --- |
| [Yarn](https://github.com/yarnpkg/yarn) | [ReactJS](https://reactjs.org/) |
| [Create-React-App](https://github.com/facebook/create-react-app) | [Express](https://expressjs.com/) |
| [Nodemon](https://nodemon.io/) | [PostgreSQL](https://www.postgresql.org/) |
| [Knex](https://knexjs.org/) | [Dotenv](https://github.com/motdotla/dotenv#readme) |
| [@babel](https://babeljs.io/) | [react-router-dom](https://github.com/ReactTraining/react-router#readme) |
| [name](https) | [name](https) |

## Initial Creation:

  * ### Make sure the Basics are installed (Required Homebrew):
    * [Yarn](https://github.com/yarnpkg/yarn) `brew install yarn`
    * [Create-React-App](https://github.com/facebook/create-react-app) `yarn global add create-react-app`

  * ### Project Directory Setup:

    * Our base setup will be our containing directory, and within it will be our server and client directories as well as a readme.md & package.json.
    * I.E. (With many files omitted)
    ~~~
    myproject
    +-- client
    |   +-- package.json
    +-- server
    |   +-- package.json
    +-- package.json
    +-- readme.md
    ~~~

  * ### Step by Step High Level Project Structure:
    ```
    // Create Project Directory
    mkdir <Project_Name>

    // Navigate To Directory
    cd <Project_Name>

    // Add package.json using Yarn
      // -y just means to accept all default options.
    yarn init -y

    // Create The Server Directory
    mkdir server

    // Create the Client Project
    create-react-app client
    ```
    * There are a number of changes we will need to make to both our client and server directories and files. There are less things to update in client, so we will begin there.

  * ### Client Updates:
    * First we will need to add a basic router to the frontend, allowing us to effectively navigate through all the Components we might need.
      * Navigate to your client directory in the terminal & install it with yarn:
        * `yarn add react-router-dom`
      * Now we will clean up the starting point for our App by pasting the following code into index.js in the client directory.
      ```
      import React from 'react';
      import { render } from 'react-dom';
      import { BrowserRouter } from 'react-router-dom';
      import App from './App.js';
      import './index.css';

      render((
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      ), document.getElementById('root'));
      ```
    * We will also need to add a proxy to the client. This allows the client to communicate with the server API running locally.
    * Add `"proxy": "http://localhost:3001"` to the client `package.json`. I.E.:
      * *Note: While the port does not have to be 3001, it's conventional that the client runs on port 3000 and the server on port 3001.*
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
    * *My example removes the `eslintConfig` section of `package.json`. It won't hurt to leave it in, but i've personally never needed them.*

    #### **Check your progress:**
      * In your terminal navigate to the client directory and use `yarn start` to check. If it loads a page in your browser and states something like *this* in your terminal then its good to go:
      ```
      Compiled successfully!

      You can now view client in the browser.

        Local:            http://localhost:3000/
        On Your Network:  http://<Your_IP>:3000/

      Note that the development build is not optimized.
      To create a production build, use yarn build.
      ```

  * ### Server Updates:
    * For our server updates, we will be setting all the required dependencies to allow communication between the client and server.
    ```
    // Navigate Over To The Server Directory
    cd ../server

    // Create a package.json with all the defaults
    yarn init -y

    // Create Our Basic server.js File (Our Server Starting Point)
    touch server.js
    ```
    * Now we will need to install standard dependencies.

    * **Standard Dependencies**:
        * Complete Installation:
          * `yarn add express nodemon pg knex dotenv @babel/core @babel/cli @babel/node @babel/preset-env`
        * Individual Installations:
          * [Express](https://expressjs.com/): `yarn add express` (Back-End Api)
          * [Nodemon](https://nodemon.io/): `yarn add nodemon` (Automatic Server Restart)
          * [PostgreSQL](https://www.postgresql.org/): `yarn add pg` (PostgreSQL)
          * [Knex](https://knexjs.org/): `yarn add knex` (SQL Query Builder)
          * [Dotenv](https://github.com/motdotla/dotenv#readme): `yarn add dotenv` (Environment Variables)
          * [@babel](https://babeljs.io/): `yarn add @babel/core` (ES5 to ES6 conversion)
        * *Note: For clarification Babel converts all new ES6 syntax into all browser compatible ES5 syntax.*
        * *Note: [Body-Parser](https://github.com/expressjs/body-parser#readme) is required if using a version of Express from 4.0+ and before 4.16.0 (Specifically as it was bundled with express before 4.0, and due to outcry, was bundled with express again from 4.16.0 forward.). All code provided will use only express, NOT body-parser.*

        * In the server directory create a file called `.babelrc` and paste this in:
          * `{ "presets": ["@babel/preset-env"] }`
          * This "preset" is what allows for a majority of ES6 to ES5 conversions.

        * In the server directory create another file called `.gitignore` and paste this in:
          ```
          # dependencies
          *node_modules/*
          /.pnp
          .pnp.js

          # testing
          /coverage

          # production
          /build

          # misc
          .DS_Store
          .env.local
          .env.development.local
          .env.test.local
          .env.production.local

          npm-debug.log*
          yarn-debug.log*
          yarn-error.log*
          node_modules/
          ```

        * In server.js paste the following in:
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

        * Now in package.json in the server directory add a scripts section to the package.json:
          ```
          "scripts": {
            "start": "nodemon server.js --exec babel-node"
          }
          ```
          * When you use the command `yarn start` in terminal, this script will run:
            * `nodemon` is keeping a watch for any changes & will automatically restart your server (via server.js) any time you save them.
            * `--exec babel-node` runs babel. Don't really know how it works, but it does.

        #### **Check your progress:**
          * Navigate to the server directory and use `yarn start` to check. If localhost:3001 replies with:
          ```
          [{"message":"Hello World!"},{"message":"This is pretty cool."},{"message":"You got this working!"},{"message":"Amazing job!"}]
          ```
          and states something like *this* in your terminal then its good to go:
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

    * ### The Root Project (Running & Communicating Between Client & Server):








    #### **Check your progress:**



  * ### TITLE:
    *
    *
    *

  * ### TITLE:
    *
    *
    *

  * ### TITLE:
    *
    *
    *

  * ### TITLE:
    *
    *
    *

  * ### TITLE:
    *
    *
    *

  * ### TITLE:
    *
    *
    *
