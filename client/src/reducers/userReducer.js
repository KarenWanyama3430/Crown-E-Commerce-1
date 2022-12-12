const INITIAL_STATE = {
  currentUser: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "SET_SPINNER":
      return { ...state, loading: true };
    case "SET_SPINNER_TO_FALSE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
