import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import questions from './questionsReducer';

const rootReducer = combineReducers({
  questions,
  routing: routing as Reducer<any>
});

export interface IState {
  questions: any;
}

export default rootReducer;
