import { GET_QUESTION, POST_QUESTION } from "./actiontypes";

const initialState = {
  questions: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_QUESTION: {
      return {
        ...state,
        questions: [...state.questions, payload],
      };
    }
    case GET_QUESTION: {
      return {
        ...state,
        questions: payload,
      };
    }
    default: {
      return state;
    }
  }
};
