import React from 'react';

class PiggyBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

}

export default PiggyBank;
