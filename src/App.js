import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";
import WelcomeForm from "./WelcomeForm";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("APP constructor");
  }

  componentDidMount() {
    console.log("APP componentDidMount");
  }

  componentDidUpdate() {
    console.log("APP componentDidUpdate");
  }
  handleAdd = e => {
    this.setState((preState, props) => ({ count: preState.count + 1 }));
  };

  handleSubtract = e => {
    this.setState((preState, props) => {
      return {
        count: preState.count - 1
      };
    });
  };

  render() {
    console.log("App render");
    return (
      <section className="App">
        {this.props.welcomeList.map((welcome, index) => (
          <Welcome
            key={index}
            name={welcome.name}
            isTeacher={welcome.isTeacher}
            count={this.props.count}
          />
        ))}
        <WelcomeForm />
        <Counter />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    welcomeList: state.welcomeList
  };
};

export default connect(mapStateToProps)(App);
