import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Promo from './components/Promo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>Promos des JS de Lille</h2>
        <h6>(Parce que les autres, bon... osef quoi)</h6>
        <Promo />
      </div>
    );
  }
}
export default App;
