const initState = {
  toDoItemList:[],
  complatedList:[],
  totalCount: 0,
  pendingCount: 0,
}
const AppReducer = (state = initState, action) => {
  switch(action.type){
    case "ADD_ITEM":
      var toDoItemListNew = state.toDoItemList.slice();
      toDoItemListNew.unshift({key: action.payload});
      var totalCountNew = toDoItemListNew.length + state.complatedList.length;
      var pendingCountNew =toDoItemListNew.length;

      return Object.assign({}, state, {
        toDoItemList: toDoItemListNew,
        totalCount: totalCountNew,
        pendingCount: pendingCountNew,
      })
    case "CHECK_TASK":
      var complatedListNew = state.complatedList.slice();
      complatedListNew.unshift(action.payload);
      var toDoItemListNew1 = state.toDoItemList.filter(i=> i !== action.payload);
      var totalCountNew1 = state.toDoItemList.length + state.complatedList.length;
      var pendingCountNew1 = toDoItemListNew1.length;
      
      return Object.assign({}, state, {
          toDoItemList: toDoItemListNew1,
          complatedList: complatedListNew,
          totalCount: totalCountNew1,
          pendingCount: pendingCountNew1,
      })
    case "REMOVE_TASK":
      var toDoItemListNew2 = state.toDoItemList.filter(i=> i !== action.payload);
      var totalCountNew2 = toDoItemListNew2.length + state.complatedList.length;
      var pendingCountNew2 = toDoItemListNew2.length;
      
      return Object.assign({}, state, {
          toDoItemList: toDoItemListNew2,
          totalCount: totalCountNew2,
          pendingCount: pendingCountNew2,
      }) 
    default:
      return state;
  }
}

export default AppReducer;