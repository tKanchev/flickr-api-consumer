import React, { Component } from 'react';
import './App.scss';
import Feed from './components/feed/feed';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <div className={'app__content'}>
          <Feed/>
        </div>        
      </div>
    );
  }
}

export default App;
