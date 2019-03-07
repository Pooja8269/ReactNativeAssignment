
const CounterReducer = (state = {
      newItem: '',      
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
          borderRed: state.borderRed = '#282851',
          newItem: state.newItem = '',
        })
      }
      else{
        alert("Please enter content on add item filed..")
        return Object.assign({}, state, {
          borderRed: state.borderRed = 'red',
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

export default CounterReducer;