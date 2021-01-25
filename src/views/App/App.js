import React from 'react';

import './App.css';

import Chrono from '../../components/Chrono/Chrono'

class App extends React.Component {
  render() {
    return <article className="App d-flex">
      <Chrono />
    </article>
  }
}

export default App;
