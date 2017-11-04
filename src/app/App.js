import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Toolbar from '../components/tool_bar'
import SearchBar from '../containers/search_bar'
import UnitList from '../containers/unit_list'
import UnitDetail from '../containers/unit_detail'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
   primary1Color: '#006cab',
  },
});


class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <Toolbar />
          </header>
          <div id='main_content'>
            <SearchBar />
            <div id="unit_results">
              <UnitList/>
              <UnitDetail />
            </div>

          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
