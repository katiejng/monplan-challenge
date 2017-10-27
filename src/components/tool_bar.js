import React, {Component} from 'react'

class ToolBar extends Component{
  render(){
    return (
      <header id="my_toolbar" className="mdc-toolbar">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <a href="#" className="material-icons mdc-toolbar__menu-icon">menu</a>
            <span className="mdc-toolbar__title">Monash Handbook Unit Viewer</span>
          </section>
        </div>
      </header>
    );
  }
}

export default ToolBar
