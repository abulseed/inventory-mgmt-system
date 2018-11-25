import React, { Component } from 'react';
import { connect } from 'react-redux';

import icStyles from './ItemCard.module.scss';
import { sellItemFromInventory } from '../../store';

class ItemCard extends Component {
  state = {
    sellingQuantity: 1
  }

  increment = () => {
    this.setState(prevState => (
      { sellingQuantity: prevState.sellingQuantity === +this.props.items[0].quantity ? prevState.sellingQuantity : prevState.sellingQuantity + 1 }
    ));
  }

  decrement = () => {
    this.setState(prevState => (
      { sellingQuantity: prevState.sellingQuantity === 1 ? prevState.sellingQuantity : prevState.sellingQuantity - 1 }
    ));
  }

  sellItem = () => {
    this.props.dispatch(sellItemFromInventory({
      name: this.props.items[0].name,
      value: this.props.items[0].value,
      quantity: this.state.sellingQuantity,
    }));
  }

  render() {
    if (!this.props.items[0]) {
      return null;
    }
    return (
      <div className="card m-3" >
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{this.props.items[0].name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">In Stock {this.props.items[0].quantity}</h6>
          <p className="card-text">This item is currently selling for <strong>{this.props.items[0].value}$</strong></p>
          <div className="d-flex flex-row align-items-center">
            <div className="d-flex flex-column mr-2"  >
              <button className={`${icStyles.qBtn} btn btn-success`} type="button" onClick={this.increment}>+</button>
              <button className={`${icStyles.qBtn} btn btn-danger`} type="button" onClick={this.decrement}>-</button>
            </div>
            {this.state.sellingQuantity}
          </div>
          <button className="btn btn-primary ml-auto" type="button" onClick={this.sellItem}>Sell</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state[ownProps.itemName]
  };
};

export default connect(mapStateToProps, null)(ItemCard);