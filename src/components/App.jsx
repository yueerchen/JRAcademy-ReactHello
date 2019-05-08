import React from 'react';
import { connect } from "react-redux";
import './App.css';
import WelcomeList from './WelcomeList';
import Counter from './Counter';
import WelcomeForm from "./WelcomeForm";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {welcomeList, count, diff, dispatch} = this.props;
    return (
      <section className="App">
        <WelcomeList welcomeList={welcomeList}/>
        <Counter count={count} diff={diff} dispatch={dispatch}/>
        <WelcomeForm/>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    welcomeList: state.welcome,
    count: state.counter.count,
    diff: state.counter.diff,
  }
}

const AppC = connect(mapStateToProps)(App)

export default AppC;
