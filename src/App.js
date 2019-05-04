import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { count:0 };
    console.log('APP constructor');
  }

  componentDidMount() {
    console.log('APP componentDidMount');
  }

  componentDidUpdate() {
    console.log('APP componentDidUpdate');
  }

  handleAdd = (e)=>{
    this.setState((preState, props) => ({count:preState.count+1}));
  }

  handleSubtract = (e)=>{
    this.setState((preState, props) => {
      return {
        count: preState.count - 1
      };
    });
  }

  render() {
    console.log('App render');
    return (
      <section className="App">
          <Welcome name={'Nick'} count={this.state.count} isTeacher />
          <Welcome name="Tim" count={this.state.count} />
          <Welcome name={'test'} count={this.state.count} />
          <Counter 
            count={this.state.count} 
            handleAdd={this.handleAdd}
            handleSubtract={this.handleSubtract}
          />
      </section>
    );
  }
}

export default App;
