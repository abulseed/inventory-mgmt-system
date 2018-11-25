
export const findIndexByItemValue = (arr, value) => {
  if (!arr) {
    return -1;
  }
  return arr.findIndex(item => {
    return +item.value === +value
  });
}
