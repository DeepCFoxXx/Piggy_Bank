import React, { Component } from 'react';
import PiggyBank from './PiggyBank.js';

class App extends Component {
  render() {
    return (
      <PiggyBank
        title="Kara's Savings Pig"
        owner="Kara"
        depositAmount={10}
      />
    );
  }
}

export default App;
