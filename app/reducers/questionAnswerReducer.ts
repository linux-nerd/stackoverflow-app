import { IActionWithPayload } from '../actions/helpers';
import { FETCH_QUESTION_ANSWER, IPayload } from '../actions/questionAnswer';

const DEFAULT_PAYLOAD: IPayload = {
  has_more: false,
  question: [],
  answers: [],
  isLoading: true
};

export default function questionAnswerReducer(state: IPayload = DEFAULT_PAYLOAD, action: IActionWithPayload<IPayload>) {
  if (FETCH_QUESTION_ANSWER.test(action)) {
    state = Object.assign(
      {},
      state,
      {
        question: [...action.payload.question],
        answers: [...action.payload.answers],
        has_more: action.payload.has_more,
        isLoading: action.payload.isLoading
      }
    );
  }
  return state;
}