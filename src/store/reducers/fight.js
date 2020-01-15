import {
  FIGHT_IS_STARTED,
  FIGHT_HAS_ERRORED,
  FIGHT_IS_END
} from "../constants/";

const initialState = {
  isStarted: false,
  isEnd: false,
  isError: false
};

const fight = (state = initialState, action) => {
  switch (action.type) {
    case FIGHT_IS_STARTED:
      return { ...state, isStarted: true };
    case FIGHT_HAS_ERRORED:
      return { ...state, isStarted: false, isError: action.payload };
    case FIGHT_IS_END:
      return { ...state, isStarted: false, isEnd: true };

    default:
      return state;
  }
};

export default fight;
