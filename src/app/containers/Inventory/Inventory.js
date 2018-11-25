import React from 'react';
import { connect } from 'react-redux';

import ItemCard from '../../components/Item/ItemCard';

const Inventory = (props) => {
  if (Object.keys(props.inventory).length === 0) {
    return <h1>Please add new items to the inventory.</h1>
  }
  return <div className="d-flex flex-row flex-wrap">
    {Object.keys(props.inventory).map((key, index) => {
      return <ItemCard key={key + index} itemName={key} />
    })}
  </div>
}

const mapStateToProps = state => {
  return {
    inventory: state
  };
};

export default connect(mapStateToProps, null)(Inventory);