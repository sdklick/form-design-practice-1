import { buybook } from "./Booktype";
const initialstate = {
  numberofbook: 20,
};
const Bookreducer = (state = initialstate, action) => {
  switch (action.type) {
    case buybook:
      return { ...state, numberofbook: state.initialstate - 1 };

    default:
      return state;
  }
};

export default Bookreducer;
