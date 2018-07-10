import { IAction } from '../actions/helpers';
import { FETCH_QUESTIONS } from '../actions/questions';

interface TAction extends IAction {
  payload: any;
}

export default function questionsReducer(state: any = {items: []}, action: TAction) {
  if (FETCH_QUESTIONS.test(action)) {
    return Object.assign({}, ...state, {items: [...action.payload.items]})
    // return {...state, items: action.payload.items};
  }
  return state;
}
  