import { IActionWithPayload } from '../actions/helpers';
import { FETCH_QUESTIONS, IPayload } from '../actions/questions';

export default function questionsReducer(state: IPayload = { items: [], has_more: true }, action: IActionWithPayload<IPayload>) {
  if (FETCH_QUESTIONS.test(action)) {
    state = Object.assign(
      {},
      state,
      { items: [...state.items, ...action.payload.items], has_more: action.payload.has_more }
    );
  }
  return state;
}