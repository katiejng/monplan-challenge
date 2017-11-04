import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Toolbar from '../components/tool_bar'
import SearchBar from '../containers/search_bar'
import UnitList from '../containers/unit_list'
import UnitDetail from '../containers/unit_detail'
import Loading from '../containers/loading'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css' />

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Toolbar />
        </header>
        <div id='main_content'>
          <Loading />
          <SearchBar />
          <UnitList />
          <UnitDetail />

        </div>
      </div>
    )
  }
}

export default App
