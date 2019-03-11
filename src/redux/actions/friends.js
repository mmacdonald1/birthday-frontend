export const setFriendsFetch = () => {
  return(dispatch) =>{
    fetch('http://localhost:3000/friends')
    .then(resp=> resp.json())
    .then(data => {
      console.log(data)
      dispatch(setFriends(data.friends))
    })
  }
}

export const setFriends = (friends) => {
  console.log("Action set cards", cards)
  return{
    type:"SET_FRIENDS",
    friends
  }
}
