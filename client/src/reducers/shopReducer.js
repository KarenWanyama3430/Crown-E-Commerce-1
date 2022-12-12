const INITIAL_STATE = {
  collections: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_FROM_FIREBASE":
      return {
        ...state,
        collections: action.payload,
      };
    case "FETCH_ITEMS_FAILURE":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
