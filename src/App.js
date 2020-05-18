<<<<<<< HEAD
import React, { Component } from 'react'
import logo from './logo.svg'

import Speak from './Speak'
import './App.css'
// import { resolve } from 'url';

export const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success!')
    }, 1000)
  })
}
=======
import React, { Component } from "react";
import logo from "./logo.svg";
>>>>>>> 5cb5642b9147d654f866ca0a7ba87b39f7cc5fc4

import Speak from "./components/Speak";
import "./App.css";

export const asyncFunc = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
};
class App extends Component {
  state = {
<<<<<<< HEAD
    message: ''
  }

  speak = () => {
    this.setState({ message: 'Bark' })
  }
=======
    message: ""
  };

  speak = () => {
    this.setState({ message: "Bark" });
  };
>>>>>>> 5cb5642b9147d654f866ca0a7ba87b39f7cc5fc4

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and manually reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <Speak speak={this.speak} message={this.state.message} />
        </header>
      </div>
    )
  }
}

export default App
