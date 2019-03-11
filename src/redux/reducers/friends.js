export default (state=[], action)=>{
  switch(action.type){
    case 'SET_FRIENDS':
    console.log("Set Friends Reducer", state, action)
    return action.friends
    default:
    return state;
  }
}
