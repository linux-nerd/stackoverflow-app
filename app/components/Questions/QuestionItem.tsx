
import * as React from 'react';
import { Paper, Chip, Avatar } from 'react-md';
import { Link } from 'react-router-dom';
const styles = require('./question.scss');

import { TinyDetails } from './TinyDetails';
import { IQuestions } from "../../actions/questions";
export const QuestionItem = (props: IQuestions) => {
  let view_count: string;
  if (props.view_count > 1000) {
    view_count = Math.floor(props.view_count / 1000) + 'K';
  } else {
    view_count = Math.floor(props.view_count).toString();
  }
  return (
    <Paper zDepth={1} raiseOnHover={true} className={styles.item}>
      <section className={styles.tinyDetails}>
        <TinyDetails title={props.score.toString()} subTitle='Votes' />
        <TinyDetails title={props.answer_count.toString()} subTitle='Answer' type='answer' is_answered={props.is_answered} answer_count={props.answer_count} />
        <TinyDetails title={view_count} subTitle='Views' />
      </section>
      <section className={styles.majorDetails}>
        <Link to={`/quesAns/${props.question_id}`} className={styles.basicAnchor}>
          <h3>{props.title}</h3>
        </Link>
        {
          props.tags.map((chip: string, index: number) => {
            return <Chip key={index} label={chip} className={styles.tags} avatar={<Avatar random>{chip[0].toUpperCase()}</Avatar>} />
          })
        }
      </section>
    </Paper>
  );
};