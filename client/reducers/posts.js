// A reducer takes in two things:
// 1. an action
// 2. a copy of current state

function posts(state=[], action) {
  console.log('the post will change')
  console.log(state, action)
  return state;
}

export default posts;
