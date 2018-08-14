import { actionCreator } from './helpers';

export interface IQuestions {
  tags: Array<string>;
  owner: IOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  link: string;
  title: string;
  body: string;
}

export interface IOwner {
  reputation: number;
  user_id: number;
  user_type: string;
  accept_rate: number;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface IPayload {
  has_more: boolean;
  items: Array<IQuestions>;
}

export const FETCH_QUESTIONS = actionCreator('FETCH_QUESTIONS');

export function fetchQuestions() {
  return (dispatch: Function) => {
    fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow&filter=!9Z(-wwYGT').then((res) => {
      return res.json();
    }).then(res => {
      const newRes: IPayload = { has_more: res.has_more, items: res.items };
      return newRes;
    }).then((res: IPayload) => {
      dispatch(FETCH_QUESTIONS(res));
    });
  };
}
