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

}

export default PiggyBank;
