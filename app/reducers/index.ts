import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import questions from './questionsReducer';
import questionAnswer from './questionAnswerReducer';

const rootReducer = combineReducers({
  questions,
  questionAnswer,
  routing: routing as Reducer<any>
});

export interface IState {
  questions: any;
  questionAnswer: any;
}

export default rootReducer;
