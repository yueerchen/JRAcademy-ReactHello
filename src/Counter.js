import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
      super(props);
      console.log('Counter constructor');
    }

    componentDidMount() {
      console.log('Counter componentDidMount');
    }

    componentDidUpdate() {
      console.log('Counter componentDidUpdate');
    }
  
    render(){
      console.log('Counter render');
      return(
        <div>
          <span>count is : {this.props.count} </span>
          <button onClick={this.props.handleSubtract}>-</button>
          <button onClick={this.props.handleAdd}>+</button>
        </div>
      );
    }
  }
  