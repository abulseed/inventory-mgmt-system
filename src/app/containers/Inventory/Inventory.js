import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../../components/Item/ItemCard';

class Inventory extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = props.inventory;
  }

  render() {
    return <div className="d-flex flex-row flex-wrap">
      {Object.keys(this.state).map((key, index) => {
        return <ItemCard key={key + index} itemName={key} />
      })}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    inventory: state
  };
};

export default connect(mapStateToProps, null)(Inventory);