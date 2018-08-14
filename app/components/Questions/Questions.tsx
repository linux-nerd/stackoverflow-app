import * as React from 'react';
import { QuestionItem } from './QuestionItem';
import { IQuestions } from '../../actions/questions';
const styles = require('./question.scss');

interface IQuestionsProps {
  items: Array<IQuestions>;
}

export const Questions = (props: IQuestionsProps) => {
  const questions = props.items.map((elm: IQuestions) => {
    return (
      <QuestionItem {...elm} key={elm.question_id} />
    );
  });

  return (
    <section className='question-wrapper'>
      <h2 className={styles.title}>Top Questions</h2>
      {questions}
    </section>
  );
};