
const AppReducer = (state = {
      toDoItemList:[],
      complatedList:[], 
      borderRed: '#282851', }, action) => {
  switch(action.type){
    case "ADD_ITEM":
      if(action.payload != ''){
        var toDoItemListNew = state.toDoItemList.slice();
        toDoItemListNew.unshift({key: action.payload});
        return Object.assign({}, state, {
          toDoItemList: toDoItemListNew,
          borderRed: '#282851',
        })
      }
      else{
        alert("Please enter content on add item filed..")
        return Object.assign({}, state, {
          borderRed: '#df4159',
        })
      }
    case "CHECK_TASK":
      if(action.payload != ''){
        var complatedListNew = state.complatedList.slice();
        complatedListNew.unshift(action.payload);
        return Object.assign({}, state, {
            toDoItemList: state.toDoItemList.filter(i=> i !== action.payload),
            complatedList: complatedListNew,
        })
      }
      return state;
    default:
      return state;
  }
}

export default AppReducer;