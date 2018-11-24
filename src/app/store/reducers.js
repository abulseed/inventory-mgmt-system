import { PROCURE_FROM_SUPPLIER } from './actions';
import { addNewItem } from './utils';

// Array of items queues
// { Item1: [ { name: 'Item1', value: 2, quantity: 10 }, { name: 'Item1', value: 12, quantity: 2 } ] ,
//   Item2: [ { name: 'Item2', value: 2, quantity: 10 }, { name: 'Item2', value: 12, quantity: 2 } ] } ]
const initialState = {};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROCURE_FROM_SUPPLIER:
      return { ...addNewItem(state, action) };
    default:
      return state;
  }
}
