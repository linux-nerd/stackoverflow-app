import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Questions } from '../components/Questions/Questions';
import * as QuestionActions from '../actions/questions';
import { IState } from '../reducers';

function mapStateToProps(state: IState): Partial<any> {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<any> {
  return bindActionCreators(QuestionActions as any, dispatch);
}

class QuestionPage extends React.Component<any> {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    return (
      <Questions {...this.props.questions}/>
    );
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(QuestionPage) as any as React.StatelessComponent<any>);