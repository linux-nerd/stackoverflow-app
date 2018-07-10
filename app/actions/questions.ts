import { actionCreator } from './helpers';

export const FETCH_QUESTIONS = <any>actionCreator('FETCH_QUESTIONS');

export function fetchQuestions() {
  return (dispatch: Function) => {
    fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow&filter=!9Z(-wwYGT').then((res) => {
      return res.json();
    }).then(res => {
      dispatch(FETCH_QUESTIONS(res));
    });
  };
}
