import * as React from 'react';
import { QuestionItem } from './QuestionItem';

export const Questions = (props: any) => {
  const questions = props.items.map((elm: any) => {
    return (
      <QuestionItem {...elm} key={elm.question_id} />
    );
  });

  return (
    <section>
      <h2>Top Questions</h2>
      {questions}
    </section>
  );
};