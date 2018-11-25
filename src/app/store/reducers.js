import update from 'immutability-helper';

import { PROCURE_FROM_SUPPLIER, SELL_TO_CUSTOMER } from './actions';
import { findIndexByItemValue } from './utils';

update.extend('$unset', function (keysToRemove, original) {
  var copy = Object.assign({}, original)
  for (const key of keysToRemove) delete copy[key]
  return copy
});

// Array of items queues
// { Item1: [ { name: 'Item1', value: 2, quantity: 10 }, { name: 'Item1', value: 12, quantity: 2 } ] ,
//   Item2: [ { name: 'Item2', value: 2, quantity: 10 }, { name: 'Item2', value: 12, quantity: 2 } ] } ]
const initialState = {
  Item1: [{ name: 'Item1', value: 2, quantity: 10 }, { name: 'Item1', value: 12, quantity: 2 }]
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROCURE_FROM_SUPPLIER: {
      const itemIndex = findIndexByItemValue(state[action.item.name], action.item.value);
      if (itemIndex < 0) {
        return update(state, state[action.item.name] ? {
          [action.item.name]: { $push: [action.item] }
        } : {
            [action.item.name]: { $set: [action.item] }
          });
      }
      const quantity = state[action.item.name][itemIndex].quantity;
      return update(state, {
        [action.item.name]: {
          [itemIndex]: {
            quantity: { $set: +quantity + +action.item.quantity }
          }
        }
      });
    }
    case SELL_TO_CUSTOMER: {
      const itemIndex = findIndexByItemValue(state[action.item.name], action.item.value);
      const quantity = state[action.item.name][itemIndex].quantity;
      if (+quantity === 1) {
        return update(state, { [action.item.name]: { $splice: [[itemIndex, 1]] } });
      }
      return update(state, {
        [action.item.name]: {
          [itemIndex]: {
            quantity: { $set: +quantity - +action.item.quantity }
          }
        }
      });
    }
    default:
      return state;
  }
}
