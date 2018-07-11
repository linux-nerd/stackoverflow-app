
import * as React from 'react';
import { Paper, Chip } from 'react-md';
import * as cx from 'classnames';
const styles = require('./question.scss');

export const QuestionItem = (props: any) => {
  let answerStyle = cx(styles.wrapper, {
    [styles.answered]: props.answer_count > 0,
    [styles.isSelected]: props.is_answered
  });

  let { view_count } = props;
  if (view_count > 1000) {
    view_count = Math.floor(view_count / 1000) + 'K';
  }
  return (
    <Paper zDepth={1} raiseOnHover={true} className={styles.item}>
      <section className={styles.tinyDetails}>
        <div className={styles.wrapper}>
          <div><span className={styles.font24}>{props.score}</span></div>
          <div><span className={styles.font12}>Votes</span></div>
        </div>
        <div className={answerStyle}>
          <div><span className={styles.font24}>{props.answer_count}</span></div>
          <div><span className={styles.font12}>Answer</span></div>
        </div>
        <div className={styles.wrapper}>
          <div><span className={styles.font24}>{view_count}</span></div>
          <div><span className={styles.font12}>Views</span></div>
        </div>
      </section>
      <section className={styles.majorDetails}>
        <h3>{props.title}</h3>
        {
          props.tags.map((chip: string, index: number) => {
            return <Chip key={index} label={chip} className={styles.tags} />
          })
        }
      </section>
    </Paper>
  );
};