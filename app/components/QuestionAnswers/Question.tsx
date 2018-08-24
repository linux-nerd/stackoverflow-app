import * as React from 'react';
import { IQuestions } from '../../actions/questions';
import { Divider, Button } from 'react-md';

export const Question = (props: IQuestions) => {
  return (
    <section className="question-wrapper">
      <div>
        <h2>{props.title}</h2>
        <Button flat primary swapTheming>Ask Question</Button>
      </div>


      <Divider />
    </section>
  )
}