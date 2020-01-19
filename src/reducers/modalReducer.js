const initialState = {
  LOGIN: false,
  SIGNUP: false,
  TWEET: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case `TOGGLE_${action.payload}`:
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      return state;
  }
};

export default modalReducer;
