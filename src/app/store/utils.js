/**
 * Helper function to add new item to the inventory.
 * @param state current state
 * @param action apply action
 */
export const addNewItem = (state, action) => {
  const newState = { ...state };
  let itemQ = newState[action.item.name] || [];
  const existingItem = itemQ.find(item => {
    return item.value === action.item.value;
  })
  if (existingItem) {
    existingItem.quantity = existingItem.quantity + action.item.quantity;
  } else {
    itemQ = [...itemQ, action.item];
  }
  newState[action.item.name] = itemQ;
  return newState;
}