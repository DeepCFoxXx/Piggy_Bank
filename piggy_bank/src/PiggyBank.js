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

  deposit(){
    this.setState(prevState => {
      return {total: prevState.total + this.props.depositAmount};
    });
  }

  withdraw(){
    this.setState(prevState => {
      let newAmount = prevState.total - this.props.depositAmount;
      if(newAmount < 0){
        newAmount = 0;
      }
      return {total: newAmount};
    });
  }

  render() {
    return (
      <div>
        <h1>React Piggy Bank</h1>
        <p>Piggy Bank owner is {this.props.owner}.</p>
        <p>Balance £{this.state.total}</p>
        <button onClick={ this.deposit }>Add</button>
        <button onClick={ this.withdraw }>Withdraw</button>
      </div>
    );
  }

}

export default PiggyBank;
