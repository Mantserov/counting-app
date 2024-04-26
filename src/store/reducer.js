const initialState = {
  value: 0,
  inputValue: "",
  saved: [],
};

export const actionType = {
  save: "SAVE",
  resetSaved: "RESET_SAVED",
  add: "ADD",
  subtract: "SUBTRACT",
  reset: "RESET",
  setInput: "SET_INPUT",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.save:
      return { ...state, saved: [...state.saved, action.payload] };

    case actionType.resetSaved:
      return { ...state, saved: [] };

    case actionType.add:
      return { ...state, value: state.value + action.payload };

    case actionType.subtract:
      return { ...state, value: state.value - action.payload };

    case actionType.reset:
      return { ...state, value: 0 };

    case actionType.setInput:
      return { ...state, inputValue: action.payload };

    default:
      return state;
  }
};
