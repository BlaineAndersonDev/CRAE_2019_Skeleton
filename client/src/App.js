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
