// A reducer takes in two things:
// 1. an action
// 2. a copy of current state

function comments(state=[], action) {
  console.log(state, action)
  return state;
}

export default comments;
