const initState = {
  toDoItemList:[],
  complatedList:[], 
}
const AppReducer = (state = initState, action) => {
  switch(action.type){
    case "ADD_ITEM":
      var toDoItemListNew = state.toDoItemList.slice();
      toDoItemListNew.unshift({key: action.payload});
      return Object.assign({}, state, {
        toDoItemList: toDoItemListNew,
      })
    case "CHECK_TASK":
      var complatedListNew = state.complatedList.slice();
      complatedListNew.unshift(action.payload);
      return Object.assign({}, state, {
          toDoItemList: state.toDoItemList.filter(i=> i !== action.payload),
          complatedList: complatedListNew,
      })
    default:
      return state;
  }
}

export default AppReducer;