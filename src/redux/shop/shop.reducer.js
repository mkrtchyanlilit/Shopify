import types from "./shop.types";

const INITIAL_STATE = {
  favorites: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, payload] };
    default:
      return state;
  }
};

export default shopReducer;
