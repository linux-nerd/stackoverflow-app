import { actionCreator } from './helpers';
import { IQuestions, IOwner } from './questions';

export interface IAnswer {
  owner: IOwner;
  is_accepted: boolean;
  score: number;
  last_activity_date: number;
  creation_date: number;
  answer_id: number;
  question_id: number;
  body: string;
}

export interface IPayload {
  has_more: boolean;
  question: Array<IQuestions>;
  answers: Array<IAnswer>;
}


export const FETCH_QUESTION_ANSWER = actionCreator('FETCH_QUESTION_ANSWER');

export function fetchQuestionAnswer(questionId: number | string) {
  return (dispatch: Function) => {
    fetch(`https://api.stackexchange.com/2.2/questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=!b1MME11ES4lLIL`).then((res) => {
      return res.json();
    }).then((res) => {
      const answers = [...res.items[0].answers];
      const resClone = Object.assign({}, res);
      delete resClone.items[0].answers;
      const newRes: IPayload = { has_more: res.has_more, question: resClone.items, answers };
      return newRes;
    }).then((res: IPayload) => {
      dispatch(FETCH_QUESTION_ANSWER(res));
    });

  }
}
