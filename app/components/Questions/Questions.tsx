import * as React from 'react';
import { QuestionItem } from './QuestionItem';
const styles = require('./question.scss');
export const Questions = (props: any) => {
  const questions = props.items.map((elm: any) => {
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