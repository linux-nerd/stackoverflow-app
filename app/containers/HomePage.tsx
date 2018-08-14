import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import QuestionsContainer from './QuestionsPage';
import QuestionAnswerContainer from './QuestionAnswerPage';

export class HomePage extends React.Component<RouteComponentProps<any>, void> {
  componentDidMount() {
    this.props.history.push('/questions');
  }
  render() {
    return (
      <main className='main'>
        {/* <QuestionsContainer /> */}
        <Route path={`/questions`} component={QuestionsContainer} />
        <Route path={`/quesAns/:id`} component={QuestionAnswerContainer} />
      </main>
    );
  }
}

export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>);
