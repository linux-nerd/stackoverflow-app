import * as React from 'react';
const styles = require('./question.scss');
import * as cx from 'classnames';

export const TinyDetails = (props: any) => {
  let answerStyle = cx(styles.wrapper, {
    [styles.answered]: props.answer_count > 0 && props.type === 'answer',
    [styles.isSelected]: props.is_answered && props.type === 'answer'
  });
  return (
    <div className={answerStyle}>
      <div><span className={styles.font24}>{props.title}</span></div>
      <div><span className={styles.font12}>{props.subTitle}</span></div>
    </div>
  );
};