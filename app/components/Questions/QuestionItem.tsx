
import * as React from 'react';
import { Paper, Chip, Avatar } from 'react-md';
const styles = require('./question.scss');

import { TinyDetails } from './TinyDetails';

export const QuestionItem = (props: any) => {
  let { view_count } = props;
  if (view_count > 1000) {
    view_count = Math.floor(view_count / 1000) + 'K';
  }
  return (
    <Paper zDepth={1} raiseOnHover={true} className={styles.item}>
      <section className={styles.tinyDetails}>
        <TinyDetails title={props.score} subTitle='Votes' />
        <TinyDetails title={props.answer_count} subTitle='Answer' type='answer' is_answered={props.is_answered} answer_count={props.answer_count} />
        <TinyDetails title={view_count} subTitle='Views' />
      </section>
      <section className={styles.majorDetails}>
        <h3>{props.title}</h3>
        {
          props.tags.map((chip: string, index: number) => {
            return <Chip key={index} label={chip} className={styles.tags} avatar={<Avatar random>{chip[0].toUpperCase()}</Avatar>} />
          })
        }
      </section>
    </Paper>
  );
};