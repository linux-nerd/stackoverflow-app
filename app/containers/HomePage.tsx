import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import QuestionsContainer from './QuestionsPage';

export class HomePage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <div>
        <QuestionsContainer />
      </div>
    );
  }
}

export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>);
