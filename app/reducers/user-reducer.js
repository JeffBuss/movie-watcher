const userReducer = (state=null, action) => {
  switch (action.type) {
    case "SIGN_IN_USER":
      return action.user;
    default:
      return state;
  }
}

export default userReducer;
