export const addItem = item => (
  {
    type: 'ADD_ITEM',
    payload: item,
  }
);

export const checkedTask = item => (
  {
    type: 'CHECK_TASK',
    payload: item,
  }
);

export const removeTask = item => (
  {
    type: 'REMOVE_TASK',
    payload: item,
  }
);