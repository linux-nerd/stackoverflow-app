import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
// import { Questions } from '../components/Questions/';
import * as QuestionAnswerActions from '../actions/questionAnswer';
import { RouteComponentProps } from 'react-router';
import { IState } from '../reducers';

export interface IProps extends RouteComponentProps<any> {
  fetchQuestionAnswer: Function;
  questionAnswers: QuestionAnswerActions.IPayload;
}
function mapStateToProps(state: IState): Partial<any> {
  return {
    questionAnswers: state.questionAnswer
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<any> {
  return bindActionCreators(QuestionAnswerActions as any, dispatch);
}

class QuestionAnswerPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchQuestionAnswer(this.props.match.params.id);
  }
  render() {
    return (
      <div><pre>{JSON.stringify(this.props.questionAnswers, undefined, 2)}</pre></div>
    );
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(QuestionAnswerPage) as any as React.StatelessComponent<any>);