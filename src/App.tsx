import * as React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name='Ethan Nguyen' />
        </header>
        <Description countryBy={3} />
      </div>
    );
  }
}

export default App;
