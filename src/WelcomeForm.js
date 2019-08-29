import React from "react";
import { connect } from "react-redux";
import { expendNode } from "./actions/counterAction";

class WelcomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.dispatch(expendNode(this.state.name));
  };
  onInputChange = e => {
    // console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <span>Name</span>
        <input
          name="name"
          value={this.props.inputName}
          onChange={this.onInputChange}
        />
        <button>Student Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    welcomeList: state.welcomeList
  };
};

export default connect(mapStateToProps)(WelcomeForm);
