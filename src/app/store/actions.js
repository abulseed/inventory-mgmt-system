export const PROCURE_FROM_SUPPLIER = 'PROCURE_FROM_SUPPLIER';

export const SELL_TO_CUSTOMER = 'SELL_TO_CUSTOMER';

export const RETURN_BY_CUSTOMER = 'RETURN_BY_CUSTOMER';

export const procureItemFromSupplierAction = (item) => {
  return {
    type: PROCURE_FROM_SUPPLIER,
    item
  }
}

export const sellItemFromInventory = (item) => {
  return {
    type: SELL_TO_CUSTOMER,
    item
  }
}
