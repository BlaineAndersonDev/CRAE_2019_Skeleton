// Import React and allow it to extend Components.
import React, { Component } from 'react';
// Import the css file.
import './App.css';

// Create the Class 'App' and allow it to be called as a component from other parts of the client. I.E. index.js.
class App extends Component {
  state = {messages: []}

  async componentDidMount() {

    const response = await fetch('/example')
    .then(response => {
        return response.json()
    });
    console.log('Messages: ' + response)
    console.log('Messages: ' + Object.keys(response))
    await this.setState({messages: response})
  };

  render() {

    return (
      <div>
        <ul>
          {this.state.messages.map( message => {
            return <li key={message.id}>{message.message}</li>
          })}
        </ul>
      </div>
    );
  };

};


export default App;
