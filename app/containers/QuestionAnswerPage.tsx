import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Question } from '../components/QuestionAnswers/Question';
import * as QuestionAnswerActions from '../actions/questionAnswer';
import { RouteComponentProps } from 'react-router';
import { IState } from '../reducers';
import { WithLoader } from "../components/shared/WithLoader";

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

const QuestionWithLoader = WithLoader(Question);

class QuestionAnswerPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchQuestionAnswer(this.props.match.params.id);
  }
  render() {
    return (
      // <div><pre>{JSON.stringify(this.props.questionAnswers, undefined, 2)}</pre></div>
      <QuestionWithLoader {...this.props.questionAnswers.question[0]} isLoading={this.props.questionAnswers.isLoading} />
    );
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(QuestionAnswerPage) as any as React.StatelessComponent<any>);