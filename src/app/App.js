import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ExampleComponent from '../components/example/'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Monash Handbook Unit Viewer</h1>
        </header>
        <p className='App-intro'>
          {/* INSERT COMPONENTS REGION */}
          <ExampleComponent />
        </p>
      </div>
    )
  }
}

export default App
