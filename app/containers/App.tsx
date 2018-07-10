import * as React from 'react';
import Header from '../components/Header/Header';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    );
  }
}
