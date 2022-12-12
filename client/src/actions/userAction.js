export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

export const setSpinner = () => {
  return {
    type: "SET_SPINNER",
  };
};

export const setSpinnerToFalse = () => {
  return {
    type: "SET_SPINNER_TO_FALSE",
  };
};
